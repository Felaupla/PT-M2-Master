import React from 'react';
import styles from './Card.module.css';

export default function Card({min,max,name,img,onClose}) {
  // acá va tu código
   return (
   <div className={styles.container}>  
   <div className={styles.weather}>
    <button className={styles.button} onClick={onClose}>X</button>
    <h2>{name}</h2>
      <div className={styles.weatherCard}>
      <div>
      <p>Min</p>
      <p>{min}</p>
      </div>
      <div>
      <p>Max</p>
      <p>{max}</p>
      </div>
      <img className={styles.icon} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img"/>
    </div>
    </div>
    </div>
  )
  };