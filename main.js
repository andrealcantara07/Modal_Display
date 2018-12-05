let button = document.getElementById('button');
let modal = document.getElementById('modal');
let modalPres = document.querySelector('.modalClass');



function black() {
  modal.style.display ="block";
}

function white(){
  if (modal.style.display ="block")

    modal.style.display ="none";

}

button.addEventListener('click', black);
modalPres.addEventListener('click', white);
