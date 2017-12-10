$(document).ready(function(){ 
    
	/* on load */
$("nav").stop().animate({left:'0'},1000); 
$("#contents .subday, .subinfo").stop().animate({'opacity':'1'},2500);
$("#contents .subday img").stop().animate({'margin-left':'0px'},1000); 
$("#contents .subday p span").stop().animate({'margin-top':'0px'},1000); 
$("#contents h2").stop().animate({'top':'15%','opacity':'1'},1800,'easeOutBounce');
   
    
    /*scroll*/
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
        
    /* show contents when shown top_of_content*/
        $(".video").each(function(i){
           var top_of_content = $(this).offset().top;
           var bottom_of_window = scroll + $(window).height();
            
            if( bottom_of_window >= top_of_content){
                $(this).stop().animate({'opacity':'1'},1500); $(this).children("span").stop().animate({right:"10%"},2000,"easeOutBounce");
                    
            } else if( bottom_of_window <= top_of_content){
                $(this).stop().animate({'opacity':'0'},1000); $(this).children("span").stop().animate({right:"-20%"},1000);
            }
        });     
        
        
    }); /*scroll event end*/
    
    
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















