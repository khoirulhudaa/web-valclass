document.querySelector('.v-back').addEventListener('click', () => {
    document.querySelector('.parentBackToTop').scrollTop = 0; // For Safari
    document.querySelector('.parentBackToTop').scrollTop = 0  // For Chrome, Firefox, IE dan Opera
})