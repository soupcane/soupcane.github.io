const galleryContainer = document.querySelector('.gallery-container');
const imageBox = document.querySelectorAll('.image-box');
const modal = document.createElement('div');
const modalImg = document.createElement('img');

modal.classList.add('modal');
modal.appendChild(modalImg);
document.body.appendChild(modal);

imageBox.forEach((box) => {
  box.addEventListener('click', () => { 
    const imgSrc = box.querySelector('img').getAttribute('src'); 
    modalImg.setAttribute('src', imgSrc); 
    modalImg.style.width = '50%';
    modal.style.display = 'block'; 
    modal.style.paddingTop = '20px';
  });

  box.addEventListener('click', () => { 
    const imgSrc = box.querySelector('img').getAttribute('src'); 
    modalImg.setAttribute('src', imgSrc); modal.style.display = 'block'; 
  });

  modal.addEventListener('click', () => { 
    modal.style.display = 'none'; 
  }); 
});