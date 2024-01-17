'strict mode'

const modal = document.querySelector(".modal")
const btnCloseModal = document.querySelector('.close-modal');

const overlay = document.querySelector(".overlay")

const btnShowModal = document.querySelectorAll('.show-modal')

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', function () {
    overlay.style.display = "block";
    modal.style.display = "block";
  })
}
