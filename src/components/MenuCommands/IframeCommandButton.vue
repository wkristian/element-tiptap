<template>
  <command-button
    :command="openInsertVideoControl"
    :tooltip="t('editor.extensions.Iframe.tooltip')"
    icon="video"
  />
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import { MenuData } from 'tiptap';
import i18nMixin from '@/mixins/i18nMixin';
import CommandButton from './CommandButton.vue';

@Component({
  components: {
    CommandButton,
  },
})
export default class IframeCommandButton extends Mixins(i18nMixin) {
  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;

  openInsertVideoControl (): void {
    // @ts-ignore
    this.$q.dialog({
      title: this.t('editor.extensions.Iframe.control.title'),
      prompt: {
        type: 'url', // TODO: Add validation on url input (must be http...)
      },
      ok: {
        label: this.t('editor.extensions.Iframe.control.confirm'),
        flat: true,
        rounded: true
      },
      cancel: {
        label: this.t('editor.extensions.Iframe.control.cancel'),
        flat: true,
        rounded: true
      },
      persistent: false
      // @ts-ignore
    }).onOk(href => {
      this.editorContext.commands.iframe({ src: href });
    });
  }
};
</script>
