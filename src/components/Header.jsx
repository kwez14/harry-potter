import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export function Header(){
    return(
        <header className={styles.header}>
            <Link to="/"><img className={styles.logo} src="https://logodownload.org/wp-content/uploads/2017/07/harry-potter-logo-2.png"></img></Link>
        </header>
    )
}