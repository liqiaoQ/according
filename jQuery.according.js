;(function(){
	$.fn.extend({
		"acc":function(opt){
			var Default = {"start":0};
			var option = $.extend({},Default,opt);
			this.each(function(){
				var obj = $(this);
				init();
				function init(){
					obj.children(".content").hide();
					obj.children(":header").eq(option.start).addClass("active");
					obj.children(".content").eq(option.start).show();
				}
				obj.children(":header").each(function(){
					$(this).bind("click",setchange);
				})
				function setchange(){
					var ind = obj.children(":header").index($(this));
					obj.children(".content").slideUp();
					obj.children(":header.active").removeClass("active");
					obj.children(".content").eq(ind).slideDown();
					obj.children(":header").eq(ind).addClass("active");
				}
			})
		}
	})
})(jQuery)

