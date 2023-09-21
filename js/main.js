Swal.fire({
    title: 'BIENVENIDO!',
    text: 'Todos los productos que necesita en un solo lugar.',
    imageUrl: 'https://lavozdelpueblo.com.ar/recursos/fotos/2021/04/27/lvp.mercado.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })

  const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");


let carrito = JSON.parse(localStorage.getItem("ventas")) || [];


const getProducts = async () => {
    const response = await fetch("data.json");
    const data = await response.json();
    
    data.forEach((product) => {
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
};

getProducts();



//set item
const saveLocal = () => {
localStorage.setItem("ventas", JSON.stringify(carrito));
};

//get item

