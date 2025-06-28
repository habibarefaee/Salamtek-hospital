
    document.addEventListener('DOMContentLoaded', function () {
      const filterSelect = document.getElementById('roomFilter');
      const roomCards = document.querySelectorAll('.room-card');

      filterSelect.addEventListener('change', function () {
        const selectedType = this.value;
        roomCards.forEach(card => {
          const type = card.getAttribute('data-type');
          card.style.display = (selectedType === 'all' || selectedType === type) ? 'block' : 'none';
        });
      });
    });
