<template>
  <Card class="xs-m-2 xs-p-3">
    <Flex justify-content="space-between">
      <Text :truncate="true">
        {{ isin }}
      </Text>
      <Box>
        <Button
          v-if="subscribed"
          :aria-label="$t('buttonStopAriaLabel', { isin })"
          @click="$emit('unsubscribe', isin)"
        >
          {{ $t('buttonStopAriaLabel', { isin }) }}
          <!-- {{ $t('buttonStop') }} -->
        </Button>
        <Button
          v-if="!subscribed"
          :aria-label="$t('buttonRemoveAriaLabel', { isin })"
          variation="error"
          @click="$emit('remove', isin)"
        >
          {{ $t('buttonRemoveAriaLabel', { isin }) }}
          <!-- {{ $t('buttonRemove') }} -->
        </Button>
      </Box>
    </Flex>
    <Text v-if="price" aria-label="isin price">
      {{ price }}
    </Text>
    <Text v-else>loading...</Text>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IsinCard',
  props: {
    isin: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: false,
    },
    subscribed: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['remove', 'unsubscribe'],
  setup(props, emits) {
    return { props, emits };
  },
});
</script>

<style lang="scss" scoped></style>
