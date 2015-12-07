/**
 * Place this file in your Reveal.js presentation in 'lib/js/'.
 *
 * Add this javascript library to a reaveal.js presentation by adding it as a
 * dependency in Reveal.initialize.
 *
 * Reveal.initialize({
 *   ....
 *   dependencies: [
 *     ...
 *     {src: 'lib/js/line-numbers.js'}
 *   ]
 * })
 *
 */

// Add an event listener when reveal is finished loading.
Reveal.addEventListener( 'ready', function( event ) {
  // Include css.
  var link = document.createElement( 'link' );
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = 'lib/css/line-numbers.css';
  // Add CSS to head
  document.getElementsByTagName( 'head' )[0].appendChild( link );
  link.onload = function() {
    var blocks = document.querySelectorAll('pre code');
    for (var i = 0; i < blocks.length; i++) {
      var block = blocks[i];
      if (block.classList.contains('hljs') && !block.querySelector('.line-number')) {
        block.innerHTML = '<span class="line-number"></span>' +
          block.innerHTML.split('\n').join('\n<span class="line-number"></span>');
      }
    }
  };
});
