(function(){
    function toggleScrolled(){
        const selectBody = document.querySelector('body');
        const selectHeader = document.querySelector('#header');
        window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }
    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);

    // Mobile Nav Toggle
    document.querySelectorAll('.menu-toggle img').forEach((toggle) => {
        toggle.addEventListener('click', function(e){
            e.preventDefault();
            document.querySelector('body').classList.toggle('mobile-nav-active');
            e.stopImmediatePropagation();
        })
    });

    // Toggle Mobile Nav Dropdown
    document.querySelectorAll('.site-menu .toggle-dropdown').forEach(navmenu => {
        navmenu.addEventListener('click', function(e) {
          e.preventDefault();
          this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
          e.stopImmediatePropagation();
        });
      });

    // Initialize Swiper 

    const swiper = new Swiper('.swiper', {
        autoplay: {
            delay: 3000,
        },

      
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

       

        // Default parameters
        slidesPerView: "auto",
        spaceBetween: 10,
        // Responsive breakpoints
        breakpoints: {
            768: {
            slidesPerView: 2,
            spaceBetween: 20
            },
            992: {
            slidesPerView: 3,
            spaceBetween: 30
            },
        }
    });

    // FAQ Toggle 
    document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach( (faqItem)=> {
        faqItem.addEventListener('click', () => {
            faqItem.parentNode.classList.toggle('faq-active');
        });
    });

    // Disable right click and inspect element on broswer
    // document.addEventListener("contextmenu", function(e) {
    //     e.preventDefault();
    // });
    // document.addEventListener("keydown", function(e) {
    //     if (e.key === "I" && (e.ctrlKey || e.metaKey)) {
    //       e.preventDefault();
    //     }
    // });
})();