import { connect } from 'react-redux'
import { Locale } from '@yanrongxing/ui/dist/components/Language/Language'

import Footer from './Footer'
import { FooterProps, MapDispatchProps, MapStateProps } from './Footer.types'
import { RootDispatch } from '../../types'
import { getLocale, isEnabled } from '../../modules/translation/selectors'
import {
  changeLocale,
  ChangeLocaleAction
} from '../../modules/translation/actions'

const mapState = (state: any): MapStateProps => {
  return {
    locale: getLocale(state),
    hasTranslations: isEnabled(state)
  }
}

const mapDispatch = (
  dispatch: RootDispatch<ChangeLocaleAction>
): MapDispatchProps => ({
  onChange: (_, { value }) => dispatch(changeLocale(value as Locale))
})

const mergeProps = (
  stateProps: MapStateProps,
  dispatchProps: MapDispatchProps,
  ownProps: FooterProps
): FooterProps => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps
})

export default connect(
  mapState,
  mapDispatch,
  mergeProps
)(Footer) as any
