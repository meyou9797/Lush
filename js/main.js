//슬릭구현
$(document).ready(function(){
    //메인슬라이더 슬릭
    $('.mainSlider').slick({
        slidesToShow:1,
        slidesToScroll:1,
        dots:true,
        prevArrow:'<div class="sliderPrevBtn">이전</div>',
        nextArrow:'<div class="sliderNextBtn">다음</div>',
    })
    //헤더 fixed
     $(window).scroll(function(){ //스크롤이벤트가 발생 했을때
        var sc_top=$(this).scrollTop(); //여기서 this=window ,
        var sc_left=$(this).scrollLeft(); //여기서 this=window
        
        $('.top').text(sc_top);//수치값을 정해둠
        
        if(sc_top>100){//스크롤이 100을 넘어갈때 fixed라는 class를 부여
            $('#header').addClass('fixed');
        }else if(sc_top==0){//스크롤 상단에 고정시 class삭제
            $('#header').removeClass('fixed');
        }
    })
    $('.con03Slick').slick({
       slidesToShow:3,
       slidesToScroll:1,
        dots:true,
        centerMode:true,
       prevArrow:'<div class="con03prevBtn">이전</div>',
       nextArrow:'<div class="con03nextBtn">다음</div>',        
   }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    /* 자바스크립트
    if (currentSlide !== nextSlide) {
        document.querySelectorAll('.slick-center + .slick-cloned').forEach((next) => {
            // timeout required or Slick will overwrite the classes
            setTimeout(() => next.classList.add('slick-current', 'slick-center'));
        });
    }
    */
    // IE 호환성을 고려한 제이쿼리
    if (currentSlide !== nextSlide) {
        $('.slick-center + .slick-cloned').each(function(index, node) {
            var $node = $(node);
            
            setTimeout(function() {
                $node.addClass('slick-current');
                $node.addClass('slick-center');
            });
        });
    }
});
    
    //maincon01 Tab menu
    $(".tab_content").hide(); //Hide all content
            $("ul.tabs li:first").addClass("active").show(); //Activate first tab
            $(".tab_content:first").show(); //Show first tab content

            //On Click Event
            $("ul.tabs li").click(function() {
                new WOW().init();
                $("ul.tabs li").removeClass("active"); //Remove any "active" class
                $(this).addClass("active"); //Add "active" class to selected tab
                $(".tab_content").hide(); //Hide all tab content

                var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
                $(activeTab).fadeIn(1500); //Fade in the active ID content
                return false;
            });
    
    
    //컨텐츠
   $('.con05Box').slick({
       slidesToShow:3,
       slidesToScroll:1,
       centerMode:true,
       autoPlay:true,
       autoplaySpeed:1000,
       infinite:true,
       dots:false,
       prevArrow:'<div class="prevBtn">이전</div>',
       nextArrow:'<div class="nextBtn">다음</div>',
   })
    
    
    
        
    //wow
    new WOW().init();
    
})