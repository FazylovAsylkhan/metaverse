import { Mainnet, Config, Goerli } from '@usedapp/core';
import { getDefaultProvider } from 'ethers';

export const configDapp: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
    [Goerli.chainId]: getDefaultProvider('goerli'),
  },
};