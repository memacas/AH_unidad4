var calculadora = function(){
  var teclas = document.querySelectorAll(".tecla");
	function init(){
    for(var x=0; x<teclas.length; x++){
        teclas[x].addEventListener("click", obtener_tecla);
        teclas[x].addEventListener("mousedown", function(){this.style = "transform:scale(0.5,0.5)";});
        teclas[x].addEventListener("mouseup", function(){this.style = "transform:scale(1,1)";});
    }
	}

  function obtener_tecla(){
    var tecla_presionada = this.id;
    switch (tecla_presionada) {
      case "on":
        document.querySelector("#display").innerHTML  = "";
        break;
      default:
    }
  }
  init();
}

var MiCalculadora = new calculadora();
