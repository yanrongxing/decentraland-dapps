import React from 'react'
import { Dispatch } from 'redux'
import { ChainId } from '@yanrongxing/schemas'

export type Props = {
  text: React.ReactNode
  learnMoreLink?: string
  onSwitchNetwork: (chainId: ChainId) => void
}

export type MapDispatchProps = Pick<Props, 'onSwitchNetwork'>
export type MapDispatch = Dispatch
