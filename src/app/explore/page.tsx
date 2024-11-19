'use client'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { useSearchParams } from 'next/navigation'
import PlacesUsersContainer from '@ui/explore/places-users-container'
import { HeroContainer } from '@ui/explore/hero-container'

export default function Page() {
  const { places, usersWithFavorites } = useContext(UserContext)
  const searchParams = useSearchParams()

  const queryPlace = searchParams.get('queryPlace') || ''
  const queryUsers = searchParams.get('queryUser') || ''
  const category = searchParams.get('category') || ''
  const city = searchParams.get('city') || ''

  const displayUsers = queryUsers !== ''

  let filteredPlaces = places.filter((place) => {
    const matchesName = place.name
      .toLowerCase()
      .includes(queryPlace.toLowerCase())

    const matchesCategory =
      !category ||
      place.category.some((cat) => cat.toLowerCase() === category.toLowerCase())

    const matchesCity = !city || place.city.toLowerCase() === city.toLowerCase()

    return matchesName && matchesCategory && matchesCity
  })

  let filteredUsersWithFavorites = usersWithFavorites.filter((user) => {
    const matchesName = user.name
      .toLowerCase()
      .includes(queryUsers.toLocaleLowerCase())
    return matchesName
  })

  return (
    <main className="flex flex-col w-full items-center mb-16">
      <HeroContainer />
      <PlacesUsersContainer
        users={filteredUsersWithFavorites}
        places={filteredPlaces}
        displayUsers={displayUsers}
      />
    </main>
  )
}
