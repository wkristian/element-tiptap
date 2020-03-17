<template>
  <command-button
    :command="openApplyLinkControl"
    :tooltip="t('editor.extensions.Link.edit.tooltip')"
    icon="edit"
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
export default class EditLinkCommandButton extends Mixins(i18nMixin) {
  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;

  @Prop({
    type: String,
    required: true,
  })
  readonly initUrl!: string;

  openApplyLinkControl (): void {
    // @ts-ignore
    this.$q.dialog({
      title: this.t('editor.extensions.Link.edit.control.title'),
      prompt: {
        type: 'url', // TODO: Add validation on url input (must be http...)
        model: this.initUrl
      },
      ok: {
        label: this.t('editor.extensions.Link.edit.control.confirm'),
        flat: true,
        rounded: true
      },
      cancel: {
        label: this.t('editor.extensions.Link.edit.control.cancel'),
        flat: true,
        rounded: true
      },
      persistent: false
      // @ts-ignore
    }).onOk(href => {
      this.editorContext.commands.link({ href });
    });
  }
};
</script>
