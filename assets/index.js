import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const player = new MediaPlayer({element: video, plugins:[new AutoPlay()] });  //con esta linea creamos una nueva instancia de MediaPlayer

const button = document.querySelector("button");
const buttonMute = document.getElementById("mute");
button.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();