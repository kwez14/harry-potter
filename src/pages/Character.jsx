import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function Character() {
    const { id } = useParams()
    const [character, setCharacter] = useState([])
    useEffect(() => {

        fetch(`https://hp-api.onrender.com/api/character/${id}`)
            .then(response => response.json())
            .then(data => setCharacter(data))

    }, [id])
    return (
        <div>
            {character?.map((character, index) => (
                <div key={index}>
                    
                    <img src={character.image}></img>

                    <div className="characterName">
                        Nome: {character.name} </div>

                    <div className="characterName">
                        Género: {character.gender} </div>

                    <div className="characterName">
                        Espécie: {character.species} </div>

                    <div className="characterName">
                        Casa: {character.house} </div>

                    <div className="characterName">
                        Data de nascimento: {character.dateOfBirth} </div>
                    
                </div>
            ))}
        </div>
    )
}