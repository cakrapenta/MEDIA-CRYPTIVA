function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6H8xymAIbvi":
        Script1();
        break;
      case "6pA0k0BLx3n":
        Script2();
        break;
      case "6mrdKS4Ugbi":
        Script3();
        break;
      case "5YeRUTj0B0Y":
        Script4();
        break;
      case "6Gjhn9HxsaF":
        Script5();
        break;
      case "5gf5TRsQnQx":
        Script6();
        break;
      case "5vEMPiCULDK":
        Script7();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src= "AUDIO EKOSISTEM.mp3";
audio.load( );
audio.play( );
audio.volume = 0.4;
}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.0;
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.2;
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.4;
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.6;
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.8;
}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.volume= 1.0;
}

