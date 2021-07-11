function wchill(temp1, wspeed2) {
    windchill = 35.74 + (0.6215*temp1) - (35.75*Math.pow(wspeed2, 0.16)) + (0.4275*temp1*Math.pow(wspeed2, 0.16))

    return windchill;
}

function calChill() {
    let temp = parseInt(document.querySelector('#current-temp').value);
    let wspeed = parseInt(document.querySelector('#wind-speed').value);
    let result = wchill(temp, wspeed);

    document.querySelector('#sum').value = result;
}

document.querySelector('#calChill').addEventListener('click', calChill);