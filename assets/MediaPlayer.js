function MediaPlayer(config){
    this.media = config.element 
    /*con esta linea declaramos que el valor de media es el atributo que se le pasa a MediaPlayer al instanciarlo
    En este caso el atributo que se le pasa al crear la instancia player es video, por lo que en player 
    this.media siempre será igual que video, pues es el argumento que se le ha pasado*/
}


MediaPlayer.prototype.play = function() {   //con esto definimos la funcion play de la clase MediaPlayer
    this.media.play();
  } 

MediaPlayer.prototype.pause = function(){ //igual que la anterior función pero para la funcion pause
    this.media.pause();
  }

  
  /* La siguiente funcion comprueba si el video está pausado
  a través de la propiedad paused, en funcion de si devuelve true o false
  ejecutará play o pause.*/  
  
  MediaPlayer.prototype.togglePlay = function(){
      if(this.media.paused){
          this.play();
        }else{
        this.pause();
        }
    }    

export default MediaPlayer;