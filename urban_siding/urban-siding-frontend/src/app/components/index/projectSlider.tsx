'use client';
import { useEffect } from 'react';
import styles from '@/app/styles/projectSection.module.scss';
import Image from 'next/image';

// const Flickity = require('react-flickity-component');

type Image_data = {
  readonly url: string;
  width: number;
  height: number;
};

export default function ProjectSlider() {
  const images: Image_data[] = [
    {
      url: 'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      width: 1150,
      height: 600,
    },
    {
      url: 'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      width: 1150,
      height: 600,
    },
    {
      url: 'https://images.pexels.com/photos/3958958/pexels-photo-3958958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      width: 1150,
      height: 600,
    },
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Only run this code on the client side
      var elem = document.querySelector('.main-carousel');
      // @ts-ignore
      var flkty = new Flickity(elem, {
        // cellAlign: 'left',
        contain: true,
      });
    }
  }, []);

  return (
    <>
      <div id={styles.projectSection}>
        <div className="container">
          <div className="heading__container">
            <h2 className="section__header centerText">Our Latest Projects</h2>
          </div>
          <div className={styles.projectSection__content}>
            <div className="main-carousel">
              {images.map((item) => {
                return (
                  <div className="carousel-cell">
                    <div className="carousel__cell__inner">
                      <Image src={item.url} fill alt="woo" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
