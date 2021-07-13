import Alpine from 'alpinejs'

/**
 * Start up Aplinejs on htmx content swapping
 */
;(function (window, document) {

    'use strict'

    window.Alpine = Alpine

    // Start Alpine when the page is ready.
    window.addEventListener('DOMContentLoaded', () => {
        Alpine.start()
    })

    // Restart Alpine when the DOM is altered by HTMX.
    document.body.addEventListener('htmx:afterSwap', () => {
        Alpine.start()
    })

    // Basic Store Example in Alpine.
    window.addEventListener('alpine:initializing', () => {
        Alpine.store('nav', {
            isOpen: false,
            close()  { this.isOpen = false },
            open()   { this.isOpen = true },
            toggle() { this.isOpen = !this.isOpen }
        })
    })

})(window, document)