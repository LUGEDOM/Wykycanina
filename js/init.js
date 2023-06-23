document.addEventListener('DOMContentLoaded',() => {

  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);

  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, {
    indicators:false,
    height:500,
    duration:500,
    interval:4000
  });

}); 