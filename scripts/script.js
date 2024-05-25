
let full_price = 0
let buyf = false;
const btn = document.getElementById('btn')
const price = document.querySelector('.price')
let p = price.innerText
const shop_price = document.querySelector('.shop_price')
let sp = Int(shop_price.innerText)
function buttonClick()
{
	if (buyf == false)
{
	btn.style.background = 'green';
	btn.innerHTML = 'купленно';
	buyf = 1;
	del_price()
}
if (buyf == true)
{
	btn.style.background = 'gray';
	btn.innerHTML = 'прикупить';
	buyf = 0;
	add_price()
}
}
function add_price()
{
	console.log("+")
	price.innerHTML = parseInt(full_price + sp)
}
function del_price()
{
	console.log("-")
	price.innerHTML = parseInt(full_price - sp)
}
