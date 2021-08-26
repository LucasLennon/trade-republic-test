<template>
  <div :class="classObject">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Box',
});
</script>

<style lang="scss" scoped>
div {
  box-sizing: border-box;
}
</style>
