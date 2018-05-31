$(function() {
// 02
$("article").eq(3)
		.children(".article__body")
			.children(".article__socialnetworks")
				.children().last()
					.children()
						.text('Pinterest')
							.attr("href", "https://www.pinterest.cl/")


$('a[href^="#"]').on("click", function(e){
	e.preventDefault();
})

$(".header__main")
		.children("h2").css("font-size", "5em")

})