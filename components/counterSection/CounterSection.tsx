import styles from './CounterSection.module.scss'

const list: { title: string; text: string }[] = [
  {
    title: '3455',
    text: 'Available crypto assets',
  },
  {
    title: '21',
    text: 'Blockchains',
  },
  {
    title: '2009',
    text: 'Historical data since',
  },
  {
    title: '34+',
    text: 'On chain indicators',
  },
]

const CounterSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.light}></div>
      {list.map(({ title, text }, index) => (
        <div className={styles.text} key={index}>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      ))}
    </section>
  )
}

export default CounterSection
