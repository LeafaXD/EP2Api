document.getElementById("pokeSearch").addEventListener("click",function(){

    //Solicitamos a la API mostrar la imagen del pokemon numero 94
    fetch(`https://pokeapi.co/api/v2/pokemon/94`)

    //Convierte respuesta a JSON
    .then(Response => Response.json())
    .then(data => {
        document.getElementById("pokeInfo").innerHTML =
        ` 
        <img src="${data.sprites.front_default}">
        <img src="${data.sprites.back_default}">
        <p>Nombre: ${data.name}</p>
        <p>Numero: ${data.id}</p>
        <p>Altura: ${data.height/10}m</p>
        <p>Peso: ${data.weight/10}kg</p>
        <p>Experiencia: ${data.base_experience}</p>
        `;
    })
});