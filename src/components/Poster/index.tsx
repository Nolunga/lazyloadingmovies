import React from 'react'
import {
  Image,
  ImageSourcePropType,
  View,
  useWindowDimensions
} from 'react-native'
import Text from '../Text'

export type RomanticComedy = {
  name: string
  'poster-image': string
}

type Props = {
  movieName: string
  imageSrc: ImageSourcePropType
}

const Poster = ({ movieName, imageSrc }: Props) => {
  const window = useWindowDimensions()
  //Get width of device, divide by 3 and subtract 20 pixels for spacing between images
  const posterWidth = window.width / 3 - 10
  return (
    <View
      style={{
        marginVertical: 18,
        width: posterWidth,
        height: 200
      }}
    >
      <Image
        source={imageSrc}
        resizeMode='contain'
        style={{ height: 180, width: '100%' }}
      />
      <Text fontSize={15} adjustsFontSizeToFit numberOfLines={1}>
        {movieName}
      </Text>
    </View>
  )
}

export default Poster
