//Array de datos para calcular el deficit/superavit calórico
let datos = [];

//Instanciamos
let modoNoche = document.getElementById("modoNoche");
let header = document.getElementById("header");
let main = document.getElementById("main");
let nombre = document.getElementById("nombre");
let peso = document.getElementById("peso");
let alturaCm = document.getElementById("alturaCm");
let edad = document.getElementById("edad");
let sexo = document.getElementById("sexo");
let btnIngresoDatos = document.getElementById("btnIngresoDatos");
let resultados = document.getElementById("resultados");
let calculoResultado = document.getElementById("calculoResultado");
let pantallaObjeto = document.getElementById("pantallaObjeto");
let btnDeficit = document.getElementById("btnDeficit");
let btnSuperavit = document.getElementById("btnSuperavit");
let btnVolver = document.getElementById("btnVolver");
let resultadoCalculadora = document.getElementById("resultadoCalculadora");
let footer = document.getElementById("footer");

//Modo Noche
modoNoche.addEventListener("click", () => {
    header.classList.toggle("modoNoche");
    footer.classList.toggle("modoNoche");
    main.classList.toggle("modoNoche");
    resultados.classList.toggle("modoNoche");
});

//Btn para el ingreso de datos
btnIngresoDatos.addEventListener("click", () => {
    if (
        nombre.value == "" ||
        peso.value == "" ||
        alturaCm.value == "" ||
        edad.value == "" ||
        sexo.value == ""
    ) {
        alert("por favor, completá todos los campos con datos");
    } else {
        //armo el objeto
        let dato = {
            nombre: nombre.value,
            peso: parseFloat(peso.value),
            alturaCm: parseInt(alturaCm.value),
            edad: parseInt(edad.value),
            sexo: sexo.value,
        };
        //pantalla de resultados pasa de none a flex
        //main pasa de flex a none
        //se envian los datos al array
        resultados.style.display = "flex";
        main.style.display = "none";
        datos.push(dato);
        console.log(typeof dato.peso, typeof dato.alturaCm, typeof dato.edad);
        console.log("datos ingresados");
        nombre.value = "";
        peso.value = "";
        alturaCm.value = "";
        edad.value = "";
        sexo.value = "";
        cards();
    }
});

let cards = () => {
    pantallaObjeto.innerHTML = " ";
    let modelo = "";
    datos.map((dato) => {
        modelo = `<div class='cards'>
            <h3>${dato.nombre}</h3>
            <h4>${dato.peso} kg</h4>
            <h4>${dato.alturaCm} cm</h4>
            <h4>${dato.edad}</h4>
            <h4>${dato.sexo}</h4>
            <button id="btnDeficit" onclick="deficitCalorico(${dato.peso})">Deficit</button>
            <button id="btnSuperavit" onclick="superavitCalorico()">Superavit</button>
            <div>
            <p id="resultadoCalculadora" class="resultadoCalculadora"></p>
            </div>
        </div>`;
        pantallaObjeto.innerHTML += modelo;
    });
    //localStorage como cadena string
    localStorage.setItem("localGuardado", JSON.stringify(datos));
};

//Const deficit calórico
const deficitCalorico = (peso) => {
    // Convierte el peso a número (si no lo es ya)
    const pesoNumerico = parseFloat(peso);

    // Verifica si la conversión fue exitosa y si el valor es mayor que cero
    if (!isNaN(pesoNumerico) && pesoNumerico > 0) {
        // Realiza el cálculo de proteína diaria
        const proteinaDiaria = pesoNumerico * 1.6;

        // Muestra el resultado en pantalla con resultadoCalculadora instanciado
        resultadoCalculadora.innerHTML +=
            "Tu cálculo de proteína es de " +
            proteinaDiaria.toFixed(0) +
            " gramos diarios";
        console.log(
            "Tu cálculo de proteína es de " +
                proteinaDiaria.toFixed(0) +
                " gramos diarios"
        );
    } else {
        console.log(
            "El valor de peso no es un número válido o es menor o igual a cero."
        );
    }
};

//Const btn superavit onclick
const superavitCalorico = () => {
    alert("HOLA SOY SUPERAVIT");
};

//Evento sobre btn volver a pantalla inicial
btnVolver.addEventListener("click", () => {
    main.style.display = "flex";
    resultados.style.display = "none";
});

//recupero el localstorage con un get y lo convierto en un objeto nuevamente
//A esto le vamos a poner una frase motivsadora o algo así
let dataRecuperada = localStorage.getItem("localGuardado");
dataRecuperada = JSON.parse(dataRecuperada);
if (dataRecuperada.length > 0) {
    datos = dataRecuperada;
}
console.log("data recuperada:", dataRecuperada.length);

//Const para déficit calórico
// const calculoDeficit = () => {
//     if (sexo.value == "femenino") {
//         calculoResultado.innerHTML =
//             // `<h3>Hola ${nombre.value}</h3>
//             // <p>Tu calculo calórico para Deficit dio:</p>
//             // <p>1700 Calorias</p>
//             // <p>Tu consumo de proteina diaraia debe ser de :</p>
//             // <p>128gr</p>`;
//             "Hola " +
//             nombre.value +
//             "Tu consumo de calorías diarias debe ser de: " +
//             (
//                 447.593 +
//                 9.247 * peso.value +
//                 3.098 * alturaCm.value -
//                 4.33 * edad.value
//             ).toFixed(2) +
//             " y el cálculo de proteinas diarias es de: " +
//             peso.value * 1.6;
//     } else {
//         calculoResultado.innerHTML =
//             "Hola " +
//             nombre.value +
//             " Tu consumo de calorías diarias debe ser de: " +
//             (
//                 88.362 +
//                 13.397 * peso.value +
//                 4.799 * alturaCm.value -
//                 5.677 * edad.value
//             ).toFixed(2) +
//             " y el cálculo de proteinas diarias es de: " +
//             peso.value * 1.6;
//     }
// };

// //Btn para el calculo de superavit
// btnSuperavit.addEventListener("click", () => {
//     if (
//         nombre.value == "" ||
//         peso.value == "" ||
//         alturaCm.value == "" ||
//         edad.value == "" ||
//         sexo.value == ""
//     ) {
//         alert("por favor, completá todos los campos");
//     } else {
//         resultados.style.display = "flex";
//         main.style.display = "none";
//         calculoSuperavit();
//     }
// });

// //Const para superávit calórico
// const calculoSuperavit = () => {
//     if (sexo.value == "femenino") {
//         calculoResultado.innerHTML =
//             "Hola " +
//             nombre.value +
//             " Tu consumo de calorías diarias debe ser de: " +
//             (
//                 447.593 +
//                 9.247 * peso.value +
//                 3.098 * alturaCm.value -
//                 4.33 * edad.value +
//                 500
//             ).toFixed(2) +
//             " y el cálculo de proteinas diarias es de: " +
//             peso.value * 1.6;
//     } else {
//         calculoResultado.innerHTML =
//             "Hola " +
//             nombre.value +
//             " Tu consumo de calorías diarias debe ser de: " +
//             (
//                 88.362 +
//                 13.397 * peso.value +
//                 4.799 * alturaCm.value -
//                 5.677 * edad.value +
//                 500
//             ).toFixed(2) +
//             " y el cálculo de proteinas diarias es de: " +
//             peso.value * 1.6;
//     }
// };
