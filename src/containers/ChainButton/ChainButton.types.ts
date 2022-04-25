import { ButtonProps } from 'decentraland-ui/dist/components/Button/Button'
import { ChainId } from '@yanrongxing/schemas/dist/dapps/chain-id'

export type Props = ButtonProps & {
  chainId: ChainId
}
