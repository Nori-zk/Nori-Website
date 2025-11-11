import { useQuery, UseQueryResult } from "@tanstack/react-query";
import {
  fetchGraphQL,
  extractCollectionItems,
  buildPaginationVars,
} from "../api/contentful";
import { GET_SECTIONS_QUERY, GET_SECTIONS_BY_TAG_QUERY } from "../api/queries";
import type { Section, QueryOptions } from "../types/contentful";

/**
 * Hook to fetch all Sections (with nested ContentBlocks)
 */
export function useSections(
  options: QueryOptions = {}
): UseQueryResult<Section[]> {
  const variables = buildPaginationVars(options);

  return useQuery({
    queryKey: ["sections", variables],
    queryFn: async () => {
      const response = await fetchGraphQL(
        GET_SECTIONS_QUERY,
        variables,
        options
      );
      const items = extractCollectionItems<any>(response, "sectionCollection");

      // Transform the nested contentBlocksCollection into a flat array
      return items.map((section: any) => ({
        ...section,
        contentBlocks: section.contentBlocksCollection?.items || [],
      }));
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

/**
 * Hook to fetch Sections by tag (with nested ContentBlocks)
 */
export function useSectionsByTag(
  tag: string,
  options: QueryOptions = {}
): UseQueryResult<Section[]> {
  const variables = buildPaginationVars(options);

  return useQuery({
    queryKey: ["sections", "tag", tag, variables],
    queryFn: async () => {
      const response = await fetchGraphQL(
        GET_SECTIONS_BY_TAG_QUERY,
        { tag, ...variables },
        options
      );
      const items = extractCollectionItems<any>(response, "sectionCollection");

      // Transform the nested contentBlocksCollection into a flat array
      return items.map((section: any) => ({
        ...section,
        contentBlocks: section.contentBlocksCollection?.items || [],
      }));
    },
    enabled: !!tag,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
