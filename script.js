'strict mode'

const modal = document.querySelector(".modal")
const btnCloseModal = document.querySelector('.close-modal');

const overlay = document.querySelector(".overlay")

const btnShowModal = document.querySelectorAll('.show-modal')

const openModal = function () {
  overlay.classList.remove('hidden')
  modal.classList.remove('hidden')
}
const closeModal = function () {
  overlay.classList.add("hidden")
  modal.classList.add("hidden")
}

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal)
}
btnCloseModal.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal)

