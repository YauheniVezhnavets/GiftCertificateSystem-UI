const container_register_post = document.getElementById('container_register_post');
const container_register_fill = document.getElementById('container_register_fill');

$('#password_register, #repeat_password').on('keyup', function () {
  if ($('#password_register').val() == $('#repeat_password').val()) {
    $('#message').html('Matching').css('color', 'green');

    $(document).ready(function () {
      $("form").submit(function (event) {
        var formData = {
          firstName: $("#first_name").val(),
          lastName: $("#last_name").val(),
          email: $("#email_register").val(),
          password: $("#password_register").val(),
          address: $("#address").val()
        };


        $.ajax({
          type: "POST",
          url: 'http://localhost:8080/GiftCertificateSystem-1.0/auth/register',
          data: JSON.stringify(formData),
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          async: false,
          })
          .done(function(data) {

            var formData = {
              email: $("#email_register").val(),
              password: $("#password_register").val()
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
                localStorage.setItem("token", data.token);
                localStorage.setItem("id", data.id);
              })
            document.location.href = "index.html";
            alert("You register in our GiftCertificateSystem")
          })
          .fail(function () {
            let div = document.createElement('div');
            $("#first_name").val(''),
            $("#last_name").val(''),
            $("#email_register").val(''),
            $("#password_register").val(''),
            $("#repeat_password").val(''),
            $("#address").val('')
            div.innerHTML = 'Incorrect data. Please repeat.';
            div.style.color='red';
            container_register_post.appendChild(div);
          });

          event.preventDefault();
         });
      });

  } else
    $('#message').html('Not Matching').css('color', 'red');
});
