import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.ts';

const video = document.querySelector("video");
const player = new MediaPlayer({
    element: video, 
    plugins:[
        new AutoPlay(),
        new AutoPause()
    ], 
});  //con esta linea creamos una nueva instancia de MediaPlayer

const button = document.querySelector("button");
const buttonMute = document.getElementById("mute");
button.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error=>{
        console.log(error.message);
    })
}