function openModal(element) {
  const img = element.querySelector("img");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = img.src;
  caption.textContent = img.dataset.caption || "";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
