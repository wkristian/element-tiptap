<template>
  <div>
    <q-popup-proxy :target="$refs.buttonAddImg" ref="popoverRef" :offset="[10, 5]" auto-close>
      <q-list dense>
        <q-item clickable v-ripple @click.prevent="openUrlPrompt">
          <q-item-section>
            <q-item-label>
              {{ t('editor.extensions.Image.buttons.insert_by_url') }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click.prevent="imageUploadDialogVisible = true">
          <q-item-section>
            <q-item-label>
              {{ t('editor.extensions.Image.buttons.upload_image') }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-popup-proxy>

      <command-button
        slot="reference"
        :tooltip="t('editor.extensions.Image.tooltip')"
        icon="image"
        ref="buttonAddImg"
      />

    <q-dialog v-model="imageUploadDialogVisible">

          <q-uploader
            :factory="uploadImage"
            ref="uploader"
            :label="t('editor.extensions.Image.control.upload_image.title')"
            text-color="black"
            no-thumbnails
            style="max-width: 500px"
            auto-upload
            accept=".jpg, .png, image/*"
          >
          <template v-slot:list="" >
              <div style="width: 200px; height: 200px;">

              </div>
          </template>
          </q-uploader>

    </q-dialog>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import { MenuData } from 'tiptap';
import i18nMixin from '@/mixins/i18nMixin';
import { readFileDataUrl } from '@/utils/shared';
import CommandButton from './CommandButton.vue';
// import { HttpRequestOptions } from 'element-ui/types/upload';

@Component({
  components: {
    CommandButton,
  },
})
export default class ImageCommandButton extends Mixins(i18nMixin) {
  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;

  imageUploadDialogVisible: boolean = false;

  private get imageNodeOptions () {
    return this.editorContext.editor.extensions.options.image;
  }

  openUrlPrompt (): void {
    // @ts-ignore
    this.$q.dialog({
      title: this.t('editor.extensions.Image.control.insert_by_url.title'),
      prompt: {
        type: 'url', // optional
        model: '',
      },
      ok: {
        label: this.t('editor.extensions.Image.control.insert_by_url.confirm'),
        flat: true,
        rounded: true
      },
      cancel: {
        label: this.t('editor.extensions.Image.control.insert_by_url.cancel'),
        flat: true,
        rounded: true
      },
      persistent: false
      // @ts-ignore
    }).onOk(url => {
      this.editorContext.commands.image({ src: url });
    });
  }

  async uploadImage (files: any) {
    const file = files[0];

    const uploadRequest = this.imageNodeOptions.uploadRequest;
    const url = await (uploadRequest ? uploadRequest(file) : readFileDataUrl(file));

    this.editorContext.commands.image({ src: url });

    this.imageUploadDialogVisible = false;
  }
};
</script>
