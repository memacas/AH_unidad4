var calculadora = function(){
  var teclas = document.querySelectorAll(".tecla");
	function init(){
    for(var x=0; x<teclas.length; x++){
      //Agregamos los listener a las teclas de clase "tecla"
        teclas[x].addEventListener("click", obtener_tecla);
        teclas[x].addEventListener("mousedown", function(){this.style = "transform:scale(0.5,0.5)";});
        teclas[x].addEventListener("mouseup", function(){this.style = "transform:scale(1,1)";});
    }
	}

  function obtener_tecla(){
    var resultado = document.querySelector("#display").textContent;
    var tecla_presionada = this.id;

    if (!isNaN(tecla_presionada)){
        if (resultado == 0 && tecla_presionada != 0){
          //alert(tecla_presionada);
          document.querySelector("#display").innerHTML  = tecla_presionada;
        }else{
          document.querySelector("#display").innerHTML  = parseFloat(tecla_presionada) + resultado;
        }
    }else{
      switch (tecla_presionada) {
        case "on":
          document.querySelector("#display").innerHTML  = "0";
          break;
        default:
      }
    }
  }
  //Inicializamos por default la function init()
  init();
}

var MiCalculadora = new calculadora();
