/**
 * inject current year into copywrite
 */
;(function (window, document) {

  'use strict'

  function showYear() {
    document.getElementById("year").innerHTML = new Date().getFullYear()
  }

  // Start Animations when the page is ready.
  window.addEventListener('DOMContentLoaded', () => {
    showYear()
  })

  // Restart Animations when the DOM is altered by HTMX.
  document.body.addEventListener('htmx:afterSwap', () => {
    showYear()
  })

})(window, document)