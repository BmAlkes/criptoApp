import axios from "axios";
import { create } from "zustand";
import { CryptoCurrencySchema } from "../schema/crypto-schema";

async function getCryptos() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
  const {
    data: { Data },
  } = await axios.get(url);
  const result = CryptoCurrencySchema.safeParse(Data);
  if (result.success) {
    return result.data;
  }
}

export const useCryptoStore = create((set) => ({
  cryptocurrencies: [],
  fetchCryptos: async () => {
    const cryptocurrencies = await getCryptos();
    set(() => ({
      cryptocurrencies,
    }));
  },
}));
