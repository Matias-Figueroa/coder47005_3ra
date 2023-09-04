const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

const productos = [
    {
        id: 1,
        nombre:"Harina",
        precio: 100,
        img:
            "https://ardiaprod.vtexassets.com/arquivos/ids/230733/Harina-000-Caserita-1-Kg-_1.jpg?v=638026461936500000",
        cantidad: 1,    
    },
    {
        id: 2,
        nombre:"Leche",
        precio: 250,
        img:
            "https://directoriopampeano.com/imagenes/partner/doncandido/imagenes/publicaciones/758345/0_64da525e370a4.webp",
        cantidad: 1,    

    },
    {
        id: 3,
        nombre:"Galletitas",
        precio: 350,
        img:
            "https://http2.mlstatic.com/D_NQ_NP_923207-MLA53805135827_022023-O.webp",
        cantidad: 1,    
    },
    {
        id: 4,
        nombre:"Cerveza",
        precio: 350,
        img:
            "https://01almacen.com.ar/cdn/shop/products/CERVEZA-QUILMES-473ML-LATA_406dd2_28863.jpg?v=1625667914",
        cantidad: 1,    
    },
];


let carrito = JSON.parse(localStorage.getItem("ventas")) || [];

productos.forEach((product)=> {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
      <img src="${product.img}">
      <h3>${product.nombre}</h3>
      <p class="price">$ ${product.precio} </P>
    `;
    
    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () =>{
       const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

       if(repeat){
        carrito.map((prod) => {
            if(prod.id === product.id){
                prod.cantidad++;
            }
        });
       } else { 
        carrito.push({
        id : product.id,
        img: product.img,
        nombre: product.nombre,
        precio: product.precio,
        cantidad: product.cantidad,
       });
       }
       console.log(carrito); 
       saveLocal();
    });
});

//set item
const saveLocal = () => {
localStorage.setItem("ventas", JSON.stringify(carrito));
};

//get item

