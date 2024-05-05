type ProfileFavoriteProps = {
  favorite: {
    id: number;
    user_id: number;
    coffee_id: string;
  }
}

export function ProfileFavorite({ favorite }: ProfileFavoriteProps) {
  return (
    <a className='btn' href={`/explore/${favorite.coffee_id}`}>
      {favorite.id} Nome do lugar
    </a>
  )
}