import Image from 'next/image'
import styles from './review-box.module.css'

export default function ReviewBox() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.personalInfo}>
          <Image
            src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=1380&t=st=1695417353~exp=1695417953~hmac=c11befc70c8fbaf86dd6351a9ffd943ec3244858e32123af4467e613d3b6b7c2"
            alt="Image"
            className={styles.avatar}
            width={50}
            height={50}
          />
          <div className="text">
            <h4>Nome da pessoa</h4>
            <span>há 5 dias</span>
          </div>
        </div>
        <span className="rating"> 4.5 ⭐️</span>
      </div>
      <p>
        Fui apenas uma vez e eu pedi um chocolate quente, mas achei muito forte!
        Claro isso vai de pessoa para pessoa. Não consegui tomar todo por conta
        disso. O ambiente é pequeno mas é bem organizado, um lugar muito bonito.
        O atendimento é ótimo.
      </p>
    </div>
  )
}