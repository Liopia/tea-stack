import Headroom from "headroom.js"

;(function (window, document) {

    'use strict'

    function isMobileNavVisible(nav) {
        if (window.matchMedia("(max-width: 1023px)").matches) {
            return ( nav.offsetParent !== null )
        }
        return false
    }

    var header = document.querySelector(".site-header")
    var nav = document.getElementById('main-menu')

    var options = {
        onUnpin: function() {
            if ( isMobileNavVisible(nav) ) {
                this.elem.classList.remove(this.classes.unpinned)
                this.elem.classList.add(this.classes.pinned)
            }

            else {
                this.elem.classList.add(this.classes.unpinned)
                this.elem.classList.remove(this.classes.pinned)
            }
        }
    }

    var headroom = new Headroom(header, options)

    headroom.init()

})(window, document)