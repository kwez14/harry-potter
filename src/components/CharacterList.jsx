import { useEffect } from "react"
import { useState } from "react"
import { CharacterCard } from "./CharacterCard"
import styles from "./CharacterList.module.css"

export function CharacterList() {

    const [characters, setCharacters] = useState([])
    useEffect(() => {
        fetch("https://hp-api.onrender.com/api/characters")
            .then(response => response.json())
            .then(data => setCharacters(data))
    }, [])

    return (
        <div className={styles.container}>
            {characters.map(character => {
                return character.image !== "" ?
                    <CharacterCard 
                        key={character.id}
                        id={character.id}
                        name={character.name}
                        image={character.image}
                    />
                    : null
            }
            )}
        </div>
    )
}