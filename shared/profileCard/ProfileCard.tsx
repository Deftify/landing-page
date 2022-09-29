import { Team } from '@/mock/team'
import Image from 'next/image'
import styles from './ProfileCard.module.scss'

const ProfileCard = ({ name, image, role, description, linkedIn, github }: Team) => {
  return (
    <div className={styles.card}>
      <div className={styles.image_container}>
        <div className={styles.image}>
          <Image src={image} layout="fill" alt="" priority={true} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.text}>
          <h3>{name}</h3>
          <h6>{role}</h6>
        </div>
        <div className={styles.icon_container}>
          {linkedIn && (
            <a href={linkedIn} target="_blank" rel="noreferrer">
              <div className={styles.icon}>
                <Image src="/svgs/icon-linkedin.svg" layout="fill" alt="" />
              </div>
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              <div className={styles.icon}>
                <Image src="/svgs/icon-github.svg" layout="fill" alt="" />
              </div>
            </a>
          )}
        </div>
      </div>
      <div className={styles.text}>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProfileCard
