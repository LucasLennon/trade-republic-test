<template>
  <button :class="classObject" :style="style" :type="type">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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
    type: {
      type: String,
      required: false,
      default: 'button',
    },
    variation: {
      required: false,
      default: 'primary',
      validator(value) {
        return ['primary', 'error', 'success'].includes(value);
      },
    },
  },
  setup(props) {
    return {
      classObject: { [props.variation]: !!props.variation },
      style: { color: props.color, fontWeight: props.fontWeight },
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
  }
}
</style>
