import Image from 'next/image'
import styles from './review-box.module.css'
import { Review, UserDTO } from '@lib/type-definitions'
import { dateDifference } from '@app/utils/dateUtils'

export default function ReviewBox({review, user}: {review: Review, user: UserDTO}) {
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.personalInfo}>
          <Image
            src={user.image}
            alt="Image"
            className={styles.avatar}
            width={50}
            height={50}
          />
          <div className="text">
            <h4>{user.name}</h4>
            <span>{dateDifference(review.created_at)}</span>
          </div>
        </div>
        <span className="rating"> {review.rating.toFixed(1)} ⭐️</span>
      </div>
      <p>{review.review}</p>
    </div>
  )
}