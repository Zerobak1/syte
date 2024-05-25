document.addEventListener('DOMContentLoaded',function () {
	document.querySelector('.btn_menu').addEventListener('click',function () {
		document.querySelector('.menu').classList.toggle('is_active')
	});
});