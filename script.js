// Selecionar os elementos
// Uma Variavel para cada campo.
const inputElement = document.querySelector("#input")
const fromElement = document.querySelector("#from")
const toElement = document.querySelector("#to")
const outputElement = document.querySelector("#output")
const convertButton = document.querySelector("#convert-btn")
const messageElement = document.querySelector("#message")

// Função para converter as unidades

function convert() {
    const fromValue = fromElement.value;
    const toValue = toElement.value;
    const inputValue = parseFloat(inputElement.value);

    if (isNaN(inputValue)) {
        messageElement.textContent = "Por favor, insira um número válido.";
        outputElement.value = "";
        return;
    }

    if(fromValue === toValue) {
        outputElement.value  = inputElement.value;
        messageElement.textContent = "";
        return;
    }

    // Converter para metros
    let meters;
    switch (fromValue) {
        case "m":
            meters = inputElement.value;
            break
        case "km":
            meters = inputElement.value * 1000;
            break
        case "cm":
            meters = inputElement.value / 100;
            break
        case "mm":
            meters = inputElement.value / 1000;
            break
        
    }

    // Convertendo metros para unidade de saída
    let result;
    switch (toValue) {
        case "m":
            result = meters;
            break
        case "km":
            result = meters / 1000;
            break
        case "cm":
            result = meters * 100;
            break
        case "mm":
            result = meters * 1000;
            break
        
    }

    // Exibir resultado no input
    outputElement.value = result

    // Exibir resultado na message
    const fromLabel = fromElement.options[fromElement.selectedIndex].text;
    const toLabel = toElement.options[toElement.selectedIndex].text;

    const message = `${inputElement.value} ${fromLabel} equivalem a ${result} ${toLabel}`
    messageElement.textContent = message
}

convertButton.addEventListener("click", convert)