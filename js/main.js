var openNavButton = document.getElementsByClassName('burger-wrapper');
var mobileNav = document.getElementsByClassName('mobile-nav-wrapper');
var mainForm = document.getElementById('main-form');
var sendButton = document.getElementById('btnSubmit');
var formName = document.getElementById('name');
var formEmail = document.getElementById('email');
var formQuestion = document.getElementById('textarea')
var frontEmail = "jonusas.liudas";
var backEmail = "@gmail.com";
var emailSpanClass = document.getElementsByClassName('emailSpan');
var formInput = document.getElementsByClassName('form-input');
function sendBtnActivation () {
    if (formEmail.value == "" || formName.value == "" || formQuestion.value == "") {
        sendButton.disabled = true; 
    } else {
        sendButton.disabled = false;
    }
}
for (i=0; i<emailSpanClass.length; i++) {
    emailSpanClass[i].innerHTML = " " + frontEmail + backEmail;
}
for (i=0; i<formInput.length; i++) {
    formInput[i].addEventListener('focus', function () {
       this.style.border = "1px solid #F7931E"
    });
}
for (i=0; i<formInput.length; i++) {
        formInput[i].addEventListener('focusout', function (){
            this.style.border = "1px solid white"
    });
}
function openMobileNav () {
  mobileNav[0].classList.toggle('open');
  console.log('clicked')
}
$("#myForm").submit(function (event) {
    $('.name-warning').empty();
    $('.email-warning').empty();
    $('.question-warning').empty();
  event.preventDefault();
  var formData = {
      'fname' : $('input[name=fname]').val(),
      'email' : $('input[name=email]').val(),
      'comment' : $('.textarea').val(),
  };
  $.ajax({
      type: "POST",
      url: "../php/index.php",
      data: formData,
      dataType : 'json',
      encode : true,
      success : function(data) {
          if (data.success == 'false') {
              if (data.errors.emptyName || data.errors.wrongName || data.errors.tooLongName) {
                  $('.name-warning').html(data.errors.emptyName);
                  $('.name-warning').html(data.errors.wrongName);
                  $('.name-warning').html(data.errors.tooLongName);
              }
              if (data.errors.emptyEmail || data.errors.wrongEmail || data.errors.tooLongEmail) {
                  $('.email-warning').html(data.errors.emptyEmail);
                  $('.email-warning').html(data.errors.wrongEmail);
                  $('.email-warning').html(data.errors.tooLongEmail);
                  }
              if (data.errors.emptyQuestion || data.errors.tooLongquestion) {
                  $('.question-warning').html(data.errors.emptyQuestion);
                  $('.question-warning').html(data.errors.tooLongQuestion);
                  }
          } else {
              $('#result').html(data.message);
              $("#btnSubmit").prop("disabled", true);
          }
      }
  });
});