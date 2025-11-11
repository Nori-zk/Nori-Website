import { ContentfulResponse, QueryOptions } from "../types/contentful";

// Contentful GraphQL endpoint
const CONTENTFUL_SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const CONTENTFUL_ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
const CONTENTFUL_PREVIEW_TOKEN = import.meta.env.VITE_CONTENTFUL_PREVIEW_TOKEN;
const CONTENTFUL_ENVIRONMENT =
  import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || "master";

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
  throw new Error(
    "Missing Contentful environment variables. Please check your .env file."
  );
}

const getGraphQLEndpoint = (preview = false): string => {
  const baseUrl = preview
    ? "https://graphql.contentful.com"
    : "https://graphql.contentful.com";
  return `${baseUrl}/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}`;
};

const getAccessToken = (preview = false): string => {
  return preview && CONTENTFUL_PREVIEW_TOKEN
    ? CONTENTFUL_PREVIEW_TOKEN
    : CONTENTFUL_ACCESS_TOKEN;
};

/**
 * Execute a GraphQL query against Contentful's GraphQL API
 * @param query - GraphQL query string
 * @param variables - Query variables
 * @param options - Query options (preview, locale, etc.)
 */
export async function fetchGraphQL<T>(
  query: string,
  variables: Record<string, any> = {},
  options: QueryOptions = {}
): Promise<ContentfulResponse<T>> {
  const { preview = false, locale = "en-US" } = options;

  const endpoint = getGraphQLEndpoint(preview);
  const token = getAccessToken(preview);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          locale,
          ...variables,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(
        `GraphQL request failed: ${response.status} ${response.statusText}`
      );
    }

    const json = await response.json();

    if (json.errors) {
      console.error("GraphQL errors:", json.errors);
    }

    return json as ContentfulResponse<T>;
  } catch (error) {
    console.error("Error fetching from Contentful GraphQL:", error);
    throw error;
  }
}

/**
 * Extract nested data from Contentful response
 * Handles the common pattern of response.data.someCollection.items
 */
export function extractCollectionItems<T>(
  response: ContentfulResponse<any>,
  collectionKey: string
): T[] {
  return response?.data?.[collectionKey]?.items || [];
}

/**
 * Extract a single item from Contentful response
 */
export function extractSingleItem<T>(
  response: ContentfulResponse<any>,
  itemKey: string
): T | null {
  return response?.data?.[itemKey] || null;
}

/**
 * Build pagination variables
 */
export function buildPaginationVars(
  options: QueryOptions = {}
): Record<string, any> {
  const { limit = 10, skip = 0, order } = options;

  const vars: Record<string, any> = {
    limit,
    skip,
  };

  if (order) {
    vars.order = order;
  }

  return vars;
}
