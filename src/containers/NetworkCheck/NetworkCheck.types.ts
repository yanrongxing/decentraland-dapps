import { Network } from '@yanrongxing/schemas/dist/dapps/network'

export type Props = {
  network: Network
  children: (enabled: boolean) => React.ReactNode
}
