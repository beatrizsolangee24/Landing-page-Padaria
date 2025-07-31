  $(document).ready(function () {
    $('#mobile-btn').on('click', function () {
      $('#mobile_menu').toggleClass('active');
      $(this).toggleClass('bi-list bi-x');
    });

    ScrollReveal().reveal('#content-1', {
      origin: 'left',
      duration: 2000,
      distance: '2%' // com aspas
    });

     ScrollReveal().reveal('#p-frase', {
      origin: 'left',
      duration: 2000,
      distance: '2%' // com aspas
    });
       ScrollReveal().reveal('#texto-2-container', {
      origin: 'right',
      duration: 2000,
      distance: '2%' // com aspas
    });
           ScrollReveal().reveal('.content-ingredientes-filho', {
      origin: 'left',
      duration: 2000,
      distance: '2%' // com aspas
    });
            ScrollReveal().reveal('#final-content-title', {
      origin: 'left',
      duration: 2000,
      distance: '2%' // com aspas
    });

  });
