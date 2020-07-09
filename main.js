(() => {
  const btnNav = document.querySelector('.menu .toggler');
  const btnResume = document.querySelector('.btn.btn-resume');
  const btnSubmit = document.querySelector('.btn.btn-send');
  const sliderDarkMode = document.getElementById('dark-mode');
  const contactForm = document.querySelector('.contact-form');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const ANSWERS_URL = 'https://juansebastian-portfolio.herokuapp.com/contact';
  const ANSWERS_CLASS = 'answers-validation';
  const CAPTCHA_CLASS = 'captcha-validation-error';
  const EMAIL_CLASS = 'email-validation-error';
  const FORM_CLASS = 'hide-form';
  const MESSAGE_CLASS = 'message-validation-error';
  const NAME_CLASS = 'name-validation-error';
  const CV_URL = 'https://drive.google.com/file/d/1B4bwEcr84mx0Kx8pEESCaUlkXgHiLpG9/view?usp=sharing';
  let formSent = false;


  function darkMode(event) {
    if (event.target.checked) {
      document.documentElement.style.setProperty('--html-bg-color', '#24292e');
      document.documentElement.style.setProperty('--html-f-color', 'white');
      document.documentElement.style.setProperty('--circles-color', '#24292e');
      return;
    }
    document.documentElement.style.setProperty('--html-bg-color', 'white');
    document.documentElement.style.setProperty('--html-f-color', '#24292e');
    document.documentElement.style.setProperty('--circles-color', '#27326d');
  }

  function openResumePDF() {
    window.open(CV_URL, '_blank');
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

  async function saveAnswers(answers) {
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
        message: answers.messageValue,
        date: new Date()
      })
    }).then(data => {
      if (data['ok']) {
        contactForm.classList.add(ANSWERS_CLASS); //show message answers were successfully saved
        contactForm.classList.add(FORM_CLASS); //hide form
        contactForm.reset(); //reset form
      }
      btnSubmit.textContent = 'Send';
      formSent = false;
    });
  }

  function validateCaptcha() {
    let response = grecaptcha.getResponse();
    if (!response.length) {
      contactForm.classList.add(CAPTCHA_CLASS);
      return false;
    }
    contactForm.classList.remove(CAPTCHA_CLASS)
    return true;
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
      if (!validateCaptcha()) return;
      if (!formSent) {
        btnSubmit.textContent = 'Sending...';
        saveAnswers(answers);
      }
    }
  }

  sliderDarkMode.addEventListener('change', (event) => darkMode(event));
  btnNav.addEventListener('click', showNav);
  btnNav.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
      showNav();
    }
  });
  btnResume.addEventListener('click', openResumePDF);
  contactForm.addEventListener('submit', sendForm);

})();