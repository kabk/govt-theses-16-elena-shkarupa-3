
$(function(doc){


$('p').html(function (i, html) {
var chars = $.trim(html).split("");
return '<span class="alpha">' + chars.join('</span><span class="alpha">') + '</span>';
 });


$("span").hover(function(e) {
	$(this).attr("class", "beta");
	}, function(e){
		$(this).attr("class", "alpha")
	});

});