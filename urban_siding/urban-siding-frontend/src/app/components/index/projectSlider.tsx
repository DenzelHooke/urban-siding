'use client';
import { useEffect } from 'react';
import styles from '@/app/styles/projectSection.module.scss';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';

// const Flickity = require('react-flickity-component');

type Image_data = {
  readonly url: string;
  width: number;
  height: number;
  bio: {
    project: string;
    origin: string;
  };
};

export default function ProjectSlider() {
  const images: Image_data[] = [
    {
      url: 'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      width: 1150,
      height: 600,
      bio: {
        project: 'Glenwood Drive West',
        origin: 'Vancouver, BC',
      },
    },
    {
      url: 'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      width: 1150,
      height: 600,
      bio: {
        project: 'Legacy Coast',
        origin: 'Canmore, AB',
      },
    },
    {
      url: 'https://images.pexels.com/photos/3958958/pexels-photo-3958958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      width: 1150,
      height: 600,
      bio: {
        project: 'Canopy West',
        origin: 'Langley, BC',
      },
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
        <div className="">
          <div className="heading__container centerText">
            <h2 className="section__header">PROJECTS</h2>
            <p className="upperCaseText smallText">
              built with care, finished with love{' '}
            </p>
          </div>
          <div className={styles.projectSection__content}>
            <div className="main-carousel">
              {images.map((item, index) => {
                const id = uuid();

                return (
                  <div className="carousel-cell" id={id}>
                    <div className="carousell-cell__bio">
                      <p className="carousell-cell__bio__project">
                        {item.bio.project}
                      </p>
                      <p className="carousell-cell__bio__origin">
                        {item.bio.origin}
                      </p>
                    </div>
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
