let sliderDarkMode = document.getElementById('dark-mode');
sliderDarkMode.addEventListener('change', (event) => {
  if(event.target.checked) {
    document.documentElement.style.setProperty('--html-bg-color','#24292e');
    document.documentElement.style.setProperty('--html-f-color','white');

  } else {
    document.documentElement.style.setProperty('--html-bg-color','white');
    document.documentElement.style.setProperty('--html-f-color','#24292e');
  }
})


window.addEventListener('scroll', onScroll);

function onScroll() {
  for (var item of document.querySelectorAll('.work-content img')) {
    elementVisible(item,'show');
  }
  for (var item of document.querySelectorAll('.tech-container article:nth-of-type(odd) figcaption')) {
    elementVisible(item,'animation-left');
  }
  for (var item of document.querySelectorAll('.tech-container article:nth-of-type(even) figcaption')) {
    elementVisible(item,'animation-right');
  }
}

function elementVisible(el,className) {
  let top = el.offsetTop;
  let height = el.offsetHeight;
  let bottom = top + height;

  let IsOverBottom = top > (window.pageYOffset + window.innerHeight);
  let IsBeforeTop = bottom < window.pageYOffset;

  if (!IsOverBottom && !IsBeforeTop) {
    el.classList.add(className);
  }else {
    el.classList.remove(className);
  }
}

function showNav() {
    let routes = document.querySelector('.header-routes');
    routes.classList.contains('showing') ? routes.classList.remove('showing')  : routes.classList.add('showing') ;
}