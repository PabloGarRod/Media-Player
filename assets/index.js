import MediaPlayer from './MediaPlayer.js';

const video = document.querySelector("video");
const player = new MediaPlayer({element:video});  //con esta lina creamos una nueva instancia de MediaPlayer

const button = document.querySelector("button");
button.onclick = () => player.togglePlay();