$(document).ready(function(){
    // responsive menu
    $(".btn-nav, .overlay").on("click", function(){
        $('body').toggleClass('on');
        $(".overlay").toggleClass("overlay--active");
        var target = $(this).data("target");
        $(target).toggleClass("visible");
    });
    
    // Modal Window
    var open_modal = $('.open-modal');
    var close = $('.modal__close, .modal__overlay');
    var modal = $('.modal');

     open_modal.click( function(event){
         event.preventDefault();
         $('body').addClass('on');
         var div = $(this).attr('href');
         var overlay = $(div).find('.modal__overlay');
         overlay.fadeIn(100,
             function(){
                 $(div)
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '0'}, 200);
         });
     });

     close.click( function(){
            $('body').removeClass('on');
            var modal = $(this).parents('.modal');
            modal
             .animate({opacity: 0, top: '0'}, 200,
                 function(){
                     $(this).css('display', 'none');
                     $(modal).find('.modal__overlay').fadeOut(400);
                 }
             );
     });
    
    // help
    $('.help__button').click(function () {
        $(this).toggleClass('help__button--active').next().slideToggle();
        $('.help__button').not(this).removeClass('help__button--active').next().slideUp();
    });
    
    // Tabs
    (function($){				
	jQuery.fn.lightTabs = function(options){

		var createTabs = function(){
			tabs = this;
			i = 0;
			
			showPage = function(i){
				$(tabs).find(".tabs__body").find(".tabs__item").hide();
				$(tabs).find(".tabs__body").find(".tabs__item").eq(i).show();
				$(tabs).find(".tabs__header").find(".tabs__headline").removeClass("tabs__headline--active");
				$(tabs).find(".tabs__header").find(".tabs__headline").eq(i).addClass("tabs__headline--active");
			}
								
			showPage(0);				
			
			$(tabs).find(".tabs__header").find(".tabs__headline").each(function(index, element){
				$(element).attr("data-page", i);
				i++;                        
			});
			
			$(tabs).find(".tabs__header").find(".tabs__headline").click(function(){
				showPage(parseInt($(this).attr("data-page")));
			});				
		};		
		return this.each(createTabs);
	};	
    })(jQuery);
    $(".tabs").lightTabs();
    
    // Select
    $(function() {
        $("select").selecter({
            mobile: true,
            trim: 100,
        });  
    });
    
    // Form validate
    $('form').each(function() {
        $(this).validate({
            highlight: function(element) {
                $(element).parents('.form__group').addClass('form__group--error');
            },
            unhighlight: function(element) {
                $(element).parents('.form__group').removeClass('form__group--error');
            },
            errorClass: 'form__error',
            errorElement: 'div',
            rules: {
                name: {
                    required: true,
                },
                tel: {
                    required: true,
                },
                email: {
                    required: true,
                },
                password: {
                    required: true,
                },
                msg: {
                    required: true,
                }
            },
            messages: {
                name: {
                    required: '',
                },
                tel: {
                    required: '',
                },
                email: {
                    required: '',
                },
                password: {
                    required: '',
                },
                msg: {
                    required: '',
                }
            }
        });
    });
    
    // mask
    $('input[type="tel"]').mask('8-999-999-99-99');
    
    // animate scroll to block
    $(function() {
        var postion = $('.page__row--animate').offset().top - 100,
        height = $('.page__row--animate').height();
        $(document).on('scroll', function (){
          var scroll = $(document).scrollTop();
          if(scroll  > postion && scroll < (postion + height) ) {
             $('.animate').addClass('animate--play')
          }
        })
    });
});