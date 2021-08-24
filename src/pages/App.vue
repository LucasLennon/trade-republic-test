<template>
  <div>
    <Flex flex-wrap="wrap" justify-content="space-between" p=".5rem">
      <Box class="xs-w-12 xs-mb-2 sm-w-11">
        <IsinForm @subscribe="subscribeToIsin" />
      </Box>
      <Flex align-items="center" class="sm-w-1">
        <Badge
          :aria-label="`Connection Status: ${
            connection ? $t('connectionOnline') : $t('connectionOffline')
          }`"
          :variation="connection ? 'success' : 'error'"
        >
          <Text class="xs-ml-2">
            {{ connection ? $t('connectionOnline') : $t('connectionOffline') }}
          </Text>
        </Badge>
      </Flex>
    </Flex>
    <Flex flex-wrap="wrap">
      <Box v-for="item in list" :key="item.isin" xs="12" sm="6" md="4" lg="3" xl="2">
        <IsinCard
          :isin="item.isin"
          :price="item.price"
          :subscribed="item.subscribed"
          @remove="(event) => removeIsinFromList(event)"
          @unsubscribe="(event) => unsubscribeToIsin(event)"
        />
      </Box>
    </Flex>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useWebSocket } from '@/composables';
import IsinCard from '@/components/IsinCard/index.vue';
import IsinForm from '@/components/IsinForm/index.vue';

export default defineComponent({
  name: 'App',
  components: {
    IsinCard,
    IsinForm,
  },
  setup() {
    const { connection, list, webSocket, removeIsinFromList, subscribeToIsin, unsubscribeToIsin } =
      useWebSocket();

    return {
      connection,
      list,
      webSocket,
      removeIsinFromList,
      subscribeToIsin,
      unsubscribeToIsin,
    };
  },
});
</script>

<style lang="scss" scoped></style>
