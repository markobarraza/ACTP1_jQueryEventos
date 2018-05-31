$(function(){

	$(".social__like").on("click", function(event){
		event.preventDefault(); //Previene que al hacer click, la img se abra
		$(this).toggleClass("social__like--clicked");
	})

	$(".social__link").on("click", function(event){
		event.stopPropagation();
		event.preventDefault();
		alert($(this).parent().parent().siblings(".meals__img").attr("alt"));
	})


})