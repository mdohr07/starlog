document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('lightbox-overlay');
  const overlayImg = document.getElementById('lightbox-img');
  const closeBtn = overlay.querySelector('.lightbox-close');

  // statt .lightbox-trigger: alle Bilder in bestimmten Containern
  document.querySelectorAll('.post-content img, .gallery-container img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      overlayImg.src = img.src;
      overlay.classList.add('active');
    });
  });

  function closeLightbox() {
    overlay.classList.remove('active');
    overlayImg.src = '';
  }

  closeBtn.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
});