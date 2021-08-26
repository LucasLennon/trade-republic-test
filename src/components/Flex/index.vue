<template>
  <div :style="style">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Flex',
  props: {
    alignItems: {
      type: String,
      required: false,
      default: '',
    },
    justifyContent: {
      type: String,
      required: false,
      default: '',
    },
    flexWrap: {
      type: String,
      required: false,
      default: '',
    },
    flexDirection: {
      type: String,
      required: false,
      default: '',
    },
  },
  setup(props) {
    return {
      style: {
        alignItems: props.alignItems,
        justifyContent: props.justifyContent,
        flexWrap: props.flexWrap,
        flexDirection: props.flexDirection,
      },
    };
  },
});
</script>

<style lang="scss" scoped>
div {
  display: flex;
  box-sizing: border-box;
}
</style>
