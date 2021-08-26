<template>
  <main class="xs-w-12">
    <section class="xs-w-12 md-w-10">
      <slot />
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Layout',
});
</script>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
}
</style>
