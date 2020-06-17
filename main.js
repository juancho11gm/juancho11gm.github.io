(() => {
  let btnNav = document.querySelector('.menu .toggler');
  let btnResume = document.querySelector('.btn.btn-resume');
  let btnSubmit = document.querySelector('.btn.btn-send');
  let sliderDarkMode = document.getElementById('dark-mode');
  let contactForm = document.querySelector('.contact-form');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const NAME_CLASS = 'name-validation-error';
  const EMAIL_CLASS = 'email-validation-error';
  const MESSAGE_CLASS = 'message-validation-error';
  const ANSWERS_URL = 'https://juansebastian-portfolio.herokuapp.com/contact';
  const ANSWERS_CLASS = 'answers-validation';
  const FORM_CLASS = 'hide-form';
  let formSent = false;

  function onScroll() {
    for (var item of document.querySelectorAll('.work-content img')) {
      elementVisible(item, 'show');
    }
    /* for (var item of document.querySelectorAll('.tech-container article:nth-of-type(odd) figcaption')) {
      elementVisible(item,'animation-left');
    }
    for (var item of document.querySelectorAll('.tech-container article:nth-of-type(even) figcaption')) {
      elementVisible(item,'animation-right');
    } */
  }

  function elementVisible(el, className) {
    let top = el.offsetTop;
    let height = el.offsetHeight;
    let bottom = top + height;

    let IsOverBottom = top > (window.pageYOffset + window.innerHeight);
    let IsBeforeTop = bottom < window.pageYOffset;

    if (!IsOverBottom && !IsBeforeTop) {
      el.classList.add(className);
    } else {
      el.classList.remove(className);
    }
  }

  function darkMode(event) {
    if (event.target.checked) {
      document.documentElement.style.setProperty('--html-bg-color', '#24292e');
      document.documentElement.style.setProperty('--html-f-color', 'white');
      document.documentElement.style.setProperty('--circles-color', '#24292e');
    } else {
      document.documentElement.style.setProperty('--html-bg-color', 'white');
      document.documentElement.style.setProperty('--html-f-color', '#24292e');
      document.documentElement.style.setProperty('--circles-color', '#27326d');
    }
  }

  function openResumePDF() {
    window.open('https://drive.google.com/file/d/1CiX-0hhW8y85Msn08c6bf_ufXOkb47Ht/view?usp=sharing', '_blank');
  }

  function showNav() {
    let routes = document.querySelector('.header-routes');
    routes.classList.contains('showing') ? routes.classList.remove('showing') : routes.classList.add('showing');
  }

  function validateForm(nameValue, emailValue, messageValue) {
    let valid = true;
    !nameValue ? (contactForm.classList.add(NAME_CLASS), valid = false) : contactForm.classList.remove(NAME_CLASS);
    !emailValue ? (contactForm.classList.add(EMAIL_CLASS), valid = false) : contactForm.classList.remove(EMAIL_CLASS);
    !messageValue ? (contactForm.classList.add(MESSAGE_CLASS), valid = false) : contactForm.classList.remove(MESSAGE_CLASS);
    return valid;
  }

  async function saveAnswers(answers){
    formSent = true;
    const response = await fetch(ANSWERS_URL, {
      method: 'POST',
      //mode:'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: answers.nameValue,
        email: answers.emailValue,
        message: answers.messageValue
      })
    }).then(data => {
      if(data['ok']) {
        contactForm.classList.add(ANSWERS_CLASS); //show message answers were successfully saved
        contactForm.classList.add(FORM_CLASS); //hide form
        contactForm.reset(); //reset form
      }
      btnSubmit.textContent = 'Send';
      formSent = false;
    });
  }

  function sendForm(event) {
    event.preventDefault();
    const nameValue = name.value;
    const emailValue = email.value;
    const messageValue = message.value;
    if (validateForm(nameValue, emailValue, messageValue)) {
      let answers = {
        nameValue,
        emailValue,
        messageValue,
      };
      if(!formSent){
        btnSubmit.textContent = 'Sending...';
        saveAnswers(answers);
      }
    }
  }

  sliderDarkMode.addEventListener('change', (event) => darkMode(event));
  btnNav.addEventListener('click', showNav);
  btnResume.addEventListener('click', openResumePDF);
  window.addEventListener('scroll', onScroll);
  contactForm.addEventListener('submit', sendForm);

})();