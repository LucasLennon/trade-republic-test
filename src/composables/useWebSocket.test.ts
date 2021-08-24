import WS from 'jest-websocket-mock';

import { useWebSocket } from './useWebSocket';

const IsinValue = 'DB10001001';

describe('useWebSocket', () => {
  let server: any;

  beforeEach(() => {
    server = new WS('ws://159.89.15.214:8080/', { jsonProtocol: true });
  });

  afterEach(() => {
    server.close();
  });

  it('should subscribe to isin', async () => {
    const { list, subscribeToIsin } = useWebSocket();

    await server.connected;

    subscribeToIsin(IsinValue);

    expect(list.value[0].isin).toBe(IsinValue);
    expect(list.value[0].subscribed).toBeTruthy();
  });

  it('should unsubscribe to isin', async () => {
    const { list, subscribeToIsin, unsubscribeToIsin } = useWebSocket();

    await server.connected;

    subscribeToIsin(IsinValue);
    unsubscribeToIsin(IsinValue);

    expect(list.value[0].isin).toBe(IsinValue);
    expect(list.value[0].subscribed).toBeFalsy();
  });

  it('should remove isin from list', async () => {
    const { list, subscribeToIsin, unsubscribeToIsin, removeIsinFromList } = useWebSocket();

    await server.connected;

    subscribeToIsin(IsinValue);
    unsubscribeToIsin(IsinValue);
    removeIsinFromList(IsinValue);

    expect(list.value).toHaveLength(0);
  });

  it('should respond when isin is sent', async () => {
    const { connection, list, webSocket, subscribeToIsin } = useWebSocket();

    await server.connected;

    subscribeToIsin(IsinValue);

    webSocket.next({ subscribe: IsinValue });

    server.send({ isin: IsinValue, bid: 123, ask: 123, price: 123 });

    expect(connection.value).toBeTruthy();
    expect(list.value[0].isin).toBe(IsinValue);
    expect(list.value[0].bid).toBe(123);
    expect(list.value[0].ask).toBe(123);
    expect(list.value[0].price).toBe('€123.00');
  });

  it('should alert that is offline if websocket is closed', async () => {
    const { connection, webSocket } = useWebSocket();

    await server.connected;

    webSocket.next({ subscribe: IsinValue });

    server.send({ isin: IsinValue, bid: 123, ask: 123, price: 123 });

    server.close();

    expect(connection.value).toBeFalsy();
  });
});
