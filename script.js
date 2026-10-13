document.addEventListener('DOMContentLoaded', () => {

    // 1. Tonar ut toppen & omslagsbilden när man skrollar ner
    const subheader = document.querySelector('.subpage-header');
    const heroCover = document.querySelector('.header-cover');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        
        // Beräkna genomskinlighet baserat på skroll (utgår från 0-250px skroll)
        let opacity = 1 - (scrollPos / 250);
        if (opacity < 0) opacity = 0;
        if (opacity > 1) opacity = 1;

        // Applicera toningen på toppen och omslagsbilden
        if (subheader) {
            subheader.style.opacity = opacity;
            subheader.style.transform = `translateY(${-scrollPos * 0.2}px)`; // Glider sakta uppåt
        }
        if (heroCover) {
            heroCover.style.opacity = opacity;
        }
    });

    // 2. Skroll-kamera: Tonar in innehåll på ALLA sidor när det syns
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            } else {
                // Ta bort klassen när man skrollar bort så att det tonar ut/om igen
                entry.target.classList.remove('fade-in-visible');
            }
        });
    }, {
        threshold: 0.1 // Aktiveras lite tidigare (10% synlighet) för smidigare känsla
    });

    // Bredare lista som täcker ALLA dina sidor och undersidor
    const elementsToAnimate = document.querySelectorAll(
        '.welcome-card, .info-card, .product-card, .product-detail-card, .page-container, .social-section, .shop-section, .product-quick-specs'
    );

    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in-element');
        observer.observe(el);
    });
});
