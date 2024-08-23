
function abrirModal(){
  const modal =   document.getElementById('modal-login')
  modal.classList.add('abrir')

  modal.addEventListener('click', (e) => {
    if(e.target.id == 'modal-login'){
        modal.classList.remove('abrir')
    }
  })
}


