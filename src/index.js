/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/


const URL_BASE = 'https://platzi-avo.vercel.app/';
const URL_API = "https://platzi-avo.vercel.app/api/avo";

const nodeApp = document.querySelector("#App");

const formatPrice = (price) =>{
    const valueFormat = new window.Intl.NumberFormat('en-EN',{
        style: 'currency', currency: 'USD'
    }).format(price);
    return valueFormat
};
async function crearElementos(){
    // Conección al servidor de la Api
    const res = await window.fetch(URL_API);
    // Pasar la información a JSON 
    const data_json = await (res.json());
    
    const todosLosItems =[];
    data_json.data.forEach(item =>{
        // Crear imagen
        const imagen = document.createElement("IMG");
        imagen.src = URL_BASE+item.image;
        imagen.className = "image borde-botton"; 

        // // // Crear titulo
        const title = document.createElement("H2"); 
        title.textContent = item.name; 
        title.className = "borde-botton"; 
        // Crear precio
        const price = document.createElement("DIV"); 
        price.textContent = formatPrice(item.price);
        //Creo un contenedor para agrupar estos nodos
        const contenedor = document.createElement("DIV"); 

        //Agregando una clase al contenedor
        contenedor.className = "card-container";
        //Uniendo en un solo contenedor
        contenedor.append(imagen, title, price);
        //Almacenando en una lista
        todosLosItems.push(contenedor);        
    })
    nodeApp.append(...todosLosItems);


    nodeApp.className = "api contenedor";
}

crearElementos()





