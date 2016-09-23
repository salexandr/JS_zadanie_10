$(function(){	
	
	$('.arrow').hover(
   function(){
                $(this).children('.submenu').stop().slideDown()(700);
            },
            function(){
                $(this).children('.submenu').stop().slideUp()(700);
            }
        );
	$("select").selectbox();	
})();


