//Array de datos para calcular el deficit/superavit calórico
let datos = [];
let count = 0;

//Instanciamos
let modoNoche = document.getElementById("modoNoche");
let lyfImg = document.getElementById("lyfImg");
let body = document.getElementById("body");
let header = document.getElementById("header");
let main = document.getElementById("main");
let ingresarFormulario = document.getElementById("ingresarFormulario");
let formularioDatos = document.getElementById("formularioDatos");
let nombre = document.getElementById("nombre");
let labelNombre = document.getElementById("labelNombre");
let peso = document.getElementById("peso");
let labelPeso = document.getElementById("labelPeso");
let alturaCm = document.getElementById("alturaCm");
let labelAltura = document.getElementById("labelAltura");
let edad = document.getElementById("edad");
let labelEdad = document.getElementById("labelEdad");
let sexo = document.getElementById("sexo");
let labelSexo = document.getElementById("labelSexo");
let btnIngresoDatos = document.getElementById("btnIngresoDatos");
let resultados = document.getElementById("resultados");
let calculoResultado = document.getElementById("calculoResultado");
let pantallaObjeto = document.getElementById("pantallaObjeto");
let btnDeficit = document.getElementById("btnDeficit");
let btnSuperavit = document.getElementById("btnSuperavit");
let btnVolver = document.getElementById("btnVolver");
let resultadoProteina = document.getElementById("resultadoProteina");
let resultadoCalorias = document.getElementById("resultadoCalorias");
let footer = document.getElementById("footer");

//Img para volver a pantalla inicial
lyfImg.addEventListener("click", () => {
    main.style.display = "flex";
    formularioDatos.style.display = "none";
    resultados.style.display = "none";
});

//Modo Noche
modoNoche.addEventListener("click", () => {
    body.classList.toggle("modoNoche");
    header.classList.toggle("modoNoche");
    footer.classList.toggle("modoNoche");
    formularioDatos.classList.toggle("modoNoche");
    resultados.classList.toggle("modoNoche");
    labelNombre.classList.toggle("modoNoche");
    labelPeso.classList.toggle("modoNoche");
    labelAltura.classList.toggle("modoNoche");
    labelEdad.classList.toggle("modoNoche");
    labelSexo.classList.toggle("modoNoche");
    resultadoProteina.classList.toggle("modoNoche");
    resultadoCalorias.classList.toggle("modoNoche");
    resultadoProteina.classList.remove("resultadoCalculadora");
    resultadoCalorias.classList.remove("resultadoCalculadora");
});

//Btn para pasar a pantalla de formulario
ingresarFormulario.addEventListener("click", () => {
    formularioDatos.style.display = "flex";
    main.style.display = "none";
    resultados.style.display = "none";
    datos = [];
    resultadoCalorias.innerHTML = " ";
    resultadoProteina.innerHTML = " ";
});

//Btn para el ingreso de datos
btnIngresoDatos.addEventListener("click", () => {
    if (
        nombre.value == "" ||
        peso.value == "" ||
        alturaCm.value == "" ||
        edad.value == "" ||
        sexo.value == "" ||
        peso.value <= 0 ||
        alturaCm <= 0 ||
        edad.value <= 0
    ) {
        alert("Por favor, completá todos los campos con datos válidos");
    } else {
        //pantalla de resultados pasa de none a flex
        //main pasa de flex a none
        //se envian los datos al array
        resultados.style.display = "flex";
        main.style.display = "none";
        formularioDatos.style.display = "none";
        //armo el objeto
        let dato = {
            nombre: nombre.value,
            peso: parseFloat(peso.value),
            alturaCm: alturaCm.value,
            edad: edad.value,
            sexo: sexo.value,
            id: "persona" + count,
        };
        datos.push(dato);
        console.log("datos ingresados");
        nombre.value = "";
        peso.value = "";
        alturaCm.value = "";
        edad.value = "";
        sexo.value = "";
        cards();
    }
});

//Función cards, hace el map e itera los datos ingresados
let cards = () => {
    pantallaObjeto.innerHTML = " ";
    let modelo = "";
    datos.map((dato) => {
        modelo = `<div class='cards'>
            <h3>${dato.nombre}</h3>
            <h3>${dato.peso} kg</h3>
            <h3>${dato.alturaCm} cm</h3>
            <h3>${dato.edad} años</h3>
            <h3>Sexo ${dato.sexo}</h3>
        </div>`;
        pantallaObjeto.innerHTML += modelo;
    });
};

//Const deficit calórico
const deficitCalorico = (dato) => {
    // Convierte número
    const pesoNumerico = parseFloat(dato.peso);
    const proteinaDiaria = pesoNumerico * 1.6;
    const edadDeficit = parseFloat(dato.edad);
    const alturaDeficit = parseFloat(dato.alturaCm);
    // Muestra el resultado en pantalla con resultadoCalculadora instanciado
    if (dato.sexo == "F") {
        resultadoProteina.innerHTML =
            "Tu cálculo de proteína es de " +
            proteinaDiaria.toFixed(0) +
            " gramos diarios";
        //Calcula TMB al que le resta 500 calorias para mujeres
        resultadoCalorias.innerHTML =
            "Tu consumo de calorías diarias debe ser " +
            (
                447.593 +
                9.247 * pesoNumerico +
                3.098 * alturaDeficit -
                4.33 * edadDeficit -
                500
            ).toFixed(0);
    } else {
        resultadoProteina.innerHTML =
            "Tu cálculo de proteína es de " +
            proteinaDiaria.toFixed(0) +
            " gramos diarios";
        //Calcula TMB al que le resta 500 calorias para hombres
        resultadoCalorias.innerHTML =
            "Tu consumo de calorías diarias debe ser " +
            (
                88.362 +
                13.397 * pesoNumerico +
                4.799 * alturaDeficit -
                5.677 * edadDeficit -
                500
            ).toFixed(0);
    }
};

//Const superavit calórico
const superavitCalorico = (dato) => {
    // Convierte número
    const pesoNumerico = parseFloat(dato.peso);
    const proteinaDiaria = pesoNumerico * 1.6;
    const edadDeficit = parseFloat(dato.edad);
    const alturaDeficit = parseFloat(dato.alturaCm);
    // Muestra el resultado en pantalla con resultadoCalculadora instanciado
    if (dato.sexo == "F") {
        resultadoProteina.innerHTML =
            "Tu cálculo de proteína es de " +
            proteinaDiaria.toFixed(0) +
            " gramos diarios";
        //Calcula TMB al que le suma 500 calorias
        resultadoCalorias.innerHTML =
            "Tu consumo de calorías diarias debe ser " +
            (
                447.593 +
                9.247 * pesoNumerico +
                3.098 * alturaDeficit -
                4.33 * edadDeficit +
                500
            ).toFixed(0);
    } else {
        resultadoProteina.innerHTML =
            "Tu cálculo de proteína es de " +
            proteinaDiaria.toFixed(0) +
            " gramos diarios";
        //Calcula TMB al que se le suma 500 calorias
        resultadoCalorias.innerHTML =
            "Tu consumo de calorías diarias debe ser " +
            (
                88.362 +
                13.397 * pesoNumerico +
                4.799 * alturaDeficit -
                5.677 * edadDeficit +
                500
            ).toFixed(0);
    }
};

//Evento sobre btn deficit
btnDeficit.addEventListener("click", () => {
    //Método de array para buscar el último ingreso y sobre ese aplicar la fórmula
    //Aplicamos sobre el último dato que se pusheo al array datos la const deficitCalorico
    const ultimoDato = datos[datos.length - 1];
    deficitCalorico(ultimoDato);
});

//Evento sobre btn superavit
btnSuperavit.addEventListener("click", () => {
    //Método de array para buscar el último ingreso y sobre ese aplicar la fórmula
    //Aplicamos sobre el último dato que se pusheo al array datos la const superavitCalorico
    const ultimoDato = datos[datos.length - 1];
    superavitCalorico(ultimoDato);
});

//Evento sobre btn volver a pantalla inicial
//Además vacía el array, ya que no hay localStorage
//Limpia los p resultadosCalorias y resultadosProteinas
btnVolver.addEventListener("click", () => {
    formularioDatos.style.display = "flex";
    main.style.display = "none";
    resultados.style.display = "none";
    datos = [];
    resultadoCalorias.innerHTML = " ";
    resultadoProteina.innerHTML = " ";
});
