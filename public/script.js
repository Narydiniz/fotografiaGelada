
function abrirModal(){
  const modal =   document.getElementById('modal-login')
  modal.classList.add('abrir')

  modal.addEventListener('click', (e) => {
    if(e.target.id == 'modal-login'){
        modal.classList.remove('abrir')
    }
  })
}

function cancelarModal(){
  const modal =   document.getElementById('btn-modal')
  modal.classList.add('abrir')

  modal.addEventListener('click', (e) => {
    if(e.target.id == 'btn-modal'){
        modal.classList.remove('abrir')
    }
  })
}

function entarModal(){
  const modal =   document.getElementById('btn-modal')
  modal.classList.add('abrir')

  modal.addEventListener('click', (e) => {
    if(e.target.id == 'btn-modal'){
        modal.classList.remove('abrir')
    }
  })
}



/*function openWindow(){
  windowInformation.classList.add('show')
  body.classList.add('show')
};
function closeWindow(){
  windowInformation.classList.remove('show')
  body.classList.remove('show')
}*/


