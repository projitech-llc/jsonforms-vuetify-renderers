<template>
  <control-wrapper v-bind="controlWrapper" :styles="styles" :isFocused="isFocused" :appliedOptions="appliedOptions">
    <v-text-field v-else v-disabled-icon-focus :id="control.id + '-input'" :class="styles.control.input"
      :disabled="!control.enabled" :autofocus="appliedOptions.focus" :placeholder="" :label="computedLabel"
      :hint="control.description" :persistent-hint="persistentHint()" :required="false" :error-messages="control.errors"
      :value="control.data?.join(',')" :maxlength="appliedOptions.restrict ? control.schema.maxLength : undefined
    " :counter="control.schema.maxLength !== undefined
    ? control.schema.maxLength
    : undefined
    " :clearable="hover" v-bind="vuetifyProps('v-text-field')" @input="onChange" @focus="isFocused = true"
      @blur="isFocused = false" />
  </control-wrapper>
</template>

<script lang="ts">
import {
  ControlElement,
  isEnumControl,
  JsonFormsRendererRegistryEntry,
  rankWith,
} from '@jsonforms/core';
import {
  rendererProps,
  RendererProps,
  useJsonFormsEnumControl,
} from '@jsonforms/vue2';
import { defineComponent } from 'vue';
import { VHover, VSelect } from 'vuetify/lib';
import { useTranslator, useVuetifyControl } from '../util';
import { default as ControlWrapper } from './ControlWrapper.vue';
import { DisabledIconFocus } from './directives';

const controlRenderer = defineComponent({
  name: 'enum-control-renderer',
  components: {
    ControlWrapper,
    VSelect,
    VHover,
  },
  directives: {
    DisabledIconFocus,
  },
  props: {
    ...rendererProps<ControlElement>(),
  },
  setup(props: RendererProps<ControlElement>) {
    const t = useTranslator();

    const control = useVuetifyControl(useJsonFormsEnumControl(props), (value) =>
      value !== null ? value : undefined
    );

    return { ...control, t };
  },
});

export default controlRenderer;

export const entry: JsonFormsRendererRegistryEntry = {
  renderer: controlRenderer,
  tester: rankWith(2, isEnumControl),
};
</script>
