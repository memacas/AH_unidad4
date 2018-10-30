var calculadora = function(){
  var teclas = document.querySelectorAll(".tecla");
  var tecla_actual;
  var en_memoria = "";
  var ultimo_numero = "";
  var operacion = "";
  var resultado;

  function init(){
    for(var x=0; x<teclas.length; x++){
      //Agregamos los listener a las teclas de clase "tecla"
        teclas[x].addEventListener("click", obtener_tecla);
        teclas[x].addEventListener("mousedown", function(){this.classList.add("seleccionada");
      });
    }
	}

  function ejecutar_operacion(){
    alert("en_memoria ejecuta: " + en_memoria);
    if (!isNaN(resultado) && resultado.length > 0){
      if (!isNaN(en_memoria) && operacion.length > 0){
        en_memoria = parseFloat(en_memoria);
        resultado = parseFloat(resultado);
        switch (operacion) {
          case "mas":
            resultado = en_memoria + parseFloat(ultimo_numero);
            break;
          case "menos":
            resultado = en_memoria - parseFloat(ultimo_numero);
            break;
            case "por":
              resultado = en_memoria * parseFloat(ultimo_numero);
              break;
              case "dividido":
                resultado = en_memoria / parseFloat(ultimo_numero);
                //alert(resultado);
                break;
          default:
        }
        resultado = resultado + "";
        alert(resultado.length);
        if (resultado.length > 8) resultado = resultado.substr(0,8);
        //resultado = resultado;
        en_memoria = resultado;
      }
    }
  }

  function obtener_tecla(){
    tecla_actual = this;
    setTimeout(function(){tecla_actual.classList.remove("seleccionada"); }, 400);
    resultado = document.querySelector("#display").textContent;
    var tecla_presionada = tecla_actual.id;

    //alert(resultado + " / r: " + !isNaN(tecla_presionada) + "  " + tecla_presionada);

    if (!isNaN(tecla_presionada) && resultado.length < 8){
      //alert(resultado);
      if (resultado == "0"){
        if (tecla_presionada != "0"){
          if (resultado.indexOf(".") == -1){
            resultado  = tecla_presionada;
          }
          else{
            resultado  = resultado + tecla_presionada;
          }
        }
      }else{
        //alert(en_memoria);
        resultado  = resultado + tecla_presionada;
      }
      ultimo_numero = resultado;
    }else{
      switch (tecla_presionada) {
        case "on":
          resultado  = "0";
          en_memoria = "";
          operacion = "";
          break;
        case "punto":
          if (resultado.indexOf(".") == -1 &&  resultado.length < 8){
            resultado += ".";
          }
          break;
        case "sign":
          if (resultado.indexOf("-") == -1){
            if (resultado != "0")
              resultado = "-" + resultado;
          }
          else{
            resultado = resultado.replace("-" ,"");
          }
          break;
        case "mas":
          en_memoria = resultado;
          //alert("en_memoria mas: " + en_memoria);
          resultado = "";
          operacion = "mas";
          break;
        case "menos":
            en_memoria = resultado;
            //alert("en_memoria mas: " + en_memoria);
            resultado = "";
            operacion = "menos";
            break;
            case "por":
                en_memoria = resultado;
                //alert("en_memoria mas: " + en_memoria);
                resultado = "";
                operacion = "por";
                break;
                case "dividido":
                    en_memoria = resultado;
                    //alert("en_memoria mas: " + en_memoria);
                    resultado = "";
                    operacion = "dividido";
                    break;
        case "igual":
          //alert("en_memoria igual: " + en_memoria);
          ejecutar_operacion();
          //operacion = "";
          break;
        default:
      }
    }
    document.querySelector("#display").innerHTML = resultado;
  }
  //Inicializamos por default la function init()
  init();
}

var MiCalculadora = new calculadora();
