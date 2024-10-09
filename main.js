//hexadicmal
/*let hexValue = '1a';
console.log(parseInt(hexValue, 16));
console.log(parseInt(hexValue, 16).toString(2));
//dismal
let disValue=15;
console.log(disValue.toString(2));
console.log(disValue.toString(16));
//binry
let bainrValue="1111"
console.log(parseInt(bainrValue, 2).toString(16));
console.log(parseInt(bainrValue, 2));*/
const inputs = document.querySelectorAll("input");
let vrl;
inputs.forEach(function(input) {
    input.oninput = function() {
    inputs.forEach(function(input) {
        input.oninput = function() {
        if (input.className == "Binary") {
                    inputs[1].value = `${parseInt(input.value, 2)}`;
                    inputs[2].value = `${parseInt(input.value, 2).toString(16).toUpperCase()}`;
                } 
        else if (input.className == "Decimal") {
                    inputs[0].value = `${parseInt(input.value).toString(2)}`;
                    inputs[2].value = `${parseInt(input.value).toString(16).toUpperCase()}`;
                } 
        else {
            inputs[0].value = `${parseInt(input.value, 16).toString(2)}`;
            inputs[1].value = `${parseInt(input.value, 16)}`;
                }
            };
        });
        
    };
});
