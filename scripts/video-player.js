const btn_pause = document.querySelector('#video_btn')
const vid = document.querySelector('#MV')
const so = document.querySelector('#sound')
const playlist = ["vid1","vid2","vid3"]
const src = document.querySelector('.video__src')
let number = 0
let disc_list = ["насколько мощные компы у ютуберов?","обзор тёрки от apple","обзор ipad"]
let title_list = ["компы ютуберов","apple mac pro","apple ipad pro"]
const title = document.querySelector('#video_title')
const disc = document.querySelector('#video_text')
let mute = document.querySelector('#icon_mute')
let pause = document.querySelector('#icon_pause')
console.log(btn_pause , vid)
function play(){
    console.log("eeeeeeeeeeeeeeeeeeeeeeeeeee")
    if (vid.paused) {
        vid.play()
        pause.src="https://cdn.lordicon.com/qvyppzqz.json"
        
    } else {
        vid.pause()
        pause.src="https://cdn.lordicon.com/aklfruoc.json"
        
    } 

}

function sound() {
    
     if (vid.muted) {
         vid.muted = false
        mute.src="https://cdn.lordicon.com/okasasci.json"
        
     } else {
         vid.muted = true
         mute.src="https://cdn.lordicon.com/qaexljue.json"
        
     } 
}
function prev() {
number--

 if (number < 0) {
     number = playlist.length -1
 }
vid.src = `video/${playlist[number]}.mp4` 
 title.innerText = title_list[number]
 disc.innerText = disc_list[number]
console.log(number)
}
function next() {
number++

  if (number > playlist.length - 1) {
number = 0
}
vid.src = `video/${playlist[number]}.mp4`
title.innerText = title_list[number]
disc.innerText = disc_list[number]
    console.log(number)
}
console.log(playlist.length)