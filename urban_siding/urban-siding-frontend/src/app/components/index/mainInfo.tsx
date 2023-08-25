import styles from '@/app/styles/mainInfo.module.scss';
import Image from 'next/image';

export default function MainInfo() {
  const image_constraints = {
    height: 600,
    width: 1000,
  };

  return (
    <section id={`${styles.mainInfo}`} className="container section">
      <div className={`${styles.item__wrapper}`}>
        <div className={styles.body}>
          <p className={styles.accent__text}>SERVICE</p>
          <h2 className="heading">The Ultra Guarantee</h2>
          <p className={styles.body__text}>
            When it comes to your siding needs, Ultra Siding offers an unmatched
            advantage with 25 years of industry experience and a strong
            commitment to hard work. Our extensive expertise ensures quality
            results, and our dedicated approach means we'll put in the effort
            needed to bring your vision to life.
          </p>
        </div>
        <div className={styles.image__wrapper}>
          <div className={`${styles.image} ${styles.outter__image}`}>
            <Image
              src="/assets/block_2.png"
              width={image_constraints.width}
              height={image_constraints.height}
              alt="Block 2"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.item__wrapper}`}>
        <div className={styles.body}>
          <p className={styles.accent__text}>PASSION</p>
          <h2 className="heading">25+ Years Experience</h2>
          <p className={styles.body__text}>
            With 25+ years in the industry, Ultra Siding embodies unwavering
            commitment and enduring values. Rooted in a strong work ethic, our
            excellence thrives. Through shifting times, we've honed skills,
            ensuring each project reflects our dedication. History shapes our
            future at Ultra Siding, driving excellence in every detail
          </p>
        </div>
        <div className={styles.image__wrapper}>
          <div className={styles.image}>
            <Image
              src="/assets/block_1.png"
              width={image_constraints.width}
              height={image_constraints.height}
              alt="Bear Cub"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
