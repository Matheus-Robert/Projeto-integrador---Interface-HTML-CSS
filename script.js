function validarNumero(){
    // Função chamada ao clicar no botão

    let numero= document.getElementById("numero").value;
    // Pega o valor digitado no input com id "numero"

    let mensagem = document.getElementById("mensagem");
    // Pega o elemento <p> onde a mensagem será exibida

    if (numero=="") {
        // Verifica se o campo está vazio

        mensagem.textContent= "Por favor insira um número.";
        // Define o texto da mensagem

        mensagem.style.color="red";
        // Define a cor da mensagem como vermelho
    }
    else{
        // Caso o campo não esteja vazio

        numero=parseInt(numero);
        // Converte o valor digitado (texto) para número inteiro

        if(numero>10){
            // Verifica se o número é maior que 10

            mensagem.textContent="O número é maior que 10.";
            // Exibe a mensagem correspondente

            mensagem.style.color="green";
            // Define a cor como verde

        } else{
            // Caso não seja maior que 10

            if(numero>5){
                // Verifica se o número é maior que 5

                mensagem.textContent="O número é maior que 5, mas menor ou igual a 10.";
                // Exibe a mensagem correspondente

                mensagem.style.color="orange";
                // Define a cor como laranja

            } else{
                // Caso o número seja 5 ou menor

                mensagem.textContent="O número é 5 ou menor.";
                // Exibe a mensagem correspondente

                mensagem.style.color="blue";
                // Define a cor como azul
            }

        }

    }
    
}
