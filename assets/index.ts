import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

const video = document.querySelector("video");
const player = new MediaPlayer({
    element: video, 
    plugins:[
        new AutoPlay(),
        new AutoPause()
    ], 
});  //con esta linea creamos una nueva instancia de MediaPlayer

const button: HTMLElement = document.querySelector("button");
const buttonMute: HTMLElement = document.getElementById("mute");
button.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error=>{
        console.log(error.message);
    })
}