import React, { useState, useEffect } from 'react';

function Pokemon({avatar, name}){
    return(
        <figure>
        <img src={avatar} alt={name}/>
        <figcaption>{name}</figcaption>
        </figure>
    );
}

/* export default function AjaxHooks () {

    const[pokemons, setPokemons] = useState([]);
    
    useEffect(() => {
        let url = "http://pokeapi.co/api/v2/pokemon";
        fetch(url)
         .then((res) => res.json())
         .then((json) => {
             json.results.forEach((el) => {
                 fetch(el.url)
                  .then((res) => res.json())
                  .then((json) => {
                      let pokemon = {
                          id: json.id,
                          name: json.name,
                          avatar: json.sprites.front_default,
                      };
                      setPokemons((pokemons) => [...pokemons, pokemon]);
                  });
             });
         });
        
    }, []) */

export default function AjaxHooks () {

    const[pokemons, setPokemons] = useState([]);
    
    useEffect(() => {
        const gestPokemons = async (url) => {
            let res = await fetch(url);
            let json = await res.json();

             json.results.forEach( async(el) => {
                let res = await fetch(el.url),
                 json = await res.json();
                
                    let pokemon = {
                        id: json.id,
                        name: json.name,
                        avatar: json.sprites.front_default,
                    };
                    setPokemons((pokemons) => [...pokemons, pokemon]);
                });
        }

        gestPokemons("http://pokeapi.co/api/v2/pokemon");
       
        
    }, [])

    return(
        <>
        <h2>Peticiones asincronas en hooks</h2>
        {pokemons.length === 0 ? (
            <h3>Cargando...</h3>
        ) : (
            pokemons.map((el) => (
                <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
            ))
        )}
        </>
    );
}