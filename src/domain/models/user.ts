export interface User {
  id: string
  name: string
  email: string
  image: string
  password_hash: string
  is_admin: boolean
  created_at: string
}

export interface UserDTO {
  id: string
  firstName: string
  lastName: string
  email: string
  image: string
  is_admin: boolean
  created_at: string
}

export interface UserFavorites {
  id: string
  name: string
  email: string
  is_admin: boolean
  is_public: boolean
  image_url: string
  created_at: Date
  favorites: PlaceFavorite[]
}

export interface PlaceFavorite {
  name: string
  image_url: string
  address: string
  city: string
  country: string
  slug: string
  rating: number
}
