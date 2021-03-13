$(document).ready(function() {
    
//меню мобильное
$(window).on('load resize change', function(){
    if ($(window).width()<768) {
        $('.header__search').appendTo('.header__search_mobile');
        $('.header__icon-mob').css('display', 'block');
        $('.header__bottom').css('display', 'none');
        $('.header__menu').appendTo('.header__menu-mob');
    }
    else {
        $('.header__search').insertAfter('.header__logo');
        $('.header__icon-mob').css('display', 'none');
        $('.header__bottom').css('display', 'flex');
        $('.header__menu').appendTo('.header__bottom');
        HideMenu();  
        $('.header__icon-mob').removeClass('header__icon-mob_active');
    }

    function HideMenu() {
        $('.header__menu-mob').css('display', 'none');
        $('.header__overlay').css('display', 'none');
    }
    
    $('.header__icon-mob').on('click', function() {
        $(this).toggleClass('header__icon-mob_active');
        if ($(this).hasClass('header__icon-mob_active')) {
            $('.header__menu-mob').css('display', 'block');
            $('.header__overlay').css('display', 'block');
        }else {
            HideMenu();  
        }  
    });
    
    $('.header__overlay').on('click', function() {
            HideMenu();
            $('.header__icon-mob').removeClass('header__icon-mob_active');
    });
});

});