import React, { PropsWithChildren } from 'react'
import { Text as RNText, TextStyle } from 'react-native'

type Props = PropsWithChildren &
  TextStyle & {
    adjustsFontSizeToFit?: boolean
    numberOfLines?: number | undefined
  }

const Text: React.FC<Props> = ({
  children,
  adjustsFontSizeToFit,
  numberOfLines,
  fontWeight,
  ...rest
}) => {
  return (
    <RNText
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      numberOfLines={numberOfLines}
      style={{ color: 'white', fontFamily: 'TitilliumWeb_300Light', ...rest }}
    >
      {children}
    </RNText>
  )
}

export default Text
