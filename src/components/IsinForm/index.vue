<template>
  <form action @submit.prevent="$emit('subscribe', isinField)">
    <Flex>
      <Box class="xs-mr-3">
        <Input v-model="isinField" name="isinField" :aria-label="$t('isinFieldLabel')" />
      </Box>
      <Button :aria-label="$t('isinAddButtonField')" variation="success" type="submit">
        {{ $t('buttonAdd') }}
      </Button>
    </Flex>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IsinForm',
  emits: ['subscribe'],
  setup(props, emits) {
    const isinField = ref('');
    return { props, emits, isinField };
  },
});
</script>

<style lang="scss" scoped></style>
