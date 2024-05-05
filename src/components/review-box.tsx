import Image from 'next/image'
import styles from './review-box.module.css'
import { Review, UserDTO } from '../lib/type-definitions'
import { dateDifference } from '../utils/dateUtils'

export default function ReviewBox({ review, user }: { review: Review, user: UserDTO }) {

  return (
    <div className="flex flex-col gap-4 px-6 py-8 rounded-lg bg-base-300 mb-10">
      <div className="flex justify-between font-dmSans">
        <div className="flex gap-4 items-center">
          <div className='bg-gray-700 text-white rounded-full border-2 border-white p-2 w-12 h-12 flex items-center justify-center text-2xl'>
            {user.name[0]}
          </div>
          <div className="text">
            <h4 className='text-md font-medium'>{user.name}</h4>
            <span className='text-sm'>{dateDifference(review.created_at)}</span>
          </div>
        </div>
        <span className="badge badge-secondary"> {review.rating.toFixed(1)} </span>
      </div>
      <p className='text-md'>{review.review}</p>
    </div>
  )
}