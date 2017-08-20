(function(){
	var Util = (function(){
		var prefix = 'html5_reader_';
		var StorageGetter = function(key){
			return localStorage.getItem(prefix + key);
		}
		var StorageSetter = function(key,val){
			return localStorage.setItem(prefix + key,val);
		}
		return{
			StorageGetter:StorageGetter,
			StorageSetter:StorageSetter
		}
	})();
	var Dom = {
		top_nav : $('#top-nav'),
		bottom_nav : $('.bottom_nav'),
		font_container : $('.font-container'),
		font_button : $('#font-button')
	}
	var Win = $(window);
	var Doc = $(document);
	var RootContainer = $('#fiction_container');
	var initFontSize = Util.StorageGetter('font_size');
	initFontSize = parseInt(initFontSize);
	if(!initFontSize){
		initFontSize = 14;
	}
	RootContainer.css('font-size',initFontSize);

	function main(){
		//todo 整个项目的入口函数
		EventHandler();
	}

	function ReaderModel(){
		//tode 实现和阅读器相关的数据交互的方法
	}
	
	function ReaderBaseFrame(){
		//todo 渲染基本的UI结构
	}

	function EventHandler(){
		//todo 交互的事件绑定
		$('#action_mid').click(function(){
			if(Dom.top_nav.css('display') == 'none'){
				Dom.bottom_nav.show();
				Dom.top_nav.show();
			}else{
				Dom.bottom_nav.hide();
				Dom.top_nav.hide();
				Dom.font_container.hide();
			}
		});

		Dom.font_button.click(function(){
			if(Dom.font_container.css('display') == 'none'){
				Dom.font_container.show();
				Dom.font_button.addClass('current');
			}else{
				Dom.font_container.hide();
				Dom.font_button.removeClass('current');
			}
		});

		$('#night-button').click(function(){
			//TODO 触发背景切换的事件
		});
		//放大缩小字体
		$('#large-font').click(function(){
			if(initFontSize > 20){
				return;
			}
			initFontSize+=1;
			RootContainer.css('font-size',initFontSize);
			Util.StorageSetter('font_size',initFontSize);
		});

		$('#small-font').click(function(){
			if(initFontSize < 12){
				return;
			}
			initFontSize-=1;
			RootContainer.css('font-size',initFontSize);
			Util.StorageSetter('font_size',initFontSize);
		});
		//屏幕滑动隐藏面板
		Win.scroll(function(){
			Dom.bottom_nav.hide();
			Dom.top_nav.hide();
			Dom.font_container.hide();
		});
	}
	
	main();
})();