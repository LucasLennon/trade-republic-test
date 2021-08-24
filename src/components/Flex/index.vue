<template>
  <div :style="style">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Box from '@/components/Box/index.vue';
import { marginPropsStyle } from '@/props/margin';
import { paddingPropsStyle } from '@/props/padding';

export default defineComponent({
  name: 'Flex',
  extends: Box,
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
        ...marginPropsStyle(props),
        ...paddingPropsStyle(props),
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
