<template>
  <div :class="classObject" v-bind="attributes" role="status"></div>
  <slot />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Props {
  variation: 'disabled' | 'success' | 'error' | string;
}

export default defineComponent({
  name: 'Badge',
  props: {
    variation: {
      validator(value: string) {
        return ['disabled', 'success', 'error'].includes(value);
      },
      default: 'disabled',
    },
  },
  setup(props: Props, context) {
    return {
      classObject: {
        disabled: props.variation === 'disabled',
        success: props.variation === 'success',
        error: props.variation === 'error',
      },
      attributes: context.attrs,
    };
  },
});
</script>

<style lang="scss" scoped>
div {
  border-radius: 5px;
  height: 10px;
  width: 10px;
}
div.disabled {
  background-color: grey;
}
div.success {
  background-color: $success;
}
div.error {
  background-color: $error;
}
</style>
