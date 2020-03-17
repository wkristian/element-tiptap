<template>
  <div>
    <command-button
      :is-active="isHeadingActive()"
      :tooltip="t('editor.extensions.Heading.tooltip')"
      icon="heading"
      ref="buttonMenu"
    />
    <q-popup-proxy
      :target="$refs.buttonMenu"
      auto-close
      >
        <q-list>
          <q-item
            clickable
            v-ripple
            @click="editorContext.commands.paragraph()"
            :active="editorContext.isActive.paragraph()">
            <q-item-section>
              <q-item-label>{{ t('editor.extensions.Heading.buttons.paragraph') }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            v-for="i in level"
            :key="i"
            @click="editorContext.commands.heading({ level: i })"
            :active="isHeadingActive(i)">
            <q-item-section>
              <q-item-label>
                <component
                  :is="'h' +i"
                  data-item-type="heading"
                >
                  {{ t('editor.extensions.Heading.buttons.heading') }} {{ i }}
                </component>
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
    </q-popup-proxy>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import { MenuData } from 'tiptap';
import i18nMixin from '@/mixins/i18nMixin';
import { isHeadingActive } from '@/utils/heading';
import CommandButton from './CommandButton.vue';

@Component({
  components: {
    CommandButton
  },
})
export default class HeadingDropdown extends Mixins(i18nMixin) {
  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;

  private get editor () {
    return this.editorContext.editor;
  }

  private get level () {
    return this.editor.extensions.options.heading.level;
  }

  private isHeadingActive (level: number): boolean {
    return isHeadingActive(this.editor.state, level);
  }
};
</script>
