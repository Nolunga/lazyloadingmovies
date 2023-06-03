import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
import { Text } from '../../components'

type Props = {
  onStartSearch: (name: string) => void
}

const HomeHeader = ({ onStartSearch }: Props) => {
  const [showSearch, setShowSearch] = useState(false)

  const PageTitle = () => {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <MaterialIcons name='arrow-back' size={24} color='white' />
        <Text fontSize={22} marginLeft={5}>
          Romantic Comedy
        </Text>
      </View>
    )
  }

  return (
    <View
      style={{
        zIndex: 2,
        minHeight: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
      }}
    >
      <View
        style={{
          height: 60,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center'
        }}
      >
        <PageTitle />
        {showSearch ? (
          <MaterialIcons
            onPress={() => {
              onStartSearch('')
              setShowSearch(false)
            }}
            name='close'
            size={24}
            color='white'
          />
        ) : (
          <MaterialIcons
            onPress={() => setShowSearch(true)}
            name='search'
            size={24}
            color='white'
          />
        )}
      </View>
      {showSearch && (
        <TextInput
          placeholder='Search Romcom...'
          onChangeText={onStartSearch}
          style={{
            backgroundColor: 'white',
            height: 45,
            width: '100%',
            paddingLeft: 5
          }}
        />
      )}
    </View>
  )
}

export default HomeHeader
