<template>
  <Layout>
    <Flex class="xs-p-2" flex-wrap="wrap" justify-content="space-between">
      <Box class="xs-w-12 xs-mb-2 sm-w-11">
        <IsinForm :disable-form="formConfigurations.disabled" @subscribe="subscribeToIsin" />
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
      <Flex class="xs-w-12" flex-direction="row-reverse">
        Max Isins: {{ list.length }}/{{ formConfigurations.max }}
      </Flex>
      <Box v-for="item in list" :key="item.isin" class="xs-w-12 sm-w-6 md-w-4 lg-w-3 xl-w-2">
        <IsinCard
          :isin="item.isin"
          :price="item.price"
          :subscribed="item.subscribed"
          @remove="(event) => removeIsinFromList(event)"
          @unsubscribe="(event) => unsubscribeToIsin(event)"
        />
      </Box>
    </Flex>
  </Layout>
</template>

<script lang="ts">
import { ref, reactive, watch, defineComponent } from 'vue';

import { useWebSocket } from '@/composables';
import Layout from '@/layouts/index.vue';
import IsinCard from '@/components/IsinCard/index.vue';
import IsinForm from '@/components/IsinForm/index.vue';

export default defineComponent({
  name: 'App',
  components: {
    IsinCard,
    IsinForm,
    Layout,
  },
  setup() {
    const { connection, list, webSocket, removeIsinFromList, subscribeToIsin, unsubscribeToIsin } =
      useWebSocket();

    const formConfigurations = reactive({
      disabled: ref(false),
      max: 10,
    });

    watch(
      () => list.value.length,
      (value) => {
        if (value >= formConfigurations.max) {
          formConfigurations.disabled = true;
          return;
        }
        formConfigurations.disabled = false;
        return;
      }
    );

    return {
      connection,
      list,
      formConfigurations,
      webSocket,
      removeIsinFromList,
      subscribeToIsin,
      unsubscribeToIsin,
    };
  },
});
</script>

<style lang="scss" scoped></style>
