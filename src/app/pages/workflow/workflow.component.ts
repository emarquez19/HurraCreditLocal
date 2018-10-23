import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { Observable } from 'rxjs/Observable';

declare const $: any;
declare const jQuery: any;
declare var ease: any;
declare var Swiper: any;
declare var Segment: any;


@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {

  creditValue = 3000;
  options: Options = {
    floor: 3000,
    ceil: 9000,
    // minLimit: 4500,
    showSelectionBar: true,
    translate: (creditValue: number): string => {
        return '$' + creditValue.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    }
  };

    // declaracion de variables para la convercio de la fecha
    dSinseDate: Date;
    iSinseDate: number;
    dDateUntil: Date;
    iDateUntil: number;
    dDateStatusSince: Date;
    iDateStatusSince: number;
    dDateStatusUntil: Date;
    iDateStatusUntil: number;
//   patterns = {
//     'e': { pattern: new RegExp(/[0-3]/) },
//     'f': { pattern: new RegExp(/[0-9]/) },
//     'g': { pattern: new RegExp(/[0-1]/) },
//     'h': { pattern: new RegExp(/[0-2]/) },
//   };

  constructor() {
  }

  ngOnInit() {

    // Global var
    const CRUMINA = <any>{};

    (function ($) {
        // USE STRICT
        'use strict';
        
        // ----------------------------------------------------/
        // Predefined Variables
        // ----------------------------------------------------/
        const $window = $(window),
            $document = $(document),
            $body = $('body'),

            swipers = {},
            // Elements
            $header = $('#site-header'),
            $footer = $('#site-footer'),
            $counter = $('.counter'),
            $countdown = $('.countdown-timer'),
            $progress_bar = $('.skills-item'),
            $primaryMenu = $('#primary-menu'),
            $preloader = $('#hellopreloader');

        const overlayNav = $('.cd-overlay-nav'),
            overlayContent = $('.cd-overlay-content'),
            navigation = $('.cd-primary-nav');
    
        CRUMINA.layerInit = function(){
            const diameterValue = (Math.sqrt( Math.pow($(window).height(), 2) + Math.pow($(window).width(), 2))*2);
            overlayNav.children('span').velocity({
                scaleX: 0,
                scaleY: 0,
                translateZ: 0
            }, 50).velocity({
                height : diameterValue+'px',
                width : diameterValue+'px',
                top : -(diameterValue/2)+'px',
                left : -(diameterValue/2)+'px'
            }, 0);

            overlayContent.children('span').velocity({
                scaleX: 0,
                scaleY: 0,
                translateZ: 0
            }, 50).velocity({
                height : diameterValue+'px',
                width : diameterValue+'px',
                top : -(diameterValue/2)+'px',
                left : -(diameterValue/2)+'px'
            }, 0);
        };


        /* -----------------------
        * Fixed Header
        * --------------------- */

        CRUMINA.fixedHeader = function () {
            // grab an element
            $header.headroom(
                {
                    'offset': 150,
                    'tolerance': 5,
                    'classes': {
                        'initial': 'animated',
                        // "pinned': "slideDown',
                        // "unpinned": "slideUp"
                    }
                }
            );
        };

        /* -----------------------
        * Preloader
        * --------------------- */

        CRUMINA.preloader = function () {
            $window.scrollTop(0);
            setTimeout(function() {  $preloader.fadeOut(800) ; }, 500);
            return false;
        };

        /* -----------------------------
        * Equal height
        * ---------------------------*/
        CRUMINA.equalHeight = function () {
            $('.js-equal-child').find('.theme-module').matchHeight({
                property: 'min-height'
            });
        };


        /* -----------------------------
        * Sliders and Carousels
        * ---------------------------*/

        CRUMINA.initSwiper = function () {
            let initIterator = 0;

            $('.swiper-container').each(function () {

                let $t = $(this);
                let index = 'swiper-unique-id-' + initIterator;
                let $breakPoints = false;
                $t.addClass('swiper-' + index + ' initialized').attr('id', index);
                $t.closest('.crumina-module').find('.swiper-pagination').addClass('pagination-' + index);

                let $effect = ($t.data('effect')) ? $t.data('effect') : 'slide',
                    $crossfade = ($t.data('crossfade')) ? $t.data('crossfade') : true,
                    $loop = ($t.data('loop') == false) ? $t.data('loop') : true,
                    $showItems = ($t.data('show-items')) ? $t.data('show-items') : 1,
                    $scrollItems = ($t.data('scroll-items')) ? $t.data('scroll-items') : 1,
                    $scrollDirection = ($t.data('direction')) ? $t.data('direction') : 'horizontal',
                    $mouseScroll = ($t.data('mouse-scroll')) ? $t.data('mouse-scroll') : false,
                    $autoplay = ($t.data('autoplay')) ? parseInt($t.data('autoplay'), 10) : 0,
                    $autoheight = ($t.hasClass('auto-height')) ? true: false,
                    $nospace = ($t.data('nospace')) ? $t.data('nospace') : false,
                    $centeredSlider = ($t.data('centered-slider')) ? $t.data('centered-slider') : false,
                    $stretch = ($t.data('stretch')) ? $t.data('stretch') : 0,
                    $depth = ($t.data('depth')) ? $t.data('depth') : 0,
                    $slidesSpace = ($showItems > 1 && true !== $nospace ) ? 20 : 0;


                swipers['swiper-' + index] = new Swiper('.swiper-' + index, {
                    pagination: '.pagination-' + index,
                    paginationClickable: true,
                    direction: $scrollDirection,
                    mousewheelControl: $mouseScroll,
                    mousewheelReleaseOnEdges: $mouseScroll,
                    slidesPerView: $showItems,
                    slidesPerGroup: $scrollItems,
                    spaceBetween: $slidesSpace,
                    keyboardControl: true,
                    setWrapperSize: true,
                    preloadImages: true,
                    updateOnImagesReady: true,
                    centeredSlides: $centeredSlider,
                    autoplay: $autoplay,
                    autoHeight: $autoheight,
                    loop: $loop,
                    breakpoints: $breakPoints,
                    effect: $effect,
                    fade: {
                        crossFade: $crossfade
                    },
                    parallax: true,
                    onImagesReady: function (swiper) {

                    },
                    coverflow: {
                        stretch: $stretch,
                        rotate: 0,
                        depth: $depth,
                        modifier: 2,
                        slideShadows : false
                    },
                    onSlideChangeStart: function (swiper) {
                      if ($t.closest('.crumina-module').find('.slider-slides').length) {
                            $t.closest('.crumina-module').find('.slider-slides .slide-active').removeClass('slide-active');
                            const realIndex = swiper.slides.eq(swiper.activeIndex).attr('data-swiper-slide-index');
                            $t.closest('.crumina-module').find('.slider-slides .slides-item').eq(realIndex).addClass('slide-active');
                          }
                      }
                });
                initIterator++;
            });

            // swiper tabs

            $('.slider-slides .slides-item').on('click', function (e) {
                e.preventDefault();
                var current_id = $(this).closest('.crumina-module-slider').find('.swiper-container').attr('id');
                var mySwiper = swipers['swiper-' + current_id];
                if ($(this).hasClass('slide-active')) return false;
                var activeIndex = $(this).parent().find('.slides-item').index(this);
                mySwiper.slideTo(activeIndex + 1);
                $(this).parent().find('.slide-active').removeClass('slide-active');
                $(this).addClass('slide-active');
                mySwiper.update();
                return false;

            });
        };


        CRUMINA.burgerAnimation = function () {
            /* In animations (to close icon) */

            const beginAC = 80,
                endAC = 320,
                beginB = 80,
                endB = 320;

            function inAC(s) {
                s.draw('80% - 240', '80%', 0.3, {
                    delay: 0.1,
                    callback: function () {
                        inAC2(s);
                    }
                });
            }

            function inAC2(s) {
                s.draw('100% - 545', '100% - 305', 0.6, {
                    easing: ease.ease('elastic-out', 1, 0.3),
                });
            }

            function inB(s) {
                s.draw(beginB - 60, endB + 60, 0.1, {
                    callback: function () {
                        inB2(s);
                    }
                });
            }

            function inB2(s) {
                s.draw(beginB + 120, endB - 120, 0.3, {
                    easing: ease.ease('bounce-out', 1, 0.3),
                });
            }

            /* Out animations (to burger icon) */

            function outAC(s) {
                s.draw('90% - 240', '90%', 0.1, {
                    easing: ease.ease('elastic-in', 1, 0.3),
                    callback: function () {
                        outAC2(s);
                    }
                });
            }

            function outAC2(s) {
                s.draw('20% - 240', '20%', 0.3, {
                    callback: function () {
                        outAC3(s);
                    }
                });
            }

            function outAC3(s) {
                s.draw(beginAC, endAC, 0.7, {
                    easing: ease.ease('elastic-out', 1, 0.3),
                });
            }

            function outB(s) {
                s.draw(beginB, endB, 0.7, {
                    delay: 0.1,
                    easing: ease.ease('elastic-out', 2, 0.4),
                });
            }

            /* Scale functions */

            function addScale(m) {
                m.className = 'menu-icon-wrapper scaled';
            }

            function removeScale(m) {
                m.className = 'menu-icon-wrapper';
            }

            /* Awesome burger scaled */

            let pathD = document.getElementById('pathD'),
                pathE = document.getElementById('pathE'),
                pathF = document.getElementById('pathF'),
                segmentD = new Segment(pathD, beginAC, endAC),
                segmentE = new Segment(pathE, beginB, endB),
                segmentF = new Segment(pathF, beginAC, endAC),
                wrapper2 = document.getElementById('menu-icon-wrapper'),
                trigger2 = document.getElementById('menu-icon-trigger'),
                toCloseIcon2 = true;

            wrapper2.style.visibility = 'visible';

            trigger2.onclick = function () {
                addScale(wrapper2);
                if (toCloseIcon2) {
                    inAC(segmentD);
                    inB(segmentE);
                    inAC(segmentF);
                } else {
                    outAC(segmentD);
                    outB(segmentE);
                    outAC(segmentF);

                }
                toCloseIcon2 = !toCloseIcon2;
                setTimeout(function () {
                    removeScale(wrapper2);
                }, 450);
            };
        };


        /* -----------------------------
        * On Click Functions
        * ---------------------------*/


        $window.keydown(function (eventObject) {
            if (eventObject.which === 27) {
                $body.removeClass('overlay-enable');
                $('.search-standard').removeClass('open');
                $primaryMenu.css({'visibility': 'visible'});
                $('#menu-icon-trigger').css({'opacity': '1'});
                $('.top-bar').removeClass('open');
            }
        });

        jQuery('.js-open-search-popup > *').on('click', function () {
            CRUMINA.toggleSearch();
            return false;
        });

        jQuery('#top-bar-js').on('click', function () {
            $('.top-bar').addClass('open');
            return false;
        });

        jQuery('.js-open-search-standard > *').on('click', function () {
            $primaryMenu.find('.search-standard').addClass('open');
            $primaryMenu.css({'visibility': 'hidden'});
            $('#menu-icon-trigger').css({'opacity': '0'});
            setTimeout(function() { $primaryMenu.find('.search-input').focus() }, 100);
            return false;
        });

        jQuery('.js-search-close > *').on('click', function () {
            $primaryMenu.find('.search-standard').removeClass('open');
            $primaryMenu.css({'visibility': 'visible'});
            $('#menu-icon-trigger').css({'opacity': '1'});
            return false;
        });

        jQuery('#top-bar-close-js').on('click', function () {
            $('.top-bar').removeClass('open');
            return false;
        });

        jQuery('.js-message-popup').on('click', function () {
            setTimeout(function() {  $('.message-popup').addClass('open'); }, 300);
            return false;
        });

        jQuery('.js-aviso-popup').on('click', function () {
            $('body').addClass('noScrolling');
            setTimeout(function() {  $('.aviso-popup').addClass('open'); }, 300);
            return false;
        });

        jQuery('.js-terminos-popup').on('click', function () {
            $('body').addClass('noScrolling');
            setTimeout(function() {  $('.terminos-popup').addClass('open'); }, 300);
            return false;
        });

        jQuery('.js-finalstep-popup').on('click', function () {
            $('body').addClass('noScrolling');
            setTimeout(function() {  $('.finalstep-popup').addClass('open'); }, 300);
            return false;
        });

        jQuery('.js-popup-close').on('click', function () {
            $('body').removeClass('noScrolling');

            {  $('.search-popup').removeClass('open'); }
            {  $('.message-popup').removeClass('open'); }
            {  $('.popup-gallery').removeClass('open'); }
            {  $('.aviso-popup').removeClass('open'); }
            {  $('.terminos-popup').removeClass('open'); }
            {  $('.finalstep-popup').removeClass('open'); }
            return false;
        });

        jQuery('.js-popup-clear-input').on('click', function () {
            $('.js-popup-clear-input').siblings('input').val('').focus();
        });


        /*---------------------------------
        ACCORDION
        -----------------------------------*/
        jQuery('.accordion-heading').on('click', function () {
            jQuery(this).parents('.panel-heading').toggleClass('active');
            jQuery(this).parents('.accordion-panel').toggleClass('active');
        });

        // Scroll to top.
        jQuery('.back-to-top').on('click', function () {
            $('html,body').animate({
                scrollTop: 0
            }, 1200);
            return false;
        });

        // $('.currency-mask').focus(function(){
        //     const valueCurrencyThis = $(this).val();
        //     $(this).val(parseFloat(valueCurrencyThis).toFixed(2));
        // });
        // $('.currency-mask').blur(function(){
        //     const valueCurrencyThis = $(this).val();
        //     $(this).val(parseFloat(valueCurrencyThis).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
        // });

        /* -----------------------------
        * On DOM ready functions
        * ---------------------------*/

        $document.ready(function () {

            jQuery(function(){
                jQuery('.social__item.main').hover(function(){
                    jQuery('.social__item.main').siblings('.share-product').addClass('open')
                });
                jQuery('.share-product') .mouseleave(function(){

                    jQuery('.share-product').removeClass('open');

                });
            });

            $('.js-pricing-switcher').on('click', function(){
                let $is_year = $(this).prev().is(':checked');
                let $section = $(this).closest('.crumina-pricings');
                let $price = $section.find('.price');
                $price.each(function(){
                    if($is_year){
                        $(this).text($(this).data('annually'));
                    } else {
                        $(this).text($(this).data('monthly'));
                    }
                });
            });

            $('#workgroup-search-input').on('keyup', function() {
                const value = $(this).val().toLowerCase();
                $('#work-group-search-block [data-work-filter]').filter(function() {
                  $(this).toggle($(this).find('.pricing-title').text().toLowerCase().indexOf(value) > -1);
                    // console.log($(this).find('.pricing-title').text().toLowerCase().indexOf(value));
                });
            });


            if ($('#menu-icon-wrapper').length) {
                CRUMINA.burgerAnimation();
            }
            // 3-d party libs run
            $primaryMenu.crumegamenu({
                showSpeed: 300,
                hideSpeed: 200,
                trigger: "hover",
                animation: "drop-up",
                indicatorFirstLevel: "&#xf0d7",
                indicatorSecondLevel: "&#xf105"
            });

            $('#credit-slider-block').find('.ng5-slider-pointer-min').addClass('animated infinite wobble');

            $('#credit').removeClass('visibleOnStart');

            $('.credit-controltab').click(function (){
                setTimeout(function() {
                    $('#credit-slider-block').find('.ng5-slider-pointer-min').removeClass('animated infinite wobble');
                }, 4000);
            });

        });

        CRUMINA.fixedHeader();
        CRUMINA.initSwiper();
        CRUMINA.equalHeight();

        // Dom mofifications
        $('.nice-select-holder select').niceSelect();

        CRUMINA.preloader();
        CRUMINA.layerInit();


        $(window).on('resize', function(){
            window.requestAnimationFrame( CRUMINA.layerInit);
        });

    })(jQuery);
  }


  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  selectThisPlan($event): void {

    const clickedElement = $event.target || $event.srcElement;
    const active = document.querySelector('.selected-plan');
    if(active){
        active.classList.remove('selected-plan');
    }
    clickedElement.parentElement.className += ' selected-plan';
  }

  evaluateFinalStep(msjresp){
    
  }
  goFinalStep2(){
    $('#body-finalstep-1').hide();
    $('#body-finalstep-2').removeClass('hide');
    this.initialiceQuestions();
  }

  initialiceQuestions() {
    setTimeout(() => {
        // lib
        function $(selector) {
            return document.querySelector(selector);
          }
          
          var $$ = function(selector) {
            return [].slice.call(document.querySelectorAll(selector));
          }
          
          pageSlider('#main-slider');
          
          function pageSlider(selector) {
            // get data 
            var slider = $(selector);
          
            if (!slider) {
              return false;
            }
            
            var oLoop = true;
          
            var slides = slider.querySelectorAll('.slider-item');
            slides = [].slice.call(slides); // to create array from slides list 
            var prev = slider.querySelector('.slider-control-prev');
            var next = slider.querySelector('.slider-control-next');
            // var qnext = $('.btn-question-next');
            // var qnext = slider.querySelector('#main-slider .btn-question-next');
            const classname = slider.querySelectorAll('.btn-question-next');

          
            //generate pages
            var paginator = slider.querySelector('.slider-paginator');
            var pages = [];
            for (var i in slides) {
              var page = document.createElement('button');
              page.setAttribute('type', 'button');
              page.classList.add('slider-page');
              page.appendChild(document.createTextNode('*'))
              paginator.appendChild(page);
              pages.push(page);
            }
          
            // create slide functions
            var activePage = 0;
          
            // check active arrows
            var checkArrows = function() {
              // last page hide next arrow
              if (activePage === slides.length - 1) {
                next.classList.add('is-hidden');
                // qnext.classList.add('is-hidden');
              } else {
                next.classList.remove('is-hidden');
                // qnext.classList.remove('is-hidden');
              }
              if (activePage === 0) {
                prev.classList.add('is-hidden');
              } else {
                prev.classList.remove('is-hidden');
              }
            }
          
            var setActivePage = function(index) {
              if (index >= 0 && index < pages.length) {
                activePage = index;
                for (var i in pages) {
                  pages[i].classList.remove('active');
                }
                pages[activePage].classList.add('active')
                if (!oLoop) {
                  checkArrows();
                }
              }
            }
          
            var slideTo = function(index) {
              if (index >= 0 && index < slides.length) {
                setActivePage(index);
                slides.forEach(function(slide) {
                  var slideValue = -100 * activePage;
                  slide.style.transform = 'translateX(' + slideValue + '%)';
                })
              }
            }
          
            var slideToNext = function() {
              if (activePage === slides.length - 1) {
                slideTo(0);
              } else {
                slideTo(activePage + 1)
              }
            }
          
            var slideToPrev = function() {
              if (activePage === 0) {
                slideTo(slides.length - 1);
              } else {
                slideTo(activePage - 1)
              }
            }
          
            // add events to paginator
            for (var i in pages) {
              pages[i].onclick = function(i, e) {
                e && e.preventDefault();
                slideTo(parseInt(i))
              }.bind(null, i)
            }
            slideTo(0);
            // add events to prev and next
            prev.onclick = function(e) {
              e && e.preventDefault();
              slideToPrev();
            }
            next.onclick = function(e) {
              e && e.preventDefault();
              slideToNext();
            }

            setTimeout(() => {

                const ManageQuestions = function(e) {
                    e && e.preventDefault();
                    slideToNext();

                        if (activePage > (slides.length - 6)) {
                            document.getElementById('text-modal-finalstep-title').innerHTML = 'Para finalizar, sube tus documentos';
                            for (let indxi = 3; indxi < (slides.length - 1); indxi++) {
                                slides[indxi].classList.remove('document-item-slider-prevent');
                            }
                        }

                        if (activePage > (slides.length - 2)) {
                            document.getElementById('text-modal-finalstep-title').innerHTML = '¡En hora buena!<br>Proceso Culminado';
                            for (let indxid = 3; indxid <= (slides.length - 2); indxid++) {
                                slides[indxid].classList.add('document-item-slider-prevent');
                            }
                        }
                };

                for (let ind = 0; ind < classname.length; ind++) {
                    classname[ind].addEventListener('click', ManageQuestions, false);
                }
            }, 100);
          }
    }, 200);
  }

  makeBodyScrollable() {
    $('body').removeClass('noScrolling');
  }

  goStep2() {
    $('.work-controltab').click();
  }
  goStep3() {
    $('.home-controltab').click();
  }
  goStep4() {
    $('.credit-controltab').click();
  }
  goStep5() {
    $('.resolution-controltab').click();
  }
  goBackStep1() {
    $('.personal-controltab').click();
  }
  goBackStep2() {
    $('.work-controltab').click();
  }
  goBackStep3() {
    $('.home-controltab').click();
  }
  goBackStep4() {
    $('.credit-controltab').click();
  }

}
