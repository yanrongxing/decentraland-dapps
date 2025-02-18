import React from 'react'
import { ChainId } from '@yanrongxing/schemas/dist/dapps/chain-id'

export type DefaultProps = {
  className: string
  target: string
  text: string
}

export type Props = Partial<DefaultProps> & {
  address: string
  txHash: string
  chainId?: ChainId
  children: React.ReactNode
}

export type MapStateProps = Pick<Props, 'chainId'>
export type MapDispatchProps = {}
export type OwnProps = Pick<Props, 'chainId'>
