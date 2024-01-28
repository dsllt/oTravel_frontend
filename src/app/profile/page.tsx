import ReviewBox from '@app/ui/profile/review-box';
import styles from './page.module.css';
export default function Page() {
  return(
  <div className={styles.container}>
    <div className={styles.main}>
      <div className={styles.reviews}>
        <h3>Reviews</h3>
        <ReviewBox />
        <ReviewBox />
      </div>
    </div>
  </div>
    )
}
