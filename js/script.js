
console.log(5);
const element = document.querySelector('.select');
const choices = new Choices(element, {
    searchEnabled: false,
    allowHTML: true,
    searchChoices: true,
    placeholder: true,
    itemSelectText: "",
   


});

ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        
        center: [55.76, 37.64],
        
        zoom: 7
    });
    

    myPlacemark = new ymaps.Placemark([55.76, 37.64], {}, {
        
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/Subtract.svg',
        // Размеры метки.
        iconImageSize: [30, 42],
        
        iconImageOffset: [-5, -38]
    }),

    

myMap.geoObjects.add(myPlacemark)
    
}

// 
//   
var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7(999)-9999999");
im.mask(selector);

// 
const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'tel is required',
    },
    {
      rule: 'minLength',
      value: 10,
      //  как написать свою функцию(правило)😔?
      //function ()=>{}
      
      // rule: 'number',
      // errorMessage: 'tel1 is not tel',
      
      // rule: 'minLength',
      // value: 10,
      // errorMessage: 'tel2 is not tel',
      // rule: 'maxLe3ngth',
      // value: 14,
      // errorMessage: 'tel3 is not tel',
     
    },
  ])
  ;

  