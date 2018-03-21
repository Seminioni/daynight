function addClass(e, cls) {
  if (!hasClass(e, cls)) {
    e.className += (e.className ? ' ' : '') + cls;
  }
}

function rmClass(e, cls) {
  var elemClass = (' ' + e.className + ' ').replace(/[\n\r\t]+/g, ''),
    className = ' ' + cls + ' ';

  while (elemClass.indexOf(cls) >= 0) {
    elemClass = elemClass.replace(cls, ' ');
  }

  elemClass = elemClass.trim();

  if (elemClass !== e.className) {
    e.className = elemClass;
  }
}

function hasClass(e, cls) {
  return (' ' + e.className + ' ').replace(/[\n\r\t]+/g, ' ').indexOf(' ' + cls + ' ') >= 0
}

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var btnMenu = document.getElementById('menuIcon');
  var popup = document.getElementById('popupContainer');
  var btnPopup = document.getElementById('btnPopupContainerClose');
  var tagHtml = document.getElementsByTagName('html')[0];
  var tagBody = document.getElementsByTagName('body')[0];

  if (btnMenu) {
    btnMenu.addEventListener('click', function (e) {
      e.preventDefault();
      addClass(this, 'active');
      addClass(popup, 'active');
      addClass(tagBody, 'active');
      addClass(tagHtml, 'active');
    }, false);
  }

  if (btnPopup) {
    btnPopup.addEventListener('click', function () {
      rmClass(btnMenu, 'active');
      rmClass(this.parentNode, 'active');
      rmClass(tagBody, 'active');
      rmClass(tagHtml, 'active');
    }, false);
  }

  var menuMobileListItem = document.getElementsByClassName('menuMobileLinkJS');

  if (menuMobileListItem.length) {
    for (var i = 0; i < menuMobileListItem.length; i++) {
      rmClass(menuMobileListItem[i].parentNode, 'active');
      switcherMenu(menuMobileListItem[i]);
    }
  }

  var btnFilter = document.getElementById('filterButton');
  var filterClose = document.getElementById('filterButtonClose');
  var popupFilter = document.getElementById('popupFilter');

  if (btnFilter) {
    btnFilter.addEventListener('click', function () {
      addClass(this, 'active');
      addClass(this.parentNode, 'active');
      addClass(popupFilter, 'active');
      addClass(tagBody, 'active');
      addClass(tagHtml, 'active');
    }, false);
  }

  if (filterClose) {
    filterClose.addEventListener('click', function () {
      rmClass(this.parentNode, 'active');
      rmClass(tagBody, 'active');
      rmClass(tagHtml, 'active');
      rmClass(popupFilter, 'active');
      rmClass(btnFilter, 'active');
    }, false);
  }

  var productDescription = document.getElementById('productDescription');

  if (productDescription){
    productDescription.addEventListener('click', function () {
      if(hasClass(this, 'active')){
        rmClass(this, 'active');
      } else {
        addClass(this, 'active');
      }
    }, false);
  }

  var address = document.getElementsByClassName('address');

  if(address.length){
    for(var i=0; i < address.length; i++){
      switcherAddress(address[i]);
    }
  }

  var abc = document.getElementsByClassName('abcMobile')[0];

  if(abc){
    var grid = abc.getElementsByClassName('abcMobileGrid')[0];
    var choice = abc.getElementsByClassName('abcMobileCurrentChoice')[0];
    var value = abc.getElementsByClassName('abcMobileCurrentChoiceValue')[0];
    var reset = abc.getElementsByClassName('abcMobileCurrentChoiceReset')[0];
    var letters = abc.getElementsByClassName('abcMobileLetter');

    for (var i = 0; i < letters.length; i++){
      addLetterActiveState(letters[i], grid, choice, value);
    }

    removeLetterActiveState(reset, grid, choice, value, letters);
  }

  var basket = document.getElementsByClassName('basket')[0];

  if(basket){
    var deliveryLabels = basket.getElementsByClassName('basket__unicontrol-lable');

    for (var i=0; i < deliveryLabels.length; i++){
      deliveryLabels[i].addEventListener('click', function () {
        if(hasClass(this.parentNode, 'active')){
          rmClass(this.parentNode, 'active');
        } else {
          addClass(this.parentNode, 'active');
        }
      }, false);
    }
  }

  function addLetterActiveState(el, wrapper, choice, current) {
    var title = el.getElementsByClassName('abcMobileLetterName')[0];

    title.addEventListener('click', function () {
      addClass(wrapper, 'active');
      addClass(this.parentNode, 'active');
      current.textContent = this.textContent;
      addClass(choice, 'active');
    }, false);
  }

  function removeLetterActiveState(el, wrapper, choice, current, arr) {
    el.addEventListener('click', function () {
      var placeholder = this.parentNode.getAttribute('data-default');

      rmClass(wrapper, 'active');
      rmClass(this.parentNode, 'active');
      current.textContent = placeholder;
      rmClass(choice, 'active');

      for (var i = 0; i < arr.length; i++){
        rmClass(arr[i], 'active');
      }
    }, false);
  }

  function switcherAddress(el) {
    var name = el.getElementsByClassName('addressBuild')[0];
      name.addEventListener('click', function () {
        if(hasClass(el, 'active')){
          rmClass(el, 'active');
        } else {
          addClass(el, 'active');
        }
      }, false);
  }

  function switcherMenu(el) {
    el.addEventListener('click', function (e) {
      var parent = this.parentNode;

      if (/^#$/.test(this.getAttribute('href'))) {
        e.preventDefault();

        if (hasClass(parent, 'active')) {
          rmClass(parent, 'active');
        } else {
          addClass(parent, 'active');
        }
      }
    }, false);
  }
});

// tour
document.addEventListener('DOMContentLoaded', function (){
  'use strict';

  var tourDN = document.getElementById('tourDayNight');
  var tourDNL = document.getElementById('tourDayNightLite');
  var shops = [
    {
      data: [
        {
          id: 1,
          arrows: [
            null,
            {
              name: "",
              slide: 31
            },
            null,
            {
              name: "",
              slide: 21
            }
          ],
          proportions: 50,
          images: [
            "DSC02039_1_WEB.jpg",
            "DSC02038_1_WEB.jpg"
          ],
          option: false
        },
        {
          id: 21,
          arrows: [
            null,
            {
              name: "направо",
              slide: 25
            },
            {
              name: "вернуться",
              slide: 1
            },
            {
              name: "налево",
              slide: 22
            }
          ],
          proportions: 33,
          images: [
            "DSC01164_1_WEB.jpg",
            "DSC01176_1_WEB.jpg"
          ],
          option: false
        },
        {
          id: 22,
          arrows: [
            {
              name: "прямо",
              slide: 21
            },
            {
              name: "направо",
              slide: 231
            },
            null,
            {
              name: "налево",
              slide: 232
            }
          ],
          proportions: null,
          images: [
            "2m.jpg"
          ],
          option: false
        },
        {
          id: 231,
          arrows: [
            null,
            null,
            null,
            {
              name: "вернуться",
              slide: 22
            }
          ],
          proportions: null,
          images: [
            "3m.jpg"
          ],
          option: false
        },
        {
          id: 232,
          arrows: [
            null,
            {
              name: "вернуться",
              slide: 22
            },
            null,
            null
          ],
          proportions: null,
          images: [
            "3m2.jpg"
          ],
          option: false
        },
        {
          id: 25,
          arrows: [
            null,
            {
              name: "вернуться",
              slide: 21
            },
            null,
            {
              name: "налево",
              slide: 261
            }
          ],
          proportions: 33,
          images: [
            "DSC01159_1_WEB.jpg",
            "DSC01173_1_WEB.jpg"
          ],
          option: false
        },
        {
          id: 261,
          arrows: [
            {
              name: "наверх",
              slide: 262
            },
            {
              name: "вернуться",
              slide: 25
            },
            null,
            null
          ],
          proportions: 33,
          images: [
            "DSC01155_1_WEB.jpg",
            "DSC01150_1_WEB.jpg"
          ],
          option: false
        },
        {
          id: 262,
          arrows: [
            {
              name: "наверх",
              slide: 27,
              option: true
            },
            {
              name: "вернуться",
              slide: 261
            },
            null,
            null
          ],
          proportions: 33,
          images: [
            "DSC01126_1_WEB.jpg",
            "DSC01140_1_WEB.jpg"
          ],
          option: true
        },
        {
          id: 27,
          arrows: [
            null,
            null,
            {
              name: "вниз",
              slide: 262,
              option: true
            },
            {
              name: "налево",
              slide: 210
            }
          ],
          proportions: 67,
          images: [
            "DSC01132_1_WEB.jpg",
            "DSC01140_1_WEB.jpg"
          ],
          option: true
        },
        {
          id: 210,
          arrows: [
            null,
            {
              name: "направо",
              slide: 311
            },
            null,
            {
              name: "вернуться",
              slide: 27
            }
          ],
          proportions: 33,
          images: [
            "DSC01120_1_WEB.jpg",
            "DSC01117_1_WEB.jpg"
          ],
          option: false
        },
        {
          id: 31,
          arrows: [
            {
              name: "прямо",
              slide: 34
            },
            {
              name: "направо",
              slide: 36
            },
            {
              name: "вернуться",
              slide: 1
            },
            {
              name: "налево",
              slide: 35
            }
          ],
          proportions: null,
          images: [
            "3g.jpg"
          ],
          option: false
        },
        {
          id: 34,
          arrows: [
            null,
            {
              name: "вернуться",
              slide: 31
            },
            null,
            null
          ],
          proportions: 33,
          images: [
            "DSC01083_1_WEB.jpg",
            "DSC01087_1_WEB.jpg"
          ],
          option: false
        }
        ,
        {
          id: 35,
          arrows: [
            null,
            {
              name: "вернуться",
              slide: 31
            },
            null,
            null
          ],
          proportions: 33,
          images: [
            "DSC01081_1_WEB.jpg",
            "DSC01080_1_WEB.jpg"
          ],
          option: false
        },
        {
          id: 36,
          arrows: [
            {
              name: "наверх",
              slide: 38
            },
            null,
            null,
            {
              name: "вернуться",
              slide: 31
            }
          ],
          proportions: 33,
          images: [
            "DSC01088_1_WEB.jpg",
            "DSC01079_1_WEB.jpg"
          ],
          option: false
        },
        {
          id: 37,
          arrows: [
            null,
            {
              name: "вернуться",
              slide: 38
            },
            null,
            null
          ],
          proportions: 33,
          images: [
            "DSC01104_1_WEB.jpg",
            "DSC01100_1_WEB.jpg"
          ],
          option: false
        },
        {
          id: 38,
          arrows: [
            {
              name: "прямо",
              slide: 311
            },
            {
              name: "направо",
              slide: 39
            },
            {
              name: "вернуться",
              slide: 36
            },
            {
              name: "налево",
              slide: 37
            }
          ],
          proportions: 33,
          images: [
            "DSC01109_1_WEB.jpg",
            "DSC01092_1_WEB.jpg"
          ],
          option: false
        },
        {
          id: 39,
          arrows: [
            null,
            {
              name: "направо",
              slide: 310
            },
            null,
            {
              name: "вернуться",
              slide: 38
            }
          ],
          proportions: null,
          images: [
            "9g.jpg"
          ],
          option: false
        },
        {
          id: 310,
          arrows: [
            null,
            null,
            null,
            {
              name: "вернуться",
              slide: 39
            }
          ],
          proportions: 33,
          images: [
            "DSC01096_1_WEB.jpg",
            "DSC01107_1_WEB.jpg"
          ],
          option: false
        },
        {
          id: 311,
          arrows: [
            null,
            {
              name: "вернуться",
              slide: 38
            },
            null,
            {
              name: "налево",
              slide: 210
            }
          ],
          proportions: 67,
          images: [
            "DSC01122_1_WEB.jpg",
            "DSC01114_1_WEB.jpg"
          ],
          option: false
        }
      ],
      options:{
        imgspath: null,
        bgcolor: null
      }
    },
    {
      data:[
        {
          id: 1,
          arrows: [
            null,
            {
              name: "вход",
              slide: 3
            },
            null,
            {
              name: "смотреть витрину",
              slide: 2
            }
          ],
          proportions: 100,
          images: [
            "1.jpg"
          ],
          option: false
        },
        {
          id: 2,
          arrows: [
            null,
            {
              name: "вернуться",
              slide: 1
            },
            null,
            null
          ],
          proportions: 100,
          images: [
            "2.jpg"
          ],
          option: false
        }
        ,
        {
          id: 3,
          arrows: [
            {
              name: "прямо",
              slide: 4
            },
            {
              name: "направо",
              slide: 303
            },
            null,
            {
              name: "налево",
              slide: 301
            }
          ],
          proportions: 100,
          images: [
            "3.jpg"
          ],
          option: false
        },
        {
          id: 301,
          arrows: [
            null,
            {
              name: "вернуться",
              slide: 3
            },
            null,
            {
              name: "налево",
              slide: 302
            }
          ],
          proportions: 100,
          images: [
            "301.jpg"
          ],
          option: false
        },
        {
          id: 302,
          arrows: [
            null,
            {
              name: "вернуться",
              slide: 301
            },
            null,
            null
          ],
          proportions: 100,
          images: [
            "302.jpg"
          ],
          option: false
        },
        {
          id: 303,
          arrows: [
            {
              name: "прямо",
              slide: 304
            },
            null,
            null,
            {
              name: "вернуться",
              slide: 3
            }
          ],
          proportions: 100,
          images: [
            "8.jpg"
          ],
          option: false
        },
        {
          id: 304,
          arrows: [
            null,
            {
              name: "направо",
              slide: 305
            },
            null,
            {
              name: "вернуться",
              slide: 303
            }
          ],
          proportions: 67,
          images: [
            "19.jpg",
            "18.jpg"
          ],
          option: false
        },
        {
          id: 305,
          arrows: [
            null,
            null,
            null,
            {
              name: "вернуться",
              slide: 304
            }
          ],
          proportions: 100,
          images: [
            "17.jpg"
          ],
          option: false
        },
        {
          id: 4,
          arrows: [
            null,
            {
              name: "направо",
              slide: 406
            },
            {
              name: "вернуться",
              slide: 3
            },
            {
              name: "налево",
              slide: 401
            }
          ],
          proportions: 100,
          images: [
            "11.jpg"
          ],
          option: false
        },
        {
          id: 401,
          arrows: [
            {
              name: "прямо",
              slide: 402
            },
            {
              name: "вернуться",
              slide: 4
            },
            null,
            null
          ],
          proportions: 100,
          images: [
            "12.jpg"
          ],
          option: false
        },
        {
          id: 402,
          arrows: [
            {
              name: "прямо",
              slide: 405
            },
            {
              name: "направо",
              slide: 404
            },
            {
              name: "вернуться",
              slide: 401
            },
            {
              name: "налево",
              slide: 403
            }
          ],
          proportions: 100,
          images: [
            "10.jpg"
          ],
          option: false
        },
        {
          id: 403,
          arrows: [
            null,
            {
              name: "вернуться",
              slide: 402
            },
            null,
            null
          ],
          proportions: 100,
          images: [
            "14.jpg"
          ],
          option: false
        },
        {
          id: 404,
          arrows: [
            null,
            null,
            null,
            {
              name: "вернуться",
              slide: 402
            }
          ],
          proportions: 100,
          images: [
            "9.jpg"
          ],
          option: false
        },
        {
          id: 405,
          arrows: [
            null,
            {
              name: "вернуться",
              slide: 402
            },
            null,
            null
          ],
          proportions: 100,
          images: [
            "7.jpg"
          ],
          option: false
        },
        {
          id: 406,
          arrows: [
            null,
            {
              name: "направо",
              slide: 407
            },
            null,
            {
              name: "вернуться",
              slide: 4
            }
          ],
          proportions: 33,
          images: [
            "15.jpg",
            "16.jpg"
          ],
          option: false
        },
        {
          id: 407,
          arrows: [
            null,
            null,
            null,
            {
              name: "вернуться",
              slide: 406
            }
          ],
          proportions: 100,
          images: [
            "13.jpg"
          ],
          option: false
        }
      ],
      options:{
        imgspath: 'dnlite',
        bgcolor: '#FFF2F2'
      }
    }
  ];

  if (tourDN) {
    tourSlider(tourDN, shops[0]);
  }

  if (tourDNL) {
    tourSlider(tourDNL, shops[1]);
  }

  function tourSlider(el, obj) {
    var arr = obj.data;
    var bg = obj.options.bgcolor;

    if (typeof bg !== 'object') setBgColor(el, bg);

    var buttonStart = el.getElementsByClassName('tourDayNightButton--start')[0];
    var buttonReset = el.getElementsByClassName('tourDayNightButton--reset')[0];
    var slidesContainer = el.getElementsByClassName('tourDayNightSlides')[0];

    for(var i=0; i < arr.length; i++){
      initSlide(slidesContainer, arr[i]);
    }

    var slides = el.getElementsByClassName('tourDayNightSlide');
    var navigationButton = el.getElementsByClassName('tourDayNightNavigationButton');

    if(buttonStart){
      buttonStart.addEventListener('click', function (e) {
        e.preventDefault();
        rmClass(this, 'active');
        rmClass(slides[0], 'active');
        addClass(slides[1], 'active');
        addClass(buttonReset, 'active');
        parseSlide(slides, 1);
        rmBgColor(el);
      });
    }

    if(buttonReset){
      buttonReset.addEventListener('click', function (e) {
        e.preventDefault();
        for(var i=0; i < slides.length; i++){
          rmClass(slides[i], 'active');
        }
        for(var j=0; j < navigationButton.length; j++){
          rmClass(navigationButton[j], 'active');
        }
        rmClass(this, 'active');
        addClass(slides[0], 'active');
        addClass(buttonStart, 'active');
        setBgColor(el, bg);
      });
    }

    eventsNavigationButton(slides, navigationButton);

    function parseSlide(elems, id) {
      var data;

      for(var i=0; i < elems.length; i++){
        rmClass(elems[i], 'active');
        rmClass(elems[i], 'option');

        if (parseInt(elems[i].getAttribute('data-id'), 10) === id){
          data = JSON.parse(elems[i].getAttribute('data-set'));
          addClass(elems[i], 'active');
        }
      }

      initArrows(data);
    }

    function initSlide(el, data) {
      var slide = document.createElement('div');
      var container = document.createElement('div');

      slide.className = 'tourDayNightSlide';
      container.className = 'tourDayNightSlideContainer';

      if(typeof data.proportions === 'number' ){
        container.className += ' tourDayNightSlideContainer--' + data.proportions;
      }

      slide.setAttribute('data-id',data.id);
      slide.setAttribute('data-set', JSON.stringify(data));

      slide.appendChild(container);
      for(var j=0;j < data.images.length; j++){
        initImg(container, data.images[j]);
      }
      el.appendChild(slide);
    }

    function initImg(el, data) {
      var imgWrapper = document.createElement('div');
      var img = document.createElement('img');
      var url = 'https://daynight.ru/custom/daynighttour/img/';
      var folder = obj.options.imgspath;

      if (folder !== null) {
        url = url + folder + '/';
      }

      imgWrapper.className = 'tourDayNightSlideImgWrapper';
      img.className = 'tourDayNightSlideImg';

      img.setAttribute('src', url + data);

      imgWrapper.appendChild(img);
      el.appendChild(imgWrapper);
    }

    function initArrows(obj) {
      var button = el.getElementsByClassName('tourDayNightNavigationButton');
      var data = obj.arrows;

      for(var i=0; i < data.length; i++){
        rmClass(button[i], 'option');
        if( data[i] !== null ){
          button[i].setAttribute('data-slide', data[i].slide);
          var span = button[i].getElementsByTagName('span')[0];

          span.textContent = data[i].name;

          if(data[i].option){
            addClass(button[i], 'option');
          }
          addClass(button[i], 'active');
        } else {
          rmClass(button[i], 'active');
        }
      }
    }

    function eventsNavigationButton(slides, btns) {
      for(var i=0; i < btns.length; i++){
        btns[i].addEventListener('click', function () {
          var slideId = parseInt(this.getAttribute('data-slide'), 10);
            parseSlide(slides, slideId);
        }, false);
      }
    }

    function setBgColor(e, color) {
      e.setAttribute('data-bg', 'background-color: ' + color + ';');
      var attr = e.getAttribute('data-bg');
        if(!e.hasAttribute('style')) e.setAttribute('style', attr);
    }

    function rmBgColor(e) {
      if(e.hasAttribute('style')) e.removeAttribute('style');
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var instafeed = document.getElementById('instafeed1');
  var instafeed2 = document.getElementById('instafeed2');

  if (instafeed){
    initInstaFeed({
      target: 'instafeed1',
      tagname: 'daynightstores',
      userid: '231394359',
      accesstoken: '231394359.1677ed0.67f30d3f3d39489ea027a2f772408a23',
      name: 'Instagram'
    });
  }

  if (instafeed2){
    initInstaFeed({
      target: 'instafeed2',
      tagname: 'daynight.ru',
      userid: '3060460290',
      accesstoken: '3060460290.aa0467f.6dc6abcef65f4b4296ea8f7c4cb3b7d4',
      name: 'Multibrand store instagram'
    });
  }

  function initInstaFeed(options) {
    var feed = new Instafeed({
      target: options.target,
      get: 'user',
      tagName: options.tagname,
      userId: options.userid,
      accessToken: options.accesstoken,
      sortBy: 'most-recent',
      limit: 1,
      template:'<a class="latestListItemLinkImgWrapper" href="{{link}}"><img src="{{image}}" alt="" class="latestListItemLinkImg"></a><a class="latestListItemLinkText" href="{{link}}">' + options.name + '</a>',
      resolution: 'standard_resolution'
    });

    return feed.run();
  }
});

// uniAccordion
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var xxx = document.getElementsByClassName('uniAccordion');

  uniAccrodion(xxx);

  function uniAccrodion(scope) {
    for (var i=0; i < scope.length; i++){
      init(scope[i]);
    }

    function init(scope) {
      var box = document.createElement('div');
      var name = document.createElement('div');
      var nameArrow = document.createElement('span');
      var nameText = document.createElement('span');
      var dataName;

      name.className = 'uniAccordionName';
      nameArrow.className = 'uniAccordionNameArrow';
      box.className = 'uniAccordionContainer';

      box.innerHTML = scope.innerHTML;
      scope.innerHTML = '';

      scope.appendChild(box);

      if (scope.dataset) {
        dataName = scope.dataset.name;
        nameText.textContent = dataName;
        name.appendChild(nameText);
        name.appendChild(nameArrow);
        scope.insertBefore(name, box);

        name.addEventListener('click', function () {
          if (hasClass(scope, 'active')){
            rmClass(scope, 'active');
          } else {
            addClass(scope, 'active');
          }
        }, false);
      }
    }
  }
});
