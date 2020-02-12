export { Doc, Text } from 'tiptap';

export {
  HardBreak,
  TrailingNode,
  Placeholder,
  TableHeader,
  TableCell,
  TableRow,
} from 'tiptap-extensions';

// nodes
export { default as Paragraph } from './paragraph';
export { default as Heading } from './heading';
export { default as Blockquote } from './blockquote';
export { default as CodeBlock } from './code_block';
export { default as ListItem } from './list_item';
export { default as BulletList } from './bullet_list';
export { default as OrderedList } from './ordered_list';
export { default as Image } from './image';
export { default as TodoItem } from './todo_item';
export { default as TodoList } from './todo_list';
export { default as Table } from './table';
export { default as Iframe } from './iframe';

// marks
export { default as Bold } from './bold';
export { default as Underline } from './underline';
export { default as Italic } from './italic';
export { default as Strike } from './strike';
export { default as Link } from './link';
export { default as TextColor } from './text_color';
export { default as TextHighlight } from './text_highlight';

// extensions
export { default as HorizontalRule } from './horizontal_rule';
export { default as History } from './history';
export { default as TextAlign } from './text_align';
export { default as Indent } from './indent';
export { default as LineHeight } from './line_height';
export { default as FormatClear } from './format_clear';