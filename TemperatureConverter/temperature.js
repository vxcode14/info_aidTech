const convertButton = document.getElementById('convert');
convertButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('convert button was selected!');
    const inputElements = document.getElementsByTagName('input');
    const input = inputElements[0].value;
    const fahrenheit = inputElements[1].checked;
    const celsius = inputElements[2].checked;
    temperatureConversion(fahrenheit, celsius, input);
});

const temperatureConversion = (fahrenheit, celsius, temperature) => {
    const result = document.getElementById('result');
    if(result.classList.contains('text-danger'))
        result.classList.remove('text-danger');

    if(temperature !== ''){
        if(fahrenheit){
            const c = convertToCelsius(temperature).toFixed(1);
            const cStr = `${temperature} F = ${c} C`;
            result.innerHTML = cStr;
        }
        else if(celsius){
            const f = convertToFahrenheit(temperature).toFixed(1);
            const fStr = `${temperature} C = ${f} F`;
            result.innerHTML = fStr;
        }else{
            result.innerHTML = 'SELECT A TEMPERATURE SCALE'
            result.classList.add("text-danger")
        }
    }else{
        result.classList.add("text-danger")
        result.innerHTML = 'ENTER A TEMPERATURE VALUE'
    }
}

const convertToCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * (5 / 9));
}

const convertToFahrenheit = (celsius) => {
    return ((celsius * 1.8) + 32);
}

const tempForm = document.getElementById('tempForm'); 
tempForm.addEventListener('input', (e) => {
    const inputElements = document.getElementsByTagName('input');
    const input = inputElements[0].value;
    const fahrenheit = inputElements[1].checked;
    const celsius = inputElements[2].checked;
    temperatureConversion(fahrenheit, celsius, input);
});
