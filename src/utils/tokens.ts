import { Token } from '@uniswap/sdk-core'
import { WETH_ADDRESS } from '../constants/index'

export interface SerializedToken {
  chainId: number
  address: string
  decimals: number
  symbol?: string
  name?: string
}

export function serializeToken(token: Token): SerializedToken {
  return {
    chainId: token.chainId,
    address: token.address,
    decimals: token.decimals,
    symbol: token.symbol,
    name: token.name,
  }
}

export function deserializeToken(serializedToken: SerializedToken): Token {
  return new Token(
    serializedToken.chainId,
    serializedToken.address,
    serializedToken.decimals,
    serializedToken.symbol,
    serializedToken.name
  )
}

export function formatTokenSymbol(address: string, symbol: string) {
  if (address === WETH_ADDRESS) {
    return 'AVAX'
  }
  return symbol
}

export function formatTokenName(address: string, name: string) {
  if (address === WETH_ADDRESS) {
    return 'Avalanche'
  }
  return name
}
