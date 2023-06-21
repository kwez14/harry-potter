import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from "./Character.module.css"

export function Character() {
    const { id } = useParams()
    const [character, setCharacter] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch(`https://hp-api.onrender.com/api/character/${id}`)
            .then(response => response.json())
            .then(data => setCharacter(data))

    }, [id])
    
    return (
        <div>
            {character?.map((character, index) => (
                <div key={index}>
                    
                    <img className={styles.img} src={character.image}></img>

                    <div className={styles.info}>
                        Nome: {character.name} </div>

                    <div className={styles.info}>
                        Género: {character.gender} </div>

                    <div className={styles.info}>
                        Espécie: {character.species} </div>

                    <div className={styles.info}>
                        Casa: {character.house} </div>

                    <div className={styles.info}>
                        Data de nascimento: {character.dateOfBirth} </div>
                    
                </div>
            ))}
        </div>
    )
}