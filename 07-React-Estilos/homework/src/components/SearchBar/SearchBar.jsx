import React from 'react';
import styles from './Search.module.css';

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
    <div className={styles.searchBar}>
     <input className={styles.input} type="text" placeholder={"Ciudad..."}/>
    <button className={styles.search} onClick={() => onSearch('Buscando Ciudad')}>Agregar</button>
    </div>
  )
};