<template>
  <div :class="classObject">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Box',
  props: {
    xs: {
      type: String,
      required: false,
    },
    sm: {
      type: String,
      required: false,
    },
    md: {
      type: String,
      required: false,
    },
    lg: {
      type: String,
      required: false,
    },
    xl: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const classObject = {
      [`xs-w-${props.xs}`]: !!props.xs,
      [`sm-w-${props.sm}`]: !!props.sm,
      [`md-w-${props.md}`]: !!props.md,
      [`lg-w-${props.lg}`]: !!props.lg,
      [`xl-w-${props.xl}`]: !!props.xl,
    };

    return {
      classObject,
    };
  },
});
</script>

<style lang="scss" scoped>
div {
  box-sizing: border-box;
}
</style>
