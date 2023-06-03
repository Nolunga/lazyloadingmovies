import React, { useEffect, useState } from 'react'
import { FlatList, Image } from 'react-native'
import Container from '../../components/Container'
import Poster, { RomanticComedy } from '../../components/Poster'
import { images } from '../../theme'
import HomeHeader from './Header'

const HomeScreen = () => {
  const [movies, setMovies] = useState<RomanticComedy[]>([])
  const [filteredMovies, setFilteredMovies] = useState<RomanticComedy[]>([])
  const [movieSearch, setMovieSearch] = useState('')

  const [nextPage, setNextPage] = useState(2)

  useEffect(() => {
    const filtered = movies.filter((movie) =>
      movie.name.toLowerCase().includes(movieSearch.toLowerCase())
    )
    setFilteredMovies(filtered)
  }, [movies, movieSearch])

  const fetchMovies = () => {
    const {
      page: {
        'content-items': { content }
      }
    } = require('../../../assets/data/CONTENTLISTINGPAGE-PAGE1.json')

    setMovies(content)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  const renderPoster = ({ item }: { item: RomanticComedy }) => {
    const imageName = item['poster-image'].split('.')[0] as keyof typeof images
    const imageSrc = images[imageName]
      ? images[imageName]
      : images.placeholderImg
    return <Poster movieName={item.name} imageSrc={imageSrc} />
  }

  const loadMoreMovies = () => {
    let additionalMovies: RomanticComedy[] = []

    if (nextPage === 2) {
      additionalMovies =
        require('../../../assets/data/CONTENTLISTINGPAGE-PAGE2.json').page[
          'content-items'
        ].content
    } else if (nextPage === 3) {
      additionalMovies =
        require('../../../assets/data/CONTENTLISTINGPAGE-PAGE3.json').page[
          'content-items'
        ].content
    }
    setMovies((prev) => prev.concat(additionalMovies))
    setNextPage((prev) => prev + 1)
  }

  return (
    <Container>
      <HomeHeader onStartSearch={(name) => setMovieSearch(name)} />
      <Image
        source={images.navBarImg}
        resizeMode='cover'
        style={{ position: 'absolute', height: 200, zIndex: 1 }}
      />
      <FlatList
        data={filteredMovies}
        renderItem={renderPoster}
        numColumns={3}
        onEndReached={loadMoreMovies}
        onEndReachedThreshold={0.9}
        columnWrapperStyle={{ justifyContent: 'space-around' }}
      />
    </Container>
  )
}

export default HomeScreen
