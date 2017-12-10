$(document).ready(function(){ 
    
	/* on load */
    $("#contents .mainsub").stop().animate({'opacity':'1'},3000);
    $("#contents h2").stop().animate({'top':'0px','opacity':'1'},1800,'easeOutBounce');   
    $("nav").stop().animate({left:'0'},1000);
    
    
    /* change topmenu bg when scroll */
    $(window).on('scroll',function(){
    var scroll = $(window).scrollTop();
        if (scroll > 100){
            $("header").addClass("scroll");
            $("header .menu").addClass("scroll");
            $("header a").addClass("scroll");
            $("header .order").addClass("scroll");
            
        } else if(scroll > 0 && scroll < 100){
            $("header").removeClass("scroll");
            $("header .menu").removeClass("scroll");
            $("header a").removeClass("scroll");
            $("header .order").removeClass("scroll");
        }
        
/********** show contents when shown completely **************/
        /*all sub*/
        $("article").each(function(i){
            var scroll = $(window).scrollTop();
            var top_of_content = $(this).offset().top;
            var bottom_of_window = scroll + $(window).height();
            
            if( bottom_of_window >= top_of_content){
                $(this).stop().animate({'opacity':'1'},2500);
                    
            } else if( bottom_of_window <= top_of_content){
                $(this).stop().animate({'opacity':'0'},1000);
            }
        }); 
        
        
        
/**************** 페이지 이 위치까지 내렸을때 로딩되어 서서히 등장하도록 (순서대로등장. 올리면 다시 사라짐) ******/
        
        
         /*like us*/
        $(".like li").each(function(index){
           var scroll = $(window).scrollTop();
           var top_of_content = $(".like-us").offset().top  + $('.like-us').outerHeight() + 50;
           var bottom_of_window = scroll + $(window).height();
            console.log(top_of_content +"/"+ bottom_of_window);
            if( bottom_of_window > top_of_content){
                $(this).delay(150*index).fadeTo(500,1);
                $('.slogan').stop().animate({right:"10%",opacity:1});
                    
            } else if( bottom_of_window < top_of_content){
                $(this).fadeOut('fast');
                $('.slogan').stop().animate({right:"-24%",opacity:0});
            }
        });
        
    });/*scroll event end*/
    
    
    /* mainmenu accordion */
    $("ul.main>li.sandwich a").click(function(){
        var promowid = $("nav .promo img").width();
        if( promowid <= 150 ){
            $("nav .promo img").stop().animate({'width':'180px'},500)
        } else if ( promowid > 150 ){
            $("nav .promo img").stop().animate({'width':'150px'},500)
        }
        $(this).siblings('.submenu').slideToggle(500);
    });
    
    
    /* all sub mouseover */
    $("article section .cover").on("mouseenter",function(){
        $(this).siblings("img").css({'transform':'scale(1.2)'});
    });
    $("article section .cover").on("mouseleave",function(){
        $(this).siblings("img").css({'transform':'scale(1.0)'});
    });
   
    
    /* cart show/hide */
    $("#cart .top").on('click',function(e){
        if($("#cart").hasClass("open")){
            $("#cart").removeClass("open");
            $("#cart .top p a").html('<i class="icon icon-down-open"></i>' + 'hide');
            e.preventDefault();
        } else {
            $("#cart").addClass("open");
            $("#cart .top p a").html('<i class="icon icon-up-open"></i>' + 'show');
        }
    });
    
    
    
    

    
/*
    // contents page change without reloading
    
    $(document).on('click','nav .mainmenu a', function(event){
        history.pushState(null, null, event.target.href);
        $('#contents').load(event.target.href + '#contents>.content ');
    })
    
    $(window).on('popstate',function(event){
        $("#contents").load(location.href + ' #contents>.content ');
    });
*/

    
    


}); // the end


