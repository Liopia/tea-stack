/**
 * Animation control for elements entering viewport
 * 
 * - Acts on any element with .step class
 * - Adds .pre-animated class on page load
 * - Removes .pre-animated class on entering viewport
 */
;(function (window, document) {

    'use strict'

    function animationDriver() {
        let items = document.querySelectorAll('.step')
        let proseImg = document.querySelectorAll('.prose img')

        if ( 'IntersectionObserver' in window ) {

            let callback = function(entries, observer) {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.target.classList.contains('pre-animated')) {

                        observer.unobserve(entry.target)

                        // get animation delay
                        let delay = entry.target.dataset.delay || 0

                        // Uses JS timeout to apply delay
                        setTimeout(function(){
                            entry.target.classList.remove('pre-animated')
                        }, delay * 1000)
                    }
                })
            }

            let animationObserver = new IntersectionObserver(callback, {
                //rootMargin: '0px 0px -10% 0px',
                threshold: 0.15
            })

            items.forEach((item) => {
                item.classList.add('pre-animated')
                animationObserver.observe(item)
            })

            proseImg.forEach((item) => {
                item.classList.add('pre-animated')
                animationObserver.observe(item)
            })

        } else {
            // IntersectionObserver not supported
            // fire animations right away
            items.forEach((item) => {
                // apply final animation classes if needed
            })

        }
    }

    // Start Animations when the page is ready.
    window.addEventListener('DOMContentLoaded', () => {
        console.log('animation loaded')
        animationDriver()
    })

    // Restart Animations when the DOM is altered by HTMX.
    document.body.addEventListener('htmx:afterSwap', () => {
        console.log('animation loaded')
        animationDriver()
    })

})(window, document)