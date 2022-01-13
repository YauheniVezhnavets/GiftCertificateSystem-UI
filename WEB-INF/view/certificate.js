
var tag_container = document.getElementById('tag_container');
var tag_elements = document.getElementById('tag_elements');
var certificate_elements = document.getElementById('certificate_elements');
var search_name = document.getElementById('search-name');
const header_form_select = document.getElementById('header_form_select');
const select_item = document.getElementById('select_item');



$.ajax({
  method: 'GET',
  url: 'http://localhost:8080/GiftCertificateSystem-1.0/api/v1/tags?page=0',
  dataType: "json",
  contentType: 'application/json; charset=utf-8',
  success: function(data){
    let tags = data._embedded.tagDtoList;
      for (i=0; i<tags.length; i++ ){
        let tag = data._embedded.tagDtoList[i];
        console.log(tag);
        let div = document.createElement('div');
        div.className = 'tag';
         let divId=tag.name;
         div.id = divId+'div';
        let img = document.createElement('img');
        img.className = 'tag_image';
        img.src = tag.pathToPicture;
        img.id = divId;
        img.setAttribute("onclick", "chooseByTag(this)");
        div.append(img);
        tag_elements.appendChild(div);

        let option = document.createElement('option');
        option.className='selected_genre_item';
        option.innerHTML= divId;
        option.value = divId;
        select_item.setAttribute("onchange", "chooseByTagName(value)");
        select_item.appendChild(option);
      }
        tag_container.appendChild(tag_elements);
    }
});


function chooseByTag(a){
  tagName = a.id;
  $.ajax({
    method: 'GET',
    url: 'http://localhost:8080/GiftCertificateSystem-1.0/api/v1/certificates/tags?tagName='+tagName,
    dataType: "json",
    contentType: 'application/json; charset=utf-8',
    success: function(data){
      if (data.page.size==0){
      console.log(certificate_elements);
      let message = document.createElement('div');
      message.innerHTML = "Sorry, certificates with this tag not found";
      message.style.marginTop='15%';
      message.style.marginLeft='35%';
      message.style.fontSize='24px';
      certificate_container.innerHTML="";
      certificate_container.appendChild(message);
    } else {
      let certificates = data._embedded.giftCertificateDtoList;
      let result = document.createElement('div');
      result.className = 'certificate_elements';
      result.id = 'certificate_elements';
        for (i=0; i<certificates.length; i++ ){
          let certificate = data._embedded.giftCertificateDtoList[i];
          let id = data._embedded.giftCertificateDtoList[i].id;
          let div = document.createElement('div');
          div.style.width='250px';
          div.style.height='70%';
          let a = document.createElement('a');
          div.appendChild(a);
          div.className = 'certificate';
          let img = document.createElement('img');
          img.className = 'certificate_image';
          img.src = data._embedded.giftCertificateDtoList[i].pathToCertificatePicture;
          img.style.width = '250px';
          img.style.height = '200px';
          a.href = 'coupon_info.html?id='+ id;
          a.style.backgroundColor='white';
          a.append(img);
          let divName = document.createElement('div');
          let divDescription = document.createElement('div');
          let divInformation = document.createElement('div');
          let price = document.createElement('p');
          let addButton = document.createElement('button');
          let aToCheckout = document.createElement('a');
          aToCheckout.innerHTML='Add to Cart';
          aToCheckout.href = 'checkout.html?id='+id;
          aToCheckout.style.textDecoration='none';
          addButton.appendChild(aToCheckout);
          divInformation.appendChild(price);
          divInformation.appendChild(addButton);
          let name = data._embedded.giftCertificateDtoList[i].name;
          let shortDescription = data._embedded.giftCertificateDtoList[i].shortDescription;
          divName.innerHTML=name;
          divName.style.backgroundColor='white';
          divName.style.fontSize='20px';
          divName.style.paddingBottom='2px';
          divName.style.paddingLeft='5px';
          divDescription.innerHTML=shortDescription;
          divDescription.style.backgroundColor='white';
          divDescription.style.width='100%';
          divDescription.style.height='39px';
          divDescription.style.overflow='hidden';
          divDescription.style.borderBottom='solid';
          divDescription.style.borderWidth='1px';
          divInformation.style.backgroundColor='white';
          divInformation.style.padding='10px';
          divInformation.style.display='flex';
          divInformation.style.justifyContent='space-between';
          price.innerHTML= '$'+data._embedded.giftCertificateDtoList[i].price;
          addButton.style.width='35%';
          addButton.style.backgroundColor='white';
          addButton.style.borderWidth='1px';
          div.appendChild(divName);
          div.appendChild(divDescription);
          div.appendChild(divInformation);

          result.appendChild(div);
        }
          $('.certificate_container').html(result);
      }
    }
  });
}



function chooseByTagName(a){
  $.ajax({
    method: 'GET',
    url: 'http://localhost:8080/GiftCertificateSystem-1.0/api/v1/certificates/tags?tagName='+a,
    dataType: "json",
    contentType: 'application/json; charset=utf-8',
    success: function(data){
      if (data.page.size==0){
      let message = document.createElement('div');
      message.innerHTML = "Sorry, certificates with this tag not found";
      message.style.marginTop='15%';
      message.style.marginLeft='35%';
      message.style.fontSize='24px';
      certificate_container.innerHTML="";
      certificate_container.appendChild(message);
    } else {
      let certificates = data._embedded.giftCertificateDtoList;
      let result = document.createElement('div');
      result.className = 'certificate_elements';
      result.id = 'certificate_elements';
        for (i=0; i<certificates.length; i++ ){
          let certificate = data._embedded.giftCertificateDtoList[i];
          let id = data._embedded.giftCertificateDtoList[i].id;
          let div = document.createElement('div');
          div.style.width='250px';
          div.style.height='70%';
          let a = document.createElement('a');
          div.appendChild(a);
          div.className = 'certificate';
          let img = document.createElement('img');
          img.className = 'certificate_image';
          img.src = data._embedded.giftCertificateDtoList[i].pathToCertificatePicture;
          img.style.width = '250px';
          img.style.height = '200px';
          a.href = 'coupon_info.html?id='+ id;
          a.style.backgroundColor='white';
          a.append(img);
          let divName = document.createElement('div');
          let divDescription = document.createElement('div');
          let divInformation = document.createElement('div');
          let price = document.createElement('p');
          let addButton = document.createElement('button');
          let aToCheckout = document.createElement('a');
          aToCheckout.innerHTML='Add to Cart';
          aToCheckout.href = 'checkout.html?id='+id;
          aToCheckout.style.textDecoration='none';
          addButton.appendChild(aToCheckout);
          divInformation.appendChild(price);
          divInformation.appendChild(addButton);
          let name = data._embedded.giftCertificateDtoList[i].name;
          let shortDescription = data._embedded.giftCertificateDtoList[i].shortDescription;
          divName.innerHTML=name;
          divName.style.backgroundColor='white';
          divName.style.fontSize='20px';
          divName.style.paddingBottom='2px';
          divName.style.paddingLeft='5px';
          divDescription.innerHTML=shortDescription;
          divDescription.style.backgroundColor='white';
          divDescription.style.width='100%';
          divDescription.style.height='39px';
          divDescription.style.overflow='hidden';
          divDescription.style.borderBottom='solid';
          divDescription.style.borderWidth='1px';
          divInformation.style.backgroundColor='white';
          divInformation.style.padding='10px';
          divInformation.style.display='flex';
          divInformation.style.justifyContent='space-between';
          price.innerHTML= '$'+data._embedded.giftCertificateDtoList[i].price;
          addButton.style.width='35%';
          addButton.style.backgroundColor='white';
          addButton.style.borderWidth='1px';
          div.appendChild(divName);
          div.appendChild(divDescription);
          div.appendChild(divInformation);

          result.appendChild(div);
        }
          $('.certificate_container').html(result);
      }
    }
  });
  event.preventDefault();
}



$.ajax({
  method: 'GET',
  url: 'http://localhost:8080/GiftCertificateSystem-1.0/api/v1/certificates?page=0',
  dataType: "json",
  contentType: 'application/json; charset=utf-8',
  success: function(data){
    let certificates = data._embedded.giftCertificateDtoList;
    let result = document.createElement('div');
    result.className = 'certificate_elements';
    result.id = 'certificate_elements';
      for (i=0; i<certificates.length; i++ ){
        let certificate = data._embedded.giftCertificateDtoList[i];
        let id = data._embedded.giftCertificateDtoList[i].id;
        let div = document.createElement('div');
        div.style.width='250px';
        div.style.height='70%';
        let a = document.createElement('a');
        div.appendChild(a);
        div.className = 'certificate';
        let img = document.createElement('img');
        img.className = 'certificate_image';
        img.src = data._embedded.giftCertificateDtoList[i].pathToCertificatePicture;
        img.style.width = '250px';
        img.style.height = '200px';
        a.href = 'coupon_info.html?id='+ id;
        a.style.backgroundColor='white';
        a.append(img);
        let divName = document.createElement('div');
        let divDescription = document.createElement('div');
        let divInformation = document.createElement('div');
        let price = document.createElement('p');
        let addButton = document.createElement('button');
        let aToCheckout = document.createElement('a');
        aToCheckout.innerHTML='Add to Cart';
        aToCheckout.href = 'checkout.html?id='+id;
        aToCheckout.style.textDecoration='none';
        addButton.appendChild(aToCheckout);
        divInformation.appendChild(price);
        divInformation.appendChild(addButton);
        let name = data._embedded.giftCertificateDtoList[i].name;
        let shortDescription = data._embedded.giftCertificateDtoList[i].shortDescription;
        divName.innerHTML=name;
        divName.style.backgroundColor='white';
        divName.style.fontSize='20px';
        divName.style.paddingBottom='2px';
        divName.style.paddingLeft='5px';
        divDescription.innerHTML=shortDescription;
        divDescription.style.backgroundColor='white';
        divDescription.style.width='100%';
        divDescription.style.height='39px';
        divDescription.style.overflow='hidden';
        divDescription.style.borderBottom='solid';
        divDescription.style.borderWidth='1px';
        divInformation.style.backgroundColor='white';
        divInformation.style.padding='10px';
        divInformation.style.display='flex';
        divInformation.style.justifyContent='space-between';
        price.innerHTML= '$'+data._embedded.giftCertificateDtoList[i].price;
        addButton.style.width='35%';
        addButton.style.backgroundColor='white';
        addButton.style.borderWidth='1px';
        div.appendChild(divName);
        div.appendChild(divDescription);
        div.appendChild(divInformation);

        result.appendChild(div);
      }
        $('.certificate_container').html(result);
    }
});

search_name.setAttribute("onkeypress", "clickPress(event)");


function clickPress(event) {
    if (event.keyCode == 13) {
      var name = event.target.value;
      $.ajax({
        method: 'GET',
        url: 'http://localhost:8080/GiftCertificateSystem-1.0/api/v1/certificates/search?giftCertificateName='+ name +'&page=0',
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        success: function(data){
          if (data.page.size==0){
          console.log(certificate_elements);
          let message = document.createElement('div');
          message.innerHTML = "Sorry, certificates with this name not found";
          message.style.marginTop='15%';
          message.style.marginLeft='35%';
          message.style.fontSize='24px';
          certificate_container.innerHTML="";
          certificate_container.appendChild(message);
          }
          else {
          let certificates = data._embedded.giftCertificateDtoList;
          let result = document.createElement('div');
          result.className = 'certificate_elements';
          result.id = 'certificate_elements';
            for (i=0; i<certificates.length; i++ ){
              let certificate = data._embedded.giftCertificateDtoList[i];
              let id = data._embedded.giftCertificateDtoList[i].id;
              let div = document.createElement('div');
              div.style.width='250px';
              div.style.height='70%';
              let a = document.createElement('a');
              div.appendChild(a);
              div.className = 'certificate';
              let img = document.createElement('img');
              img.className = 'certificate_image';
              img.src = data._embedded.giftCertificateDtoList[i].pathToCertificatePicture;
              img.style.width = '250px';
              img.style.height = '200px';
              a.href = 'coupon_info.html?id='+ id;
              a.style.backgroundColor='white';
              a.append(img);
              let divName = document.createElement('div');
              let divDescription = document.createElement('div');
              let divInformation = document.createElement('div');
              let price = document.createElement('p');
              let addButton = document.createElement('button');
              let aToCheckout = document.createElement('a');
              aToCheckout.innerHTML='Add to Cart';
              aToCheckout.href = 'checkout.html?id='+id;
              aToCheckout.style.textDecoration='none';
              addButton.appendChild(aToCheckout);
              divInformation.appendChild(price);
              divInformation.appendChild(addButton);
              let name = data._embedded.giftCertificateDtoList[i].name;
              let shortDescription = data._embedded.giftCertificateDtoList[i].shortDescription;
              divName.innerHTML=name;
              divName.style.backgroundColor='white';
              divName.style.fontSize='20px';
              divName.style.paddingBottom='2px';
              divName.style.paddingLeft='5px';
              divDescription.innerHTML=shortDescription;
              divDescription.style.backgroundColor='white';
              divDescription.style.width='100%';
              divDescription.style.height='39px';
              divDescription.style.overflow='hidden';
              divDescription.style.borderBottom='solid';
              divDescription.style.borderWidth='1px';
              divInformation.style.backgroundColor='white';
              divInformation.style.padding='10px';
              divInformation.style.display='flex';
              divInformation.style.justifyContent='space-between';
              price.innerHTML= '$'+data._embedded.giftCertificateDtoList[i].price;
              addButton.style.width='35%';
              addButton.style.backgroundColor='white';
              addButton.style.borderWidth='1px';
              div.appendChild(divName);
              div.appendChild(divDescription);
              div.appendChild(divInformation);

              result.appendChild(div);
            }
              $('.certificate_container').html(result);
            }
          }
      });
          event.preventDefault();
    }
}

var counter = 1;

window.addEventListener("scroll", function(){

  var result= document.getElementById('certificate_elements');

  var contentHeight = result.offsetHeight;      // 1) высота блока контента вместе с границами
  var yOffset       = window.pageYOffset;      // 2) текущее положение скролбара
  var window_height = window.innerHeight;      // 3) высота внутренней области окна документа
  var y             = yOffset + window_height;

  if(y >= contentHeight) {
  $.ajax({
    method: 'GET',
    url: 'http://localhost:8080/GiftCertificateSystem-1.0/api/v1/certificates?page=1',
    dataType: "json",
    contentType: 'application/json; charset=utf-8',
    success: function(data){
      if (data.page.size!==0){
      let certificates = data._embedded.giftCertificateDtoList;
        for (i=0; i<certificates.length; i++ ){
          let certificate = data._embedded.giftCertificateDtoList[i];
          let id = data._embedded.giftCertificateDtoList[i].id;
          let div = document.createElement('div');
          div.style.width='250px';
          div.style.height='70%';
          let a = document.createElement('a');
          div.appendChild(a);
          div.className = 'certificate';
          let img = document.createElement('img');
          img.className = 'certificate_image';
          img.src = data._embedded.giftCertificateDtoList[i].pathToCertificatePicture;
          img.style.width = '250px';
          img.style.height = '200px';
          a.href = 'coupon_info.html?id='+ id;
          a.style.backgroundColor='white';
          a.append(img);
          let divName = document.createElement('div');
          let divDescription = document.createElement('div');
          let divInformation = document.createElement('div');
          let price = document.createElement('p');
          let addButton = document.createElement('button');
          let aToCheckout = document.createElement('a');
          aToCheckout.innerHTML='Add to Cart';
          aToCheckout.href = 'checkout.html?id='+id;
          aToCheckout.style.textDecoration='none';
          addButton.appendChild(aToCheckout);
          divInformation.appendChild(price);
          divInformation.appendChild(addButton);
          let name = data._embedded.giftCertificateDtoList[i].name;
          let shortDescription = data._embedded.giftCertificateDtoList[i].shortDescription;
          divName.innerHTML=name;
          divName.style.backgroundColor='white';
          divName.style.fontSize='20px';
          divName.style.paddingBottom='2px';
          divName.style.paddingLeft='5px';
          divDescription.innerHTML=shortDescription;
          divDescription.style.backgroundColor='white';
          divDescription.style.width='100%';
          divDescription.style.height='39px';
          divDescription.style.overflow='hidden';
          divDescription.style.borderBottom='solid';
          divDescription.style.borderWidth='1px';
          divInformation.style.backgroundColor='white';
          divInformation.style.padding='10px';
          divInformation.style.display='flex';
          divInformation.style.justifyContent='space-between';
          price.innerHTML= '$'+data._embedded.giftCertificateDtoList[i].price;
          addButton.style.width='35%';
          addButton.style.backgroundColor='white';
          addButton.style.borderWidth='1px';
          div.appendChild(divName);
          div.appendChild(divDescription);
          div.appendChild(divInformation);

          result.appendChild(div);
        }
          $('.certificate_container').html(result);
      }
    }
  });
 }
});
