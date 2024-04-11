
let thumb = slider.querySelector('.thumb');
let percent = document.getElementById('percent');

slider.onmousedown = function(e){
  e.preventDefault();

  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)
  
  function onMouseMove(e) {
    let newLeft = e.clientX - slider.getBoundingClientRect().left;

    percent.style.opacity = 1;
    if (newLeft < 0)
      newLeft = 0;
    let rightEdge = slider.offsetWidth - thumb.offsetWidth
    if (newLeft > rightEdge)
      newLeft = rightEdge;
    thumb.style.left = newLeft + 'px';
    percent.innerHTML = Math.round(newLeft / ((slider.offsetWidth - thumb.offsetWidth) / 100));
  }

  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp)
    document.removeEventListener('mousemove', onMouseMove)
    setTimeout( function() {
      percent.style.opacity = 0
    }, 500);
  }

  thumb.ondragstart = function() {
    return false;
  }

}
