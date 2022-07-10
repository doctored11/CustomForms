# ⛑Hard-to - style forms

---

В этом репозитории вы можете найти простую стилизацию форм, которые трудно стилизовать.
Для предосмотра перейдите по [ссылке](https://doctored11.github.io/CustomForms/ "предосмотр на github pages")
Для разбора лучше скачать весь [архив](https://github.com/doctored11/CustomForms/archive/refs/heads/main.zip "Скачать с github")

---

### 6 форм

- [CheckBox](#CheckBox)
- [Select](#Select)
- [Карта](#Map)
- [Scroll Bar](#Scroll)
- [Валидация Форм](#Form)
- [Тултипы](#Tultip "Всплывающие подсказки, типо этой)")

---

> Чекбоксы и тултипы реализованы на чистом js + css, для простой реализации других форм использовались плагины.

---

<a name="CheckBox"><h2>☑️CheckBox</h2></a>

- Cоздается обычная разметка для чекбоксов, на примере часть разметки для 2 блоков.

```html
<label for="check1" class="castom-check">
  <input type="checkbox" name="check0" id="check1" class="check" />
  check1
  <span class="check-box"></span>
</label>
<label for="check2" class="castom-check">
  <input type="checkbox" name="check1" id="check2" class="check" />
  check2
  <span class="check-box"></span>
</label>
```

- Главная задача - скрыть полностью нестилизуемый чекбокс, и добавить рядом 'коробку для галочки'

```css
.check {
  visibility: hidden;
  position: relative;
}
```

- таким образом мы спрятали стандартный чекбокс, важно оставялть его на 'сцене', убираем именно отображение
  > 🛑 Не используем display: none; !

```css
.castom-check {
  position: relative;
  width: 130px;
  display: flex;
  justify-content: center;
  height: 20px;
  align-items: center;
  padding-left: 33px;
}
.check-box {
  position: absolute;
  left: 0;
  width: 30px;
  height: 30px;
  border: solid 2px #ccb26e;
  border-radius: 5px;
}
```

- классом '_.castom-check_ ' 'позиционируем' нашу будущую форму, и классом ' _.check-box_ ' уже отображаем саму рамку.
  Благодаря состоянию _:checked_ оригинального чекбокса, мы можем стилизовать и активное состояние выбора.

```css
.check:checked + .check-box {
  background: url(../img/Rectangle\ 99.svg) no-repeat;
  background-size: 20px;
  background-position: center;
}
```

- в свойстве _background_ я указываю ссылку на кастомную галочку, но так же можно использовать любой символ или нарисовать ее с помощью css
- и вот, у нас есть собственный уникальный чекбокс.

---

<a name="Select"><h2>⬇️Select</h2></a>

- подключаем плагин [Choices](https://github.com/Choices-js/Choices), и читаем документацию)

- подключаем предложенные стили в head

```
    <link rel="stylesheet" href="css/choices.min.css" />
```

и script, перед закрывающим тегом /body

```
  <script src="js/choices.min.js"></script>
```

> ⚠️ подключение и использование библиотеки актуально на 24.06.22, при обновлении библиотеки все может измениться - в том числе и отображение на сайте.

- создается обычная html разметка для списка

```html
<div class="main__select">
  <select name="select" id="select" class="select">
    <option value="">Материал</option>
    <option>Древесина</option>
    <option>Металл</option>
    <option>Камень</option>
    <option>Пластик</option>
    <option>Композитный</option>
    <option>Гипс</option>
  </select>
</div>
```

- для стилизации открытого списка нужно наследоваться от класса _.is-open_ и _.choices\_\_list--dropdown_
- для стилизации 'стрелочки открытия', наследуемся от эллемента _::after_ класса _.choices_ (содержащего data-type '_select-one_'):

```css
.choices[data-type*="select-one"].is-open::after {
  margin: none;
  transform: rotate(225deg);
  border-bottom: 1px #ccb26e solid;
  border-right: 1px #ccb26e solid;
  transition: transform 0.3s ease;
}
```

подробнее можно расмотреть сам пример кода, скачав файлы репозитория

---

<a name="Map"><h2>🗺Карта</h2></a>

- Для использования карты на сайте - используем Яндекс Карты и их API
- Используем инструкция для быстрого [старта](https://yandex.ru/dev/maps/jsapi/doc/2.1/quick-start/index.html, "подключение Якарт") от Яндекс
  > для работы на localhost можно не получать API-ключ
- подключаем Яндекс карту

```html
<div class="">
  <div id="map" style="width: 600px; height: 400px"></div>
</div>
```

- Размещаем карту там где нам нужно в разметке, и подключаем script перед закрывающим тегом /body

```html
<script
  src="https://api-maps.yandex.ru/2.1/?apikey=ваш API-ключ&lang=ru_RU"
  type="text/javascript"
></script>
```

- с помощью css мы можем наложить некоторые фильтры( например ЧБ, как в примере) и убрать элементы карты.

```html
[class*="ground-pane"] { filter: grayscale(1); } [class*="copyright"] { display:
none; } [class*="controls"] { display: none; }
```

Но основной функционал настраиваиться через js,
C помощью js, мы можем указать центр карты, ее масштаб и поставить маркер в любой точке

```JavaScript
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
```

- для более сложной настройки карт лучше почитать инструкцию на сайте Яндекс [карт](https://yandex.ru/dev/maps/jsapi/doc/2.1/dg/concepts/many-objects.html)

---

<a name="Scroll"><h2>📜Scroll Bar</h2></a>

- Для простой стилизации скролла используется библиотека [SimpleBar](https://github.com/Grsmto/simplebar "перейти к репозиторию библиотеки")
- Подключаем предложенные стили

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/simplebar@latest/dist/simplebar.css"
/>
```

- и перед закрывающим тегом /body

```html
<script src="https://unpkg.com/simplebar@latest/dist/simplebar.min.js"></script>
```

- в html разметке создается обычный div блок с текстом, единственное что нужно добавть - это data- атрибут.

```html
<div class="main__scroll" data-simplebar>Много текста</div>
```

- такой скролл практически не требует стилизации, а все эллементы легко просматриваются через devtools, в примере стилизован сам блок текста и цвет скролла

```css
.main__scroll {
  width: 400px;
  height: 310px;
  background-color: aliceblue;
  color: #000;
  padding: 20px 30px 0 30px;
}
.simplebar-content-wrapper {
  overflow: auto;
}

.simplebar-scrollbar::before {
  background-color: #ccb26e;
}
```

> ⚠️ Лучше не делать статичным размер скролла и не обарачивать в него всю страницу

---

<a name="Form"><h2>👍Валидация Форм</h2></a>

- Для валидации форм используется плагин [Just-validate](https://github.com/horprogs/Just-validate "перейти к библиотеке"), для маскирования телефона — [inputmask](https://github.com/RobinHerbots/Inputmask "перейти к библиотеке")
- подключаем библиотки по инструкциям из их документации
  > ⚠️ Библиотека для валидации может сильно обновляться и менять синтаксис и свойства( так недавно было ), использование в примере актуально на 24.06.22, если прошло много времени или что то изменилось - читайте документацию библиотеки.
- используем стандартную разметку для форм, но с использованием предложенных классов

```html
<div class="main__validation-form contact-form">
  <form action="#" id="form" autocomplete="off" class="contact-form__form form">
    <div class="form__input-box">
      <input
        type="text"
        class="form__input form-control"
        placeholder=" name"
        autocomplete="off"
        name="name"
        id="name"
      />
    </div>
    <div class="form__input-box">
      <input
        type="tel"
        name="tel"
        autocomplete="off"
        id="tel"
        class="form__input form-control"
        placeholder="телефон"
        data-validate-field="tel"
      />
    </div>
    <div class="form__input-box">
      <input
        type="email"
        class="form__input form-control"
        placeholder="Enter your email"
        autocomplete="off"
        name="email"
        id="email"
      />
    </div>
    <button class="btn btn-primary" id="submit-btn">Submit</button>
  </form>
</div>
```

- Благодаря этим классам можно свободно стилизовать формы.
- Пропускаем стилизацию, ничего особенного нет, можно рассмотреть [пример](https://github.com/doctored11/CastomForms/archive/refs/heads/main.zip "Скачать с github")
- Для выбора маски телефона переходим в js

```js
var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999) — 9999999");
im.mask(selector);
```

- В поле в кавычках можно ввести любой формат, где вместо девяток подрузамеваются пропуски для ввода телефона
- Для валидации так же понадобится js, плагин предлагает много правил, все они представлены в его документации, в примере используются правила макс и мин длины 'слова' и его обязательность, так же для проверки маскированного телефона пришлось написать 'свое мини правило'

```js
const validation = new JustValidate("#form");

validation
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Name is required",
    },
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 30,
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Email is required",
    },
    {
      rule: "email",
      errorMessage: "Email is invalid!",
    },
  ])
  .addField("#tel", [
    {
      rule: "required",
      errorMessage: "tel is required",
    },
    {
      validator: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        console.log(phone);
        return Number(phone) && phone.length == 10;
      },
      errorMessage: "Tel too short",
    },
  ]);
```

- rule: 'required' - обязательность заполнения поля,
- rule: 'minLength' - минимальная длина 'слова'(максимальная длина аналогично)
- errorMessage: 'tel is required', - текст ошибки
- правило для телефона:

```js
validator :(name,value)=>
      {
        const phone = selector.inputmask.unmaskedvalue()
        console.log(phone)
        return Number(phone)&& phone.length == 10

      },
```

- просто проверяем еще не маскированный телефон на число и длину в 10 символов, можно написать любое правило.

---

<a name="Tultip"><h2>🛟Тултипы</h2></a>

- подсказки реализованы на js+css
- html разметка включает в себя span после текста( на месте где ожидаем подсказку)

```html
<div class="title__block">
  <p class="">
    Следует отметить, что социально-экономическое развитие способствует
    повышению качества переосмысления внешнеэкономических политик.
    <span class="title__i-ico">i</span>
  </p>
</div>
```

- классу _.title\_\_i-ico_ - задаем любые стили для приятного отображения, а вот его эллементу _::after_ в _content:_ задаем текст подсказки и добавляем стили для 'окна подсказки', так же прячем ее, чтобы показать при наведении

```css
.title__i-ico::after {
  content: "Глава 2, страница 176";
  color: white;
  display: flex;
  position: absolute;
  min-width: 50px;
  width: max-content;
  padding: 8px 15px;
  background-color: rgb(58, 52, 58);
  left: -50px;
  top: -50px;
  visibility: hidden;
}
```

- так же эллементу _::before_ можно задать стили, для отображения 'ножки подсказки'

```css
.title__i-ico::before {
  visibility: hidden;
  content: "";
  position: absolute;
  /* background-color: rgb(58, 52, 58); */
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 16px solid rgb(58, 52, 58);
  top: -20px;
  left: 5%;
}
```

- теперь для отображения подсказки, добавляем _visibility:visible_ по наведению мышки на область подсказки.

```css
.title__i-ico:hover::after,
.title__i-ico:hover::before {
  visibility: visible;
}
```

- все тултипы готовы)
  <br>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
 
_#11_ 🌈🤟
