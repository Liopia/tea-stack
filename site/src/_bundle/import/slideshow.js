import { tns } from 'tiny-slider/src/tiny-slider'

;(function (window, document) {

    'use strict'

    function slideshowInit() {
        var slider = tns({
            container: '.slideshow',
            items: 1,
            slideBy: 1,
            center: true,
            navPosition: 'bottom',
            mouseDrag: true,
            arrowKeys: true,
            loop: true,
            autoplay: false,
            responsive: {
                768: { // tailwind md: breakpoint
                    items: 2,
                    gutter: '16', // px
                }
            }
        })
    }

    // Start Animations when the page is ready.
    window.addEventListener('DOMContentLoaded', () => {
        if ( document.querySelector('.slideshow') ) {
            console.log('slideshow loaded')
            slideshowInit()
        }
    })

    // Restart Animations when the DOM is altered by HTMX.
    document.body.addEventListener('htmx:afterSwap', () => {
        if ( document.querySelector('.slideshow') ) {
            console.log('slideshow loaded')
            slideshowInit()
        }
    })

})(window, document)