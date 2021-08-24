<template>
  <div :class="classObject">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Box from '@/components/Box/index.vue';

export default defineComponent({
  name: 'Card',
  extends: Box,
  setup(props, context) {
    return {
      classObject: context.attrs.class.split(/\s/).map((item) => {
        return { [item]: true };
      }),
    };
  },
});
</script>

<style lang="scss" scoped>
div {
  border: 2px solid lightgrey;
  box-sizing: border-box;
  border-radius: 0.3rem;
}
</style>
