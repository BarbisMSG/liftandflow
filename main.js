//Instanciamos
let main = document.getElementById("main");
let nombre = document.getElementById("nombre");
let peso = document.getElementById("peso");
let alturaCm = document.getElementById("alturaCm");
let edad = document.getElementById("edad");
let sexo = document.getElementById("sexo");
let btnDeficit = document.getElementById("btnDeficit");
let btnSuperavit = document.getElementById("btnSuperavit");
let resultados = document.getElementById("resultados");
let calculoResultado = document.getElementById("calculoResultado");
let calculoCalorico = document.getElementById("calculoCalorico");
let cardResultado = document.getElementById("cardResultado");

//Btn para el calculo de deficit
btnDeficit.addEventListener("click", () => {
    if (
        nombre.value == "" ||
        peso.value == "" ||
        alturaCm.value == "" ||
        edad.value == "" ||
        sexo.value == ""
    ) {
        alert("por favor, completá todos los campos");
    } else {
        resultados.style.display = "flex";
        main.style.display = "none";
        calculoDeficit();
    }
});

const tmbCalculo = () => {
    if (sexo.value == "femenino") {
        alert("HOLA");
    }
};

//Const para déficit calórico
const calculoDeficit = () => {
    if (sexo.value == "femenino") {
        calculoResultado.innerHTML =
            // `<h3>Hola ${nombre.value}</h3>
            // <p>Tu calculo calórico para Deficit dio:</p>
            // <p>1700 Calorias</p>
            // <p>Tu consumo de proteina diaraia debe ser de :</p>
            // <p>128gr</p>`;
            "Hola " +
            nombre.value +
            "Tu consumo de calorías diarias debe ser de: " +
            (
                447.593 +
                9.247 * peso.value +
                3.098 * alturaCm.value -
                4.33 * edad.value
            ).toFixed(2) +
            " y el cálculo de proteinas diarias es de: " +
            peso.value * 1.6;
    } else {
        calculoResultado.innerHTML =
            "Hola " +
            nombre.value +
            " Tu consumo de calorías diarias debe ser de: " +
            (
                88.362 +
                13.397 * peso.value +
                4.799 * alturaCm.value -
                5.677 * edad.value
            ).toFixed(2) +
            " y el cálculo de proteinas diarias es de: " +
            peso.value * 1.6;
    }
};

//Btn para el calculo de superavit
btnSuperavit.addEventListener("click", () => {
    if (
        nombre.value == "" ||
        peso.value == "" ||
        alturaCm.value == "" ||
        edad.value == "" ||
        sexo.value == ""
    ) {
        alert("por favor, completá todos los campos");
    } else {
        resultados.style.display = "flex";
        main.style.display = "none";
        calculoSuperavit();
    }
});

//Const para superávit calórico
const calculoSuperavit = () => {
    if (sexo.value == "femenino") {
        calculoResultado.innerHTML =
            "Hola " +
            nombre.value +
            " Tu consumo de calorías diarias debe ser de: " +
            (
                447.593 +
                9.247 * peso.value +
                3.098 * alturaCm.value -
                4.33 * edad.value +
                500
            ).toFixed(2) +
            " y el cálculo de proteinas diarias es de: " +
            peso.value * 1.6;
    } else {
        calculoResultado.innerHTML =
            "Hola " +
            nombre.value +
            " Tu consumo de calorías diarias debe ser de: " +
            (
                88.362 +
                13.397 * peso.value +
                4.799 * alturaCm.value -
                5.677 * edad.value +
                500
            ).toFixed(2) +
            " y el cálculo de proteinas diarias es de: " +
            peso.value * 1.6;
    }
};
