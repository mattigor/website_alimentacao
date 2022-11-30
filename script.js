const buttonOpenModal = document.querySelector("button");
const modal = document.querySelector("dialog");
const buttonCloseModal = document.querySelector("dialog button");

buttonOpenModal.onclick = function() {
    modal.showModal();
}

buttonCloseModal.onclick = function() {
    modal.close();
}
