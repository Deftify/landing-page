import { products } from '@/mock'
import Image from 'next/image'
import styles from './Products.module.scss'

const Products = () => {
  return (
    <section className={styles.section}>
      <div className={styles.light1}></div>
      <div className={styles.light2}></div>
      <div className={styles.title}>
        <h1>Explore our other products</h1>
      </div>
      <div className={styles.row}>
        {products.map((product, index) => (
          <div className={styles.container} key={index}>
            <div className={styles.image}>
              <Image src={product.image} alt={product.title} layout="fill" />
            </div>
            <div className={styles.text}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products
