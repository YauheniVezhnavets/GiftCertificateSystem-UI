const container_login_form = document.getElementById('container_login_form');

$(document).ready(function () {
  $("form").submit(function (event) {
    var formData = {
      email: $("#email_login").val(),
      password: $("#password_login").val()
    };

    $.ajax({
      type: "POST",
      url: 'http://localhost:8080/GiftCertificateSystem-1.0/auth/login',
      data: JSON.stringify(formData),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      async: false,
      })
      .done(function(data) {
        document.location.href = "index.html";
        console.log(data.token);
        localStorage.setItem("token", data.token);
        localStorage.setItem("id", data.id);
      })
      .fail(function () {
        let div = document.createElement('div');
        $("#email_login").val("")
        $("#password_login").val("")
        div.innerHTML = 'Incorrect email/password. Please repeat.'
        container_login_form.appendChild(div);
      });

      event.preventDefault();
     });
  });
