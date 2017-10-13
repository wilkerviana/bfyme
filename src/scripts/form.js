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
    console.log('Digite um nome válido');
  }
  // E-mail válido
  if (formEmail.value == '') {
    console.log('Digite um email válido');
  }else if(formEmail.value.substring(0,formEmail.value.indexOf('@')) < 1){
    console.log('error de email usuario');
  }else if(formEmail.value.substring(formEmail.value.indexOf('@')+1,formEmail.value.length < 3)){
      console.log('error de email dominio');
  }
  // Subject válido
  if(formSubject.value == ''){
    console.log('Digite um Assunto para a mensagem');
  }
  // Message válida
  if(formMessage.value == ''){
    console.log('Digite uma mensagem');
  }
}

// const fields = document.querySelectorAll('.form-faq input');
// fields.forEach(function(field) {
//   field.addEventListener('focusout',function () {
//     validateForm();    
//   });
// });

