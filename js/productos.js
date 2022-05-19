
const productos = [
    {codigo:"BP1000", descripcion:"1Lt pead cristal", bulto:105, imagen:"1 LT CRISTAL.png",  precio:21.50},
    {codigo:"BP2200", descripcion:"2lt pead amarillo", bulto:55, imagen:"2 LT AMARILLO.png", precio:33.50},
    {codigo:"R250", descripcion:"250cc pet rosca liso", bulto:125, imagen:"PET 250cc ROSCA.png", precio:21.00},
    {codigo:"R500", descripcion:"500cc pet rosca liso", bulto:100, imagen:"PET 500.png", precio:23.70},
    {codigo:"DC750", descripcion:"750cc pet presion", bulto:100, imagen:"PET 750.png", precio:21.00},
    
]


let almacen = JSON.stringify(productos)
console.log(prodJson)


localStorage.setItem("Productos", prodJson)

let prod1 = JSON.parse(prodJson)

console.log('prod1 json parse', prod1)
