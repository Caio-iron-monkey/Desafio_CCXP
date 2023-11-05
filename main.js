// function addRedBorder(id){

//     element = document.querySelector("#" + id);
//     element.style.border = "5px solid red";
// }

// function highlightCard(selector){

//     var element = document.querySelector(selector);
//     element.classList.toggle("card-high-light")
// }

// FUNCAO PARA DESCOBRIR CODIGO DE CADA TECLA DO TECLADO.
// function checkKeyboardCode(){
    
//     document.addEventListener('keydown', (event) => {
//         var name = event.key;
//         var code = event.code;
        
//         alert(`Tecla Pressionada ${name} \r\n Key code: ${code}`);
//     }, false );
// }



// FUNCAO PARA ADD BOX-SHADOW EM BILHETES APÓS ONMOUSEOVER
function addKeyboardEventListeners(){
    
    document.addEventListener('keydown', (event) => {

        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("sabado");
        var ingresso4 = document.getElementById("domingo");

        var code = event.code;
        if(code == 'Digit1') {
            ingresso1.classList.toggle("card-high-light");
            ingresso2.classList.remove("card-high-light");
            ingresso3.classList.remove("card-high-light");
            ingresso4.classList.remove("card-high-light");
        }

        if(code == 'Digit2') {
            ingresso1.classList.remove("card-high-light");
            ingresso2.classList.toggle("card-high-light");
            ingresso3.classList.remove("card-high-light");
            ingresso4.classList.remove("card-high-light");
        }

        if(code == 'Digit3') {
            ingresso1.classList.remove("card-high-light");
            ingresso2.classList.remove("card-high-light");
            ingresso3.classList.toggle("card-high-light");
            ingresso4.classList.remove("card-high-light");
        }

        if(code == 'Digit4') {
            ingresso1.classList.remove("card-high-light");
            ingresso2.classList.remove("card-high-light");
            ingresso3.classList.remove("card-high-light");
            ingresso4.classList.toggle("card-high-light");
        }

        
    }, false);
}

addKeyboardEventListeners();
