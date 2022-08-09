class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  container: HTMLElement;
  constructor(config) {
    this.media = config.element;
    /*con esta linea declaramos que el valor de media es el atributo que se le pasa a MediaPlayer al instanciarlo
    En este caso el atributo que se le pasa al crear la instancia player es video, por lo que en player
    this.media siempre será igual que video, pues es el argumento que se le ha pasado*/
    this.plugins = config.plugins || [];
    this.initPlayer();
    this.initPlugins();
  }

  initPlayer(){
    this.container = document.createElement('div')
    this.container.style.position = 'relative'
    this.media.parentNode.insertBefore(this.container, this.media)
    this.container.appendChild(this.media)
  }

  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  /* La siguiente funcion comprueba si el video está pausado
    a través de la propiedad paused, en funcion de si devuelve true o false
    ejecutará play o pause.*/
  togglePlay() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }
  mute() {
    this.media.muted = true;
  }
  unmute() {
    this.media.muted = false;
  }
  toggleMute() {
    if (this.media.muted) {
      this.unmute();
    } else {
      this.mute();
    }
  }
}




  




export default MediaPlayer;