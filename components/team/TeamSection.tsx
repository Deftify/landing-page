import { advisors, team } from '@/mock/team'
import { ProfileCard } from '@/shared'
import styles from './TeamSection.module.scss'

const TeamSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Meet the People Building Deftify</h1>
        </div>
        <div className={styles.text}>
          <p>
            Deftify team members come from diverse backgrounds but all share proven track records in the cryptocurrency
            space.
          </p>
        </div>
      </div>
      <div className={styles.row}>
        {team.map((member, index) => {
          return (
            <ProfileCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              description={member.description}
              linkedIn={member.linkedIn}
              github={member.github}
            />
          )
        })}
      </div>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Partners & Advisors</h1>
        </div>
      </div>
      <div className={styles.row}>
        {advisors.map((member, index) => {
          return (
            <ProfileCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              description={member.description}
              linkedIn={member.linkedIn}
              github={member.github}
            />
          )
        })}
      </div>
    </section>
  )
}

export default TeamSection
