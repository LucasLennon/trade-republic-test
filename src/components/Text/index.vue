<template>
  <component :is="variation" :style="style">
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Text',
  props: {
    variation: {
      type: String,
      required: false,
      default: 'p',
    },
    truncate: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const truncate = props.truncate
      ? {
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }
      : {};
    return { style: { ...truncate } };
  },
});
</script>

<style lang="scss" scoped></style>
