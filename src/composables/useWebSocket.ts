import { webSocket } from 'rxjs/webSocket';
import { ref, reactive, Ref } from 'vue';
import { Isin, IsinList, IsinPreSend, Price } from '@/entities';

interface UseWebSocketResponse {
  connection: Ref<boolean>;
  list: Ref<IsinList>;
  webSocket: any;
  removeIsinFromList(value: string): void;
  subscribeToIsin(value: string): void;
  unsubscribeToIsin(value: string): void;
}

const transformCurrencyToDolar = (value: Price) => {
  const localization = window.navigator.language;
  const priceAsNumber = Number(value);
  const fixedPrice = priceAsNumber.toFixed(2);
  const currencyPrice = Number(fixedPrice).toLocaleString(localization, {
    style: 'currency',
    currency: 'EUR',
  });

  return currencyPrice;
};

export function useWebSocket(): UseWebSocketResponse {
  const web = webSocket('ws://159.89.15.214:8080/');

  const connection: Ref<boolean> = ref(true);
  const list: Ref<IsinList> = ref([]);

  const reactiveConnection = reactive(connection);
  const reactiveList = reactive(list);

  const subscribeToIsin = (value: string): void => {
    if (!value) return;

    const currentList = [...reactiveList.value];
    const hasIsinAlready = !currentList.find((item: IsinPreSend) => item && item.isin === value);

    if (hasIsinAlready) {
      web.next({ subscribe: value });
      currentList.push({ isin: value, subscribed: true });
    }

    reactiveList.value = currentList;
  };

  const listenToIsin = (value: Isin): IsinList => {
    const currentList = [...reactiveList.value];
    const updatedList = currentList.map((item) => {
      if (item.isin === value.isin) {
        return {
          ...item,
          ...value,
          price: value.price && transformCurrencyToDolar(value.price),
        };
      }
      return item;
    });

    return updatedList;
  };

  const unsubscribeToIsin = (value: string): void => {
    web.next({ unsubscribe: value });
    const currentList = [...reactiveList.value];
    const updatedList = currentList.map((item) => {
      if (item.isin === value) {
        return { ...item, subscribed: false };
      }
      return item;
    });
    reactiveList.value = updatedList;
  };

  const removeIsinFromList = (value: string): void => {
    const currentList = [...reactiveList.value];
    const updatedList = currentList.filter((item) => item.isin !== value);
    reactiveList.value = updatedList;
  };

  web.subscribe(
    (event: any): void => {
      const webSocketResponse: Isin = { ...event };
      reactiveList.value = listenToIsin(webSocketResponse);
    },
    (event): void => {
      reactiveConnection.value = false;
    },
    (): void => {
      reactiveConnection.value = false;
    }
  );

  return {
    connection: reactiveConnection,
    list: reactiveList,
    webSocket: web,
    removeIsinFromList,
    subscribeToIsin,
    unsubscribeToIsin,
  };
}
