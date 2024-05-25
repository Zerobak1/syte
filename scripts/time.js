
function current_time(){
	let date = new Date()
	let hour = date.getHours()
	let min = date.getMinutes()
	let sec = date.getSeconds()
	const clock = document.querySelector('.time')
	clock.innerHTML = hour + ':' + min + ':'+ sec
	setTimeout(current_time,1000)
}
current_time()