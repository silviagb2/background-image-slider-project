  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];

  let buttonRight = document.querySelector('.btn-right')
  let buttonLeft = document.querySelector('.btn-left')
  let container = document.querySelector ('.img-container')
  let inicio = 0

  buttonLeft.addEventListener('click',cambiarImagenLeft)

  buttonRight.addEventListener('click',cambiarImagenRight)
  
function cambiarImagenLeft(){
    inicio--
    //Cuando sea menor que 0, iremos a la última imágen del array
    if(inicio<0){
      inicio = pictures.length -1 
    }
    container.style.backgroundImage = `url('./img/${pictures[inicio]}.jpeg')`;
}

function cambiarImagenRight(){
  inicio++
  //Cuando lleguemos al último parámetro del length del array (que no existe) volveremos al inicio.
  if(inicio>pictures.length-1){
    inicio = 0
  }
  container.style.backgroundImage = `url('./img/${pictures[inicio]}.jpeg')`;
}


