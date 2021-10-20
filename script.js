class Product {
  constructor(name, price, productInfo, stock) {
    this.name = name;
    this.price = parseFloat(price);
    this.productInfo = productInfo;
    this.stock = stock;
  }
  AddIva() {
    return this.price * 1.21;
  }
}
var productArray = [];
const welcome = confirm("Bienvenido, presione Aceptar para continuar");
if (welcome) {
  do {
    var wantToCharge = confirm("¿Desea cargar un producto nuevo?");
    if (wantToCharge) {
      var name = prompt("Ingrese el nombre del producto");
      var price = prompt("Ingrese el precio del producto");
      var productInfo = prompt("Ingrese una breve descripcion del producto");
      var stock = prompt("Ingrese cantidad en stock");
      productArray.push(new Product(name, price, productInfo, stock));
    }
  } while (wantToCharge);
  console.log(productArray);
} else {
  confirm("Adios, vuelve cuando quieras");
}

for (var product of productArray) {
  document.write(`<ul><li><h2>Nombre: <strong>${product.name}</strong></h2></li>
                  <li><h3>Precio: ${product.price}</h3></li>
                  <li><h3>Descripcion: ${product.productInfo}</h3></li>
                  <li><h3>Stock: ${product.stock}</h3></li></ul>
                  
                  `);
}

console.log(productArray);

// ORDENAR POR PRECIO

var productsPerPrice = [];
productsPerPrice = productArray.map((elemento) => elemento);
var productsPerPrice = productArray;
productsPerPrice.sort(function (a, b) {
  return a.price - b.price;
});
console.log("Productos Ordenados por Precio");
console.log(productsPerPrice);

document.write("<h1>Productos Ordenados De menor a mayor Precio</h1>");
for (var product of productsPerPrice) {
  document.write(`<ul><li><h2>Nombre: <strong>${product.name}</strong></h2></li>
                  <li><h3>Precio: ${product.price}</h3></li>
                  <li><h3>Descripcion: ${product.productInfo}</h3></li>
                  <li><h3>Stock: ${product.stock}</h3></li></ul>  
  `);
}
