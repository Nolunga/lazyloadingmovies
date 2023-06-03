import {
  TitilliumWeb_300Light,
  useFonts
} from '@expo-google-fonts/titillium-web'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppNavigation from './src/navigation'

export default function App() {
  const [fontsLoaded] = useFonts({
    TitilliumWeb_300Light
  })
  if (!fontsLoaded) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar style='light' />
        <AppNavigation />
      </SafeAreaProvider>
    )
  }
}
