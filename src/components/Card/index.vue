<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Box from '@/components/Box/index.vue';

export default defineComponent({
  name: 'Card',
  extends: Box,
});
</script>

<style lang="scss" scoped>
div {
  border: 2px solid lightgrey;
  box-sizing: border-box;
  border-radius: 0.3rem;
}
</style>
