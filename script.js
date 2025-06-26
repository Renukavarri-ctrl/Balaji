function showSection(id) {
  document.querySelectorAll('section').forEach(sec => {
    sec.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}

// Show home by default
window.onload = () => showSection('home');

// Lightbox for gallery
const galleryImages = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// Open lightbox on image click
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
  });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Close lightbox if clicking outside image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    lightbox.style.display = "none";
  }
});
