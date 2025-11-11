/**
 * GraphQL query fragments and queries for Contentful
 */

// System Fragment
export const SYS_FRAGMENT = `
  fragment SysFields on Sys {
    id
    publishedAt
    firstPublishedAt
  }
`;

// ContentBlock Fragment
export const CONTENT_BLOCK_FRAGMENT = `
  fragment ContentBlockFields on ContentBlock {
    sys {
      ...SysFields
    }
    heading
    greenText
    body {
      json
    }
  }
`;

// Section Fragment (with nested ContentBlocks)
export const SECTION_FRAGMENT = `
  fragment SectionFields on Section {
    sys {
      ...SysFields
    }
    title
    tag
    slug
    greentext
    contentBlocksCollection(limit: 10) {
      items {
        ...ContentBlockFields
      }
    }
  }
`;

/**
 * Query to fetch all Sections (with nested ContentBlocks)
 * Limited to 20 content blocks per section to avoid complexity issues
 */
export const GET_SECTIONS_QUERY = `
  ${SYS_FRAGMENT}
  ${CONTENT_BLOCK_FRAGMENT}

  query GetSections($locale: String!, $limit: Int = 20, $skip: Int = 0, $preview: Boolean = false) {
    sectionCollection(locale: $locale, limit: $limit, skip: $skip, preview: $preview) {
      total
      skip
      limit
      items {
        sys {
          ...SysFields
        }
        title
        tag
        slug
        greentext
        contentBlocksCollection(limit: 20) {
          items {
            ...ContentBlockFields
          }
        }
      }
    }
  }
`;

/**
 * Query to fetch sections by tag (with nested ContentBlocks)
 */
export const GET_SECTIONS_BY_TAG_QUERY = `
  ${SYS_FRAGMENT}
  ${CONTENT_BLOCK_FRAGMENT}

  query GetSectionsByTag($tag: String!, $locale: String!, $limit: Int = 20, $skip: Int = 0, $preview: Boolean = false) {
    sectionCollection(where: { tag: $tag }, locale: $locale, limit: $limit, skip: $skip, preview: $preview) {
      total
      skip
      limit
      items {
        sys {
          ...SysFields
        }
        title
        tag
        slug
        greentext
        contentBlocksCollection(limit: 20) {
          items {
            ...ContentBlockFields
          }
        }
      }
    }
  }
`;
