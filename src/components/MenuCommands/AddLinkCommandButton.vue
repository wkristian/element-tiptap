<template>
  <div>
    <command-button
      :is-active="editorContext.isActive.link()"
      :command="openApplyLinkControl"
      :tooltip="t('editor.extensions.Link.add.tooltip')"
      icon="link"
    />
  </div>
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
export default class AddLinkCommandButton extends Mixins(i18nMixin) {
  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;

  openApplyLinkControl (): void {
    // @ts-ignore
    this.$q.dialog({
      title: this.t('editor.extensions.Link.add.control.title'),
      prompt: {
        type: 'url', // optional
      },
      ok: {
        label: this.t('editor.extensions.Link.add.control.confirm'),
        flat: true,
        rounded: true
      },
      cancel: {
        label: this.t('editor.extensions.Link.add.control.cancel'),
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
