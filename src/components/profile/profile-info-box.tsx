import { UserDTO } from "../../lib/type-definitions"
import { BookmarkIcon, HeartIcon } from "@heroicons/react/24/outline"

export function ProfileInfoBox({ user, reviews, favorites }: { user: UserDTO, reviews: number, favorites: number }) {
  const profileCreatedAtYear = user.created_at.split("-")[0];

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mb-10 pb-10 font-dmSans">
        <div className="p-3 rounded-full border-2 border-secondary">
          {user.name.split(' ').map(name => name[0]).join('')}
        </div>
        <h4 className="font-bold text-xl whitespace-nowrap mt-2">
          {user.name}
        </h4>
        <span className="text-sm mt-1">
          membro desde {profileCreatedAtYear}
        </span>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex gap-5 font-dmSans whitespace-nowrap items-center">
          <HeartIcon className="w-8 h-8" />
          <div>
            <h4 className="text-xl">{favorites}</h4>
            <span className="text-sm">locais favoritados</span>
          </div>
        </div>
        <div className="flex gap-5 font-dmSans whitespace-nowrap items-center">
          <BookmarkIcon className="w-8 h-8" />
          <div>
            <h4 className="text-xl">{reviews}</h4>
            <span className="text-sm">reviews feitas</span>
          </div>
        </div>
      </div>

    </div>
  )
}