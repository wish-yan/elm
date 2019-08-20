(function (doc,win) {
	var docEle = doc.documentElement,
			sizeEv='orientationchange' in window? 'orientationchange':'resize',
			changeSize = function(){
				console.log(docEle.clientWidth);
				var ClientWidth= docEle.clientWidth;
				if (!ClientWidth) {
					return
				}
				docEle.style.fontSize = 20 * (ClientWidth / 320) + 'px';
			}
			if (!doc.addEventListener) {
				return
			}
			win.addEventListener(sizeEv, changeSize, false);
    	doc.addEventListener('DOMContentLoaded', changeSize, false);
})(document,window)
