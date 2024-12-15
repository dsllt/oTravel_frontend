import { PlaceDTO } from './place'
import { UserDTO } from './user'

export interface Review {
  id: string // 1,
  review: string // "Fui apenas uma vez e eu pedi um chocolate quente, mas achei muito forte! Claro isso vai de pessoa para pessoa. Não consegui tomar todo por conta disso. O ambiente é pequeno mas é bem organizado, um lugar muito bonito. O atendimento é ótimo.",
  rating: number // 4.5,
  created_at: string // "2024-01-21T09:46:10.477Z",
  user: UserDTO // 1,
  place: PlaceDTO // 1
}
