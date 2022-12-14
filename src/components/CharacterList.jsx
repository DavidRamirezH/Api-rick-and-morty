import { useEffect, useState } from "react";
import  Character from "./Character";
import NavPage from "./nav-page";


function CharacterList(){

    const [characters, setCharacter]=useState([]);
    const [loading, setLoading]=useState(true);
    const [page, setPage]=useState(1);

    useEffect(()=>{
      async function datosfetch(){
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        const data = await response.json()
        setLoading(false)
        setCharacter(data.results)
      }
      datosfetch();
    },[page])

    return <div>
          {
            loading ? (  <h2>loading...</h2>
          ):(

        <div className="list">
            {characters.map((character)=>{
                return(
                  <Character key={character.id} character={character}/>
                )
            })}
          
        </div>
        
    )}
    
    <NavPage page={page} setPage={setPage}/>
    
    </div>
}

export default CharacterList; 