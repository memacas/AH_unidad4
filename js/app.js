var calculadora = function(){
  var teclas = document.querySelectorAll(".tecla");
  var en_memoria, operacion_anterior, mostrar_resultado, tecla_actual, tecla_presionada, info_pantalla, ultima_operacion, ultimo_numero_digitado, operacion, resultado;
  var operaciones_validas = ["mas" ,"menos", "por", "dividido"];
  function init(){
    for(var x=0; x<teclas.length; x++){
      //Agregamos los listener a las teclas de clase "tecla"
        teclas[x].addEventListener("click", obtenerTecla);
        teclas[x].addEventListener("mousedown", function(){this.classList.add("seleccionada");
      });
    }
    inicializacionVariables();
  }

  function inicializacionVariables(){
    en_memoria = ""; operacion_anterior = ""; mostrar_resultado = false; resultado  = ""; info_pantalla = "0"; operacion = ""; ultimo_numero_digitado = "0";
  }

  function calcular(){
    //alert("operacion valida " + ultimo_numero_digitado);
    info_pantalla = "";
    ultimo_numero_digitado = parseFloat(ultimo_numero_digitado);

    if (operacion == ""){
      //resultado = ultimo_numero_digitado;
    }else{
    }

    //alert("antes: resultado: " + resultado + ", ultimo_numero_digitado: " + ultimo_numero_digitado);

    if (resultado != ""){
      switch (operacion) {
        case "mas":
          resultado += ultimo_numero_digitado;
          break;
        case "menos":
          resultado -= ultimo_numero_digitado;
          break;
          case "por":
            resultado = resultado * ultimo_numero_digitado;
            break;
            case "dividido":
              resultado = resultado / ultimo_numero_digitado;
              //alert(resultado);
              break;
        default:
      }
    }
    else{
      resultado = ultimo_numero_digitado;
    }

    //alert("DESPUES: resultado: " + resultado + ", ultimo_numero_digitado: " + ultimo_numero_digitado);

  }

  function obtenerTecla(){
    tecla_actual = this;
    setTimeout(function(){tecla_actual.classList.remove("seleccionada"); }, 400);
    tecla_presionada = tecla_actual.id;

    if (!isNaN(tecla_presionada)){
      //Verifica si la tecla presionada es un numero
      info_pantalla = document.querySelector("#display").textContent;
      //alert("tecla_presionada: " + tecla_presionada + "    " + !isNaN(tecla_presionada) + " && " + info_pantalla.length + "<"+ 8);
      if (info_pantalla.length < 8){
        if (mostrar_resultado){ info_pantalla = "";}
        if (info_pantalla == "0"){
          if (tecla_presionada != "0"){
            if (info_pantalla.indexOf(".") == -1) info_pantalla  = tecla_presionada;
          }
        }else{
          //alert("entra aqi");
           info_pantalla  = info_pantalla + tecla_presionada;
         }
        ultimo_numero_digitado = info_pantalla;
    }
    }else{
      //La tecla presionada es una operacion
      switch (tecla_presionada) {
        case "on":
          inicializacionVariables();
          break;
        case "punto":
          if (info_pantalla.indexOf(".") == -1 &&  info_pantalla.length < 8){
            info_pantalla += ".";
          }
          break;
        case "sign":
          if (info_pantalla.indexOf("-") == -1)
            if (info_pantalla != "0") info_pantalla = "-" + info_pantalla;
          else info_pantalla = info_pantalla.replace("-" ,"");
          break;
        case "igual":
          //alert("operacion: " +operacion);
          if (operacion == "" && operacion_anterior != ""){
            operacion = operacion_anterior;
            ultimo_numero_digitado = en_memoria;
            resultado = parseFloat(document.querySelector("#display").textContent);
            //alert("dentro de && resultado: " + resultado + ", ultimo_numero_digitado: " + ultimo_numero_digitado + ", operacion: " + operacion);
          }
          if (operacion != ""){ calcular();
            operacion = "";
            mostrar_resultado = true;
            info_pantalla = resultado;
            if ((resultado + "").length >= 8)
              info_pantalla = (resultado + "").substr(0,8);

            en_memoria = ultimo_numero_digitado;
            ultimo_numero_digitado = resultado;
            resultado = "";
          }
          break;
        default:
          if (operaciones_validas.indexOf(tecla_presionada) > -1){
            if (operacion == "") operacion = tecla_presionada;
            calcular();
            operacion = tecla_presionada;
            mostrar_resultado = false;
            operacion_anterior = operacion;

          }
      }
    }
    document.querySelector("#display").innerHTML = info_pantalla;
  }
  //Inicializamos por default la function init()
  init();
}

var MiCalculadora = new calculadora();
