import { z } from "zod";

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string(),
});

export const CryptoCurrencySchema = z.array(
  z.object({
    CoinInfo: z.object({
      FullName: z.string(),
      Name: z.string(),
    }),
  })
);
