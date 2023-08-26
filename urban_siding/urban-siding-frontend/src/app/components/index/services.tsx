import React from 'react';
import styles from '@/app/styles/services.module.scss';

export default function Services() {
  const services = [
    {
      serviceName: 'ROOFING',
      image: '',
    },
    {
      serviceName: 'SIDING',
      image: '',
    },
    {
      serviceName: 'FRAMING',
      image: '',
    },
  ];
  return (
    <div id={styles.services}>
      <div className="container">
        {services.map((service) => {
          return (
            <div className={styles.item} style={{ backgroundImage: '' }}>
              {service.serviceName}
            </div>
          );
        })}
      </div>
    </div>
  );
}
