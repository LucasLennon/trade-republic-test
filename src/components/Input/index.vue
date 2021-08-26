<template>
  <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Input',
  props: { modelValue: String },
  emits: ['update:modelValue'],
});
</script>

<style lang="scss" scoped></style>
