// document.write para pegar elemento do body e manupular ele

/*function iniciar () {
    let x = "Olá Mundo!";

    document.write("<h1>Variáveis JS</h1>");
    document.write("<h2>O resultado é: " + x + "!!!!" );

    x = 12 * 5;

    document.write("<h3>Alteramos a variavel para numero " + x + " e o resultado dela é")
}
*/

// Prompt e alert para receber o nome e exibir

/*
function login () {
    var nome =  prompt("Qual o sue nome?" , "Digite seu nome");
    resultado.innerHTML = "Olá " + nome.toUpperCase() + " Seja Bem vindo, clique em Ok para continuar";
}
*/

//Alterar a imagem ao clicar sobre ela
/*

function mudar(objeto, imagem) {
    lampada.src = imagem;
}
*/

function validarDescricao() { 
    if (desc.value.trim() === "") { desc.style.background = "aqua"; alert("Preencha a descrição do produto!"); return false;
    } else {desc.style.background = "white"; return true;
        } 
            }

    function validarQuantidade() { var erro = false;
    if (qtd.value.trim() === ""){erro = true;} else {
        if (isNaN(qtd.value) === true) 
            {erro = true;} 
    else {
    var nQtd = parseInt(qtd.value); 
        if (nQtd < 1 || nQtd > 999) { erro = true;
        } 
         } 
           } 

    if (erro === true) { qtd.style.background = "aqua"; alert("A quantidade deve ser um número entre 1 e 999!"); } else { qtd.style.background = "white"; } return (!erro); }

    function validarPreco(){ var erro = false;
    if (unit.value.trim() === "") { erro = true;}

    else {if (isNaN(unit.value) === true) { erro = true;
        } 

    else {
    var nUnit = parseFloat(unit.value); if (nUnit <= 0.0) { erro = true;
        }
    else { unit.value = nUnit.toFixed(2);
        }
            } 
                } 
    if (erro === true) { unit.style.background = "yellow"; alert("O preço unitário deve ser um número maior que zero!"); } else { unit.style.background = "white"; } return (!erro); } function calcular() {
        if (validarDescricao() && validarQuantidade() && validarPreco()) { var nTotal = parseFloat(unit.value) * parseInt(qtd.value); total.value = nTotal.toFixed(2);
        }
        
    } 
