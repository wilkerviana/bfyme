const formName = document.querySelector('.input_name'),
      formEmail = document.querySelector('.input_email'),
      formSubject = document.querySelector('.input_subject'),
      formMessage = document.querySelector('.message-faq');


document.querySelector('.form-faq').addEventListener('submit',function(e){
  e.preventDefault();
  validateForm();
});

function validateForm() {
  // Nome válido
  if (formName.value == '') {
    document.querySelector('.error_name').style.display = 'block';
  }
  // E-mail válido
  if (formEmail.value == '') {
    document.querySelector('.error_email').style.display = 'block';
  }else if(formEmail.value.substring(0,formEmail.value.indexOf('@')) < 1){
    document.querySelector('.error_email').style.display = 'block';
  }else if(formEmail.value.substring(formEmail.value.indexOf('@')+1,formEmail.value.length < 3)){
    document.querySelector('.error_email').style.display = 'block';
  }
  // Subject válido
  if(formSubject.value == ''){
    document.querySelector('.error_subject').style.display = 'block';
  }
  // Message válida
  if(formMessage.value == ''){
    document.querySelector('.error_message').style.display = 'block';
  }
}


