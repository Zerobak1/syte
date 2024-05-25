const header = document.querySelector('.container_header')
const main = document.querySelector('.main')
const itcSlider = document.querySelector('.itc-slider')
const aBody = document.querySelectorAll('.accordion__body')
const maps = document.querySelector('.maps')
const footer = document.querySelector('.footer')
// const videow = document.querySelector('.video')

function choiseDark()
{
  
main.style.filter = 'invert(100%)'
main.style.transition = '3s'
itcSlider.style.filter = 'invert(100%)'
itcSlider.style.transition = '3s'
maps.style.filter = 'invert(100%)'
maps.style.transition = '3s'
footer.style.filter = 'invert(100%)'
footer.style.transition = '3s'
// videow.style.filter = 'invert(0%)'
// videow.style.transition = '3s'
document.querySelector('.body').stile.background_color('black')
}

function choiceLight()
{
header.style.filter = 'invert(0%)'
header.style.transition = '3s'
main.style.filter = 'invert(0%)'
main.style.transition = '3s'
itcSlider.style.filter = 'invert(0%)'
itcSlider.style.transition = '3s'
maps.style.filter = 'invert(0%)'
maps.style.transition = '3s'
footer.style.filter = 'invert(0%)'
footer.style.transition = '3s'

document.querySelector('.body').stile.background_color('white')
}

