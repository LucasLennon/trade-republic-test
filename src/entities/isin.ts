export type Price = number | string;

export interface IsinPreSend {
  isin: string;
  subscribed?: boolean;
}

export interface Isin extends IsinPreSend {
  ask?: number;
  bid?: number;
  price?: Price;
}

export type IsinList = Array<Isin>;
