const navbar = document.querySelectorAll('.nav-item')
navbar.forEach(el1 => {
    el1.addEventListener('click', function () {
        el1.style.color = 'white'
        el1.style.fontWeight = 'bold'
    })

    el1.addEventListener('mouseenter', function () {
        el1.style.fontFamily = 'Algerian'
    })

    el1.addEventListener('mouseleave', function () {
        el1.style.backgroundColor = 'transparent'
        el1.style.fontFamily = 'san-serif'
    })
});

/* $('.page-scroll').on('click', function(e) {
    // Cara ambil isi href
    var tujuan = $(this).attr('href');

    // Cara menangkap element ybs
    var elemenTujuan = $(tujuan);
    
    // Cara memindahkan scrollnya
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top -100
    }, 1250, 'linear');
    
    e.preventDefault();
}) */


// swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// aos
AOS.init();