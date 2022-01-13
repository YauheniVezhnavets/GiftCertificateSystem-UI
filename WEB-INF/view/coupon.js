let parameters = window.location.search.split('');
let id = parameters[4];


$.ajax({
  method: 'GET',
  url: 'http://localhost:8080/GiftCertificateSystem-1.0/api/v1/certificates/'+id,
  dataType: "json",
  contentType: 'application/json; charset=utf-8',
  headers: {"Authorization": localStorage.getItem('token')},
  success: function(data){
    let image = document.getElementById('illustration_coupon');
    let name = document.getElementById('item_detailed_description_header_small');
    let short_description = document.getElementById('item_detailed_description_small');
    var long_description = document.getElementById('item_detailed_description');
    var price = document.getElementById('coupon_information_cost');
    image.src = data.pathToCertificatePicture;
    image.style.width = '700px';
    image.style.height = '350px';
    name.innerHTML = data.name;
    name.style.fontSize='36px';
    short_description.innerHTML = data.shortDescription;
    short_description.style.fontSize='24px';
    long_description.innerHTML = data.longDescription;
    long_description.style.fontSize='24px';
    priceToAdd = data.price;
    price.innerHTML = "$"+priceToAdd;
    price.style.fontSize='24px';
  }
});


let a = document.getElementById('add_to_cart_button');
a.href = 'checkout.html?id='+id;
a.style.textDecoration='none';
