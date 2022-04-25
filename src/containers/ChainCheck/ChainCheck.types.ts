import { ChainId } from '@yanrongxing/schemas/dist/dapps/chain-id'

export type Props = {
  chainId: ChainId
  children: (enabled: boolean) => React.ReactNode
}
