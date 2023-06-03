import React, { PropsWithChildren } from 'react'
import { SafeAreaView } from 'react-native'

const Container = ({ children }: PropsWithChildren) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'black',
        flex: 1
      }}
    >
      {children}
    </SafeAreaView>
  )
}
export default Container
