<template>
  <q-page>
      <el-tiptap
        :extensions="textExtensions"
        content="Text Extensions"
      />
  </q-page>
</template>

<script>

import {
  Doc,
  Text,
  Paragraph,
  // text extensions
  Bold,
  Underline,
  Italic,
  Strike,
  Code,
  TextColor,
  TextHighlight,
  FormatClear,
  // paragraph extensions
  Heading,
  ListItem,
  BulletList,
  OrderedList,
  TodoItem,
  TodoList,
  TextAlign,
  LineHeight,
  Indent,
  Blockquote,
  CodeBlock,
  // rich and tools extensions
  Link,
  Image,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  Iframe,
  TrailingNode,
  HorizontalRule,
  Fullscreen,
  Print,
  Preview,
  SelectAll,
  History,
} from 'element-tiptap';

export default {
  data () {
    return {
      textExtensions: [
        new Doc(),
        new Text(),
        new Paragraph(),
        new Bold({ bubble: false }),
        new Underline({ bubble: false }),
        new Italic({ bubble: false }),
        new Strike({ bubble: false }),
        new Code(),
        new TextColor({ bubble: false }),
        new TextHighlight({ bubble: false }),
        new FormatClear(),
        new Heading({ level: 5 }),
        new ListItem(),
        new BulletList(),
        new OrderedList(),
        new TodoItem(),
        new TodoList(),
        new TextAlign(),
        new LineHeight(),
        new Indent(),
        new Blockquote(),
        new CodeBlock(),
        new Link(),
        new Image(),
        new Iframe(),
        new Table({ resizable: true }),
        new TableHeader(),
        new TableCell(),
        new TableRow(),
        new HorizontalRule(),
        new Print(),
        new Preview(),
        new SelectAll(),
        new Fullscreen(),
        new TrailingNode(),
        new History(),
      ],
    };
  },
};
</script>
