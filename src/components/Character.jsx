function Character({character}){
    return(
        <div className="cont_general">
            <div className="character" onClick={moverModal}>
                <h2 className='name'>{character.name}</h2>
                <img src={character.image} alt={character.name}/>
                <div className="cont_ventana">
                    <div className="ventana_info">
                        <p>Status: {character.status}</p>
                        <p>Species: {character.species}</p>
                        <p>Gender: {character.gender}</p>
                        <p>Name: {character.origin.name}</p>
                        <p>Name Location: {character.location.name}</p>
                    </div>  
                </div>  
            </div>
            <div className="informacionM">
                <div>                    
                    <span className="foto_modal"></span>
                    <h2 className="name_modal"></h2>
                    <ul className="informacion">
                    <h2>INFORMACION DEL PERSONAJE</h2>
                        <li>
                           <p className="elemento1"></p> 
                        </li>
                        <li>
                           <p className="elemento2"></p> 
                        </li>
                        <li>
                           <p className="elemento3"></p> 
                        </li>
                        <li>
                           <p className="elemento4"></p> 
                        </li>
                        <li>
                           <p className="elemento5"></p> 
                        </li>
                    </ul>
                    <ul className="episodios">
                    </ul>
                </div>
                    <button className="cerrar_modal" onClick={moverModal}>Volver</button>
            </div> 
        </div>
    )
    function moverModal(){
        const modal = document.querySelector('.informacionM')
        const nombreModal = document.querySelector('.name_modal')
        const fotoModal = document.querySelector('.foto_modal')
        const url=(character.image);
        const elementoUno= document.querySelector('.elemento1')
        const elementoDos= document.querySelector('.elemento2')
        const elementoTres= document.querySelector('.elemento3')
        const elementoCuatro= document.querySelector('.elemento4')
        const elementoCinco= document.querySelector('.elemento5')
        const episodios= document.querySelector('.episodios')
        const cap = (character.episode)



            modal.classList.toggle('mover')
            nombreModal.innerHTML=(character.name)
            fotoModal.innerHTML=(`<img src=${url} alt={character.name}/>`)
            elementoUno.innerHTML=("- estado: "+ character.status) 
            elementoDos.innerHTML=("- especie: "+ character.species)
            elementoTres.innerHTML=("- Genero: "+character.gender)
            elementoCuatro.innerHTML=("-Origen: "+character.origin.name)
            elementoCinco.innerHTML=("-Localizacion: "+character.location.name)       
            
            let capitulosC=""
            for (const key in cap) {
                if (Object.hasOwnProperty.call(cap, key)) {
                    const element = cap[key];
                    var arreglo=element.split("/")
                    const conteo=(arreglo.length-1)
                    capitulosC += `<li className="capClick">Capitulo${arreglo[conteo]}</li>`
                    
                    
                }
            }
            episodios.innerHTML=('<h2>Participación de capítulos</h2>'+capitulosC)
            
        }   
}

export default Character;