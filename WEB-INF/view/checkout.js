let parameters = window.location.search.split('');
let orderId = parameters[4];
// console.log(orderId);


$.ajax({
  method: 'GET',
  url: 'http://localhost:8080/GiftCertificateSystem-1.0/api/v1/certificates/'+orderId,
  dataType: "json",
  contentType: 'application/json; charset=utf-8',
  success: function(data){

    let image = document.getElementById('checkout_image');
    let name = document.getElementById('checkout_description_header');
    let description = document.getElementById('checkout_description_text');
    let price = document.getElementById('container_checkout_price');
    let total_price = document.getElementById('container_checkout_total_sum');
    image.src= data.pathToCertificatePicture;
    name.innerHTML = data.name;
    description.innerHTML = data.shortDescription;
    priceToAdd = data.price;
    price.innerHTML = "$"+priceToAdd;
    total_price.innerHTML = "$"+priceToAdd;
  }
});

let a = document.getElementById('checkout_button_back');
a.href = 'coupon_info.html?id='+orderId;
a.style.textDecoration='none';

const jwt = localStorage.getItem("token");
const userId = localStorage.getItem("id");



$(document).ready(function () {
  $("form").submit(function (event) {

    $.ajax({
      type: "POST",
      url: 'http://localhost:8080/GiftCertificateSystem-1.0/api/v1/users/'+userId+'/orders/'+orderId,
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      headers: {"Authorization": localStorage.getItem('token')},
      async: false,
      })
      .done(function(data) {
        alert("You create new order");
        document.location.href = "index.html";
      })

      event.preventDefault();
     });
  });
