var currentPage = $('#currentPage');
var page = ["Home", "Photos", "Swatches", 
			"Layered Looks", "Tutorials", 
			"Products", "About"]
var tl = new TimelineMax();
$('#menu-icon').click(function(){
	tl
		.to($('#pageList'), .5, {autoAlpha:1})
		.to(this, 2, {x:1150, rotation:720, autoAlpha:0})
		.staggerFrom($('li'), 0.2, {autoAlpha:0}, 0.2);
});

$(document).ready(function(){
	tl
		.to($('#left-foot'), 1, {x:50, y:-10})
		.to($('#left-foot'), 1, {x:100, y:0}, .2)
		.to($('#right-foot'), 1, {x:50, y:-10}, .8)
		.to($('#right-foot'), 1, {x:150, y:0}, 1)
		.to($('#left-foot'), 1, {x:150, y:-10})
		.to($('#left-foot'), 1, {x:200, y:0}, '-0.2')
		.to($('#right-foot'), 1, {x:200, y:-10})
		.to($('#right-foot'), 1, {x:250, y:0});
});