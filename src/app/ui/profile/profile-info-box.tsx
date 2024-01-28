import Image from "next/image"
import styles from "./profile-info-box.module.css"
import { ReviewIcon } from "@ui/review-icon"
import { FavoriteIcon } from "@ui/favorite-icon"
import { UserDTO } from "@lib/type-definitions"

export function ProfileInfoBox({user, reviews, favorites}: {user: UserDTO, reviews: number, favorites: number}){
  const profileCreatedAtYear = user.created_at.split("-")[0];
  
  return(
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
            src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=1380&t=st=1695417353~exp=1695417953~hmac=c11befc70c8fbaf86dd6351a9ffd943ec3244858e32123af4467e613d3b6b7c2"
            alt="Profile avatar image"
            className={styles.avatar}
            width={50}
            height={50}
          />
        <h4>{user.name}</h4>
        <span>membro desde {profileCreatedAtYear}</span>
      </div>
      <div className={styles.info}>
        <div className={styles['info-tag']}>
            <ReviewIcon />
            <div>
              <h4>{reviews}</h4>
              <span>reviews feitas</span>
            </div>
        </div>
        <div className={styles['info-tag']}>
            <FavoriteIcon />
            <div>
              <h4>{favorites}</h4>
              <span>cafés favoritados</span>
            </div>
        </div>
      </div>

    </div>
  )
}