<template>
  <button :class="classObject" :style="style" :disabled="disabled" type="button">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Component {
  color: string;
  fontWeight: string;
  variation: string;
}

export default defineComponent({
  name: 'Button',
  props: {
    color: {
      type: String,
      required: false,
      default: 'white',
    },
    fontWeight: {
      type: String,
      required: false,
      default: '600',
    },
    variation: {
      default: 'primary',
      validator(value: string) {
        return ['primary', 'error', 'success'].includes(value);
      },
    },
  },
  setup(props: Component, { attrs }) {
    return {
      classObject: { [props.variation]: !!props.variation },
      style: { color: props.color, fontWeight: props.fontWeight },
      disabled: attrs.disabled,
    };
  },
});
</script>

<style lang="scss" scoped>
button {
  border: 1px solid lightgrey;
  border-radius: 0.2rem;
}

$buttonTypes: primary $primary, success $success, error $error;

@each $class, $value in $buttonTypes {
  button.#{$class} {
    background: $value;
    &:disabled {
      background: grey;
      cursor: none;
    }
  }
}
</style>
