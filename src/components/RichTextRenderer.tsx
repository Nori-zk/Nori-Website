/**
 * Simple Rich Text Renderer for Contentful Rich Text
 */

import { RichText } from '../types/contentful';

interface RichTextRendererProps {
  content: RichText;
  className?: string;
}

export function RichTextRenderer({ content, className }: RichTextRendererProps) {
  if (!content?.json) {
    return null;
  }

  const renderNode = (node: any, index: number): React.ReactNode => {
    if (!node) return null;

    switch (node.nodeType) {
      case 'document':
        return (
          <div className={className}>
            {node.content?.map((child: any, i: number) => renderNode(child, i))}
          </div>
        );

      case 'paragraph':
        return (
          <p key={index}>
            {node.content?.map((child: any, i: number) => renderNode(child, i))}
          </p>
        );

      case 'heading-1':
        return (
          <h1 key={index}>
            {node.content?.map((child: any, i: number) => renderNode(child, i))}
          </h1>
        );

      case 'heading-2':
        return (
          <h2 key={index}>
            {node.content?.map((child: any, i: number) => renderNode(child, i))}
          </h2>
        );

      case 'heading-3':
        return (
          <h3 key={index}>
            {node.content?.map((child: any, i: number) => renderNode(child, i))}
          </h3>
        );

      case 'text':
        let text = node.value;

        // Handle text marks (bold, italic, etc.)
        if (node.marks && node.marks.length > 0) {
          node.marks.forEach((mark: any) => {
            switch (mark.type) {
              case 'bold':
                text = <strong key={index}>{text}</strong>;
                break;
              case 'italic':
                text = <em key={index}>{text}</em>;
                break;
              case 'underline':
                text = <u key={index}>{text}</u>;
                break;
              case 'code':
                text = <code key={index}>{text}</code>;
                break;
            }
          });
        }

        return text;

      default:
        // For unsupported types, just try to render content
        if (node.content) {
          return node.content.map((child: any, i: number) => renderNode(child, i));
        }
        return null;
    }
  };

  return <>{renderNode(content.json, 0)}</>;
}
