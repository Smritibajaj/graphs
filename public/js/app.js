// hiding errer msg
$('#emailHelp2').hide();
$('#emailHelp4').hide();
$('#password2').hide();
$('#password4').hide();

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function checkPassword(password) {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
}

function signupfunc(){
    $('#signup-act').addClass('active');
    $('#login-act').removeClass('active');
    $('#login').addClass('d-none');
    $('#signup').removeClass('d-none');
}
function loginfunc(){
    $('#signup-act').removeClass('active');
    $('#login-act').addClass('active');
    $('#login').removeClass('d-none');
    $('#signup').addClass('d-none');
}
$(document).ready(function() {
       
    $("#signup").submit(function(event) {
        event.preventDefault();
      alert( "Handler for .submit() called." );    
      var email1 = $('#exampleInputEmail1').val();
      var password1 = $('#inputPassword1').val();
      if (!validateEmail(email1)){
        $('#emailHelp2').show();
        $('#signup').attr('disabled','disabled');
        return
      }
      if (!checkPassword(password1)){
        $('#password2').show();
        $('#signup').attr('disabled','disabled');
        return
      }
      var data1 = {
        "user": {
        "email": email1,
        "password": password1
      }
      }
      $.ajax({
        type: 'POST',
        url:"http://localhost:8086/users/",
        headers: {
          "Content-Type":"application/json",
      },
        data: JSON.stringify(data1),
        success: function(data) {
        console.log(data)
        sessionStorage.setItem("token", data.user.token);
        localStorage.setItem("userid",data.user._id)
        window.location.href='/login';
        },
        error: function() {
          $('#password2').show();
       }
      });
    });

    $("#login").submit(function(event) {
        event.preventDefault();
        alert( "Handler for .submit() called." );    
        var email2 = $('#exampleInputEmail2').val();
        var password2 = $('#inputPassword2').val();
        if (!validateEmail(email1)){
          $('#emailHelp2').show();
          $('#login').attr('disabled','disabled');
          return
        }
        if (!checkPassword(password1)){
          $('#password2').show();
          $('#login').attr('disabled','disabled');
          return
        }
        var data2 = {
          "user": {
          "email": email2,
          "password": password2
        }
        }
        $.ajax({
          type: 'POST',
          url:"http://localhost:8086/users/login",
          headers: {
            "Content-Type":"application/json",
            "Authorization" : "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNpbW15YmFqYWoxNjAzQGdtYWlsLmNvbSIsImlkIjoiNWJmZmFhYzA3ZmVhMjkyNmY0YTA3MTg3IiwiZXhwIjoxNTQ4NjY2MDQ4LCJpYXQiOjE1NDM0ODIwNDh9.VQI9BPUK_PozoGhY8byuNdDcXg9kcEVEQne7AxBgzRg"
        },
          data: JSON.stringify(data2),
          success: function(data) {
          console.log(data);
          sessionStorage.setItem("token", data.user.token);
          localStorage.setItem("userid",data.user._id)
          window.location.href='/login';
          },
          error: function() {
            $('#password4').show();
         }
        });
      });
    });
    