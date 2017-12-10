$(document).ready(function(){       
    
    /* language */
  $("header .menu li a.lang").click(function(){
      if($(this).hasClass("selected")){  
      } else{
          $("header .menu li a.lang").removeClass("selected");
          $(this).addClass("selected")
          $(this).attr("href","javascript:void(0)");
      }
  });  
    

    /* bottom li*/
    $("#bottom li").each(function(i){
       $(this).delay(200*i).animate({marginTop:'5%'},700); 
    });

}); // the end















