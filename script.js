const galleryContainer = document.querySelector('.gallery-container');
const imageBox = document.querySelectorAll('.image-box');
const modalImg = document.getElementById('overlayImg');

imageBox.forEach((box) => {
  box.addEventListener('click', () => { 
    const imgSrc = box.querySelector('img').getAttribute('src'); 
    modalImg.setAttribute('src', imgSrc); 
    document.getElementById("overlay").style.display = "block";
  });
});

function off() {
  document.getElementById("overlay").style.display = "none";
}