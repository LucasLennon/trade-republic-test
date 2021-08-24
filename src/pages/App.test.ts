import { screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import WS from 'jest-websocket-mock';

import App from './App.vue';

import { renderWithTranslation } from '@/tests/utils';

const IsinValue = 'DB10001001';

describe('App component', () => {
  let server: any;

  beforeEach(() => {
    server = new WS('ws://159.89.15.214:8080/', { jsonProtocol: true });
  });

  afterEach(() => {
    server.close();
  });

  it('should subscribe to Isin', async () => {
    renderWithTranslation(App);

    await server.connected;

    userEvent.type(screen.getByRole('textbox'), IsinValue);
    userEvent.click(screen.getByText('Add'));

    server.send({ isin: IsinValue, bid: 123, ask: 123, price: 123 });

    expect(await screen.findByText(IsinValue)).toBeInTheDocument();
    expect(screen.getByText('€123.00')).toBeInTheDocument();
  });

  it('should unsubscribe to Isin', async () => {
    renderWithTranslation(App);

    await server.connected;

    userEvent.type(screen.getByRole('textbox'), IsinValue);
    userEvent.click(screen.getByText('Add'));

    server.send({ isin: IsinValue, bid: 123, ask: 123, price: 123 });

    userEvent.click(
      await screen.findByRole('button', { name: `Button to unsubscribe isin: ${IsinValue}` })
    );

    expect(
      await screen.findByRole('button', { name: `Button to remove isin: ${IsinValue}` })
    ).toBeInTheDocument();
  });

  it('should remove the Isin', async () => {
    renderWithTranslation(App);

    await server.connected;

    userEvent.type(screen.getByRole('textbox'), IsinValue);
    userEvent.click(screen.getByText('Add'));

    server.send({ isin: IsinValue, bid: 123, ask: 123, price: 123 });

    userEvent.click(
      await screen.findByRole('button', { name: `Button to unsubscribe isin: ${IsinValue}` })
    );
    userEvent.click(
      await screen.findByRole('button', { name: `Button to remove isin: ${IsinValue}` })
    );

    expect(await screen.queryByRole(IsinValue)).not.toBeInTheDocument();
    expect(screen.queryByText('€123.00')).not.toBeInTheDocument();
  });
});
