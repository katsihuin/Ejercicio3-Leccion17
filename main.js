
(function(){

    var formulario = document.getElementById("formulario")[0],
        elementos = formulario.elements,
        boton = document.getElementById("btn");

    var validarMonkeyA = function(e){
        if (formulario.monkeyA.checked == true ){
        } else {
            alert ("Completa el campo Monkey");
            e.preventDefault();
        }
    };
    var validarMonkeyB = function(e){
        if (formulario.monkeyB.checked == true ){
        } else {
            alert ("Completa el campo Monkey");
            e.preventDefault();
        }
    };
    var validarSmile = function(e){
        if (formulario.smile[0].checked == true || formulario.smile[1].checked == false){
            img.innerHTML = '<img src="img/monkeyHappy.jpg">';
        } else {
            img.innerHTML = '<img src="img/monkeySad.jpg">';
            alert("Completa el campo Smile");
            e.preventDefault();
        }
    }

    var validar = function(e){
        validarMonkeyA(e);
        validarMonkeyB(e);
        validarSmile(e;)
    };

    formulario.addEventListener("submit", validar);

}())
function monkeyA()
{
    var img = document.getElementById("img_mono_b");
    var monkeyA = document.getElementById("monkeyA");

    if(monkeyA.checked){
        img.innerHTML = '<img src="img/monkeyHappy.jpg">';
    }
    else{
        img.innerHTML = '<img src="img/monkeySad.jpg">';
    }
}
function monkeyB()
{
    var img = document.getElementById("img_mono_a");
    var monkeyB = document.getElementById("monkeyB");

    if(monkeyB.checked)
    {
        img.innerHTML = '<img src="img/monkeyHappy.jpg">';
    }else{
        img.innerHTML = '<img src="img/monkeySad.jpg">';
    }
}
function consultar()
{
    var monkeyA = document.getElementById("monkeyA").checked;
    var monkeyB = document.getElementById("monkeyB").checked;
    var aSmile = document.getElementById("si").checked;
    var bSmile = document.getElementById("no").checked;
    var salida = document.getElementById("salida");

    if(monkeyA == monkeyB && aSmile == bSmile)
    {
        //problemas
        salida.innerHTML = "1";
    }else{
        //NO hay problema
        salida.innerHTML = "0";
    }
}

