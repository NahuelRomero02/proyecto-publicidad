let values = []
let form=document.getElementById("form")
var enviarButton = document.getElementById("enviarButton");

enviarButton.onclick = function () {
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("surname").value;
    var city = document.getElementById("city").value;
    var input1 = document.getElementById("inp-1").checked;
    var input2 = document.getElementById("inp-2").checked;
    var input3 = document.getElementById("inp-3").checked;
    var textTarea=document.getElementById("mot").value;
    var metodoPago = document.getElementById("metodoPago").value;
    form.reset()
    values.push(nombre,apellido,city,input1,input2,input3,textTarea,metodoPago)
    console.log(values)
};

