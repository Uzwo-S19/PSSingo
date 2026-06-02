
  // Filter Gallery Items
  function filterGallery(category) {
    // Update active button state
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filter cards
    const cards = document.querySelectorAll('.gallery-card');
    cards.forEach(card => {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Lightbox Functionality
  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('lightboxImg');

  function openLightbox(imgSrc) {
    modal.style.display = 'flex';
    modalImg.src = imgSrc;
  }

  function closeLightbox() {
    modal.style.display = 'none';
  }

  // Close lightbox if user clicks background outside image
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeLightbox();
    }
  });
