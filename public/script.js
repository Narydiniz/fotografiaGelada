//Modal Imagem

const modal2 = document.querySelector('.imagem-click')

function openModal2(){
  modal2.classList.add('show')
}
function commentModal2(){
  window.alert("Faça login para enviar seus comentarios")
  modal2.classList.remove('show')
}
function likeModal2(){
  window.alert("Faça login para curtir essa publicação")
  modal2.classList.remove('show')
}
function closeModal2(){
  modal2.classList.remove('show')
}

//Modal Login 
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

  





