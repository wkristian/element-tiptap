<template>
  <div>
    <q-popup-proxy :target="$refs.buttonTarget" ref="popoverRef" :offset="[10, 10]">
     <div class="colors-container">
        <div class="predefined-colors__container">
          <div
            v-for="color in predefinedColors"
            :key="color"
            class="color__wrapper"
          >
            <div
              :style="{
                'background-color': color,
              }"
              class="color"
              @click="selectColor(color)"
            />
          </div>
        </div>

        <div
          v-if="resetButtonText"
          class="colors-container__footer"
        >
          <q-btn
            type="text"
            @click="selectColor(null)"
            class="q-mt-sm q-mb-sm"
            flat
          >
            {{ resetButtonText }}
          </q-btn>
        </div>
      </div>
    </q-popup-proxy>

    <command-button
      slot="reference"
      :tooltip="tooltip"
      :icon="icon"
      ref="buttonTarget"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import CommandButton from './CommandButton.vue';

@Component({
  components: {
    CommandButton,
  },
})
export default class ColorPopover extends Vue {
  @Prop({
    type: Array,
    default: () => [],
  })
  readonly predefinedColors!: string[];

  @Prop({
    type: String,
    required: true,
  })
  readonly tooltip!: string;

  @Prop({
    type: String,
    required: true,
  })
  readonly icon!: string;

  @Prop({
    type: String,
    default: '',
  })
  readonly resetButtonText!: string;

  @Emit('select')
  selectColor (color: string): string {
    // @ts-ignore
    this.$refs.popoverRef.hide();

    return color;
  }
};
</script>
