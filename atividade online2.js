// A empresa Savinis, focada no desenvolvimento de software de alta performance, contratou você para realizar o desenvolvimento de um sistema de cadastro para eventos que será disponibilizado para o público, o que, até então, era realizado manualmente. 
// Esse sistema terá como função principal a divulgação dos eventos para a comunidade de desenvolvimento (grupo de pessoas que tem o intuito de compartilhar ideias, projetos e conhecimentos) para que sejam consultados de forma eficiente.
// Você será responsável por escolher qual técnica irá atender os seguintes requisitos:
// -Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.
// -Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
// -Listar participantes e palestrantes por evento.
//  -Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.

let readline = require("readline-sync");

let lista = [];
let participantes = [];
let evento = [];
let dataEvento = []

function main() {

    console.log(
        `
        Sistema de Cadastro de Evento.

        [1] Cadastrar Evento
        [2] Mostrar Eventos Cadastrados
        [3] Sair
        `);

}

function cadastro() {
    caPparticipantes = readline.question("Informe seu Nome: ");
    participantes.push(caPparticipantes);
    capEvento = readline.question("Informe o evento: ");
    evento.push(capEvento);
    console.log("Cadastrado !!!");
    lista++

}

while (main) {
    main();
    id = readline.question("Digite o numero corresponde a sua escolha: ");

    switch (id) {
        case "1":
            let data = readline.question("Informe o dia Atual: ");
            let caPdataEvento = readline.question("Informe o dia do Evento: ");
            if (data <= caPdataEvento) {

            } else {
                console.log("Data nao Permitida");
                break
            }

            let idade = readline.question("Informe dua Idade: ");
            if (idade >= 18) {

            } else {
                console.log("Idade não Permitida");
                break
            }

            if (lista <= 100) {

            } else {
                console.log("Nao Permitido - Lista Cheia");
                break
            }

            if (data <= caPdataEvento && idade >= 18 && lista <= 100) {
                console.log("Requisitos aceitos. Iremos cadastrar seu Evento! ");
                dataEvento.push(caPdataEvento);
                cadastro();

            } else {
                console.log("Não Cadastrado !");
                break
            }
            break

        case "2":
            if(lista > 0){
            console.log(`Lista
            `);
            for (let i = 0; i < lista; i++) {
            console.log(`Solicitante: ${participantes[i]} - Evento: ${evento[i]} - Data: ${dataEvento[i]} 
--------------------------------------------------------------                                 
            `);                           
            }console.log(`Quantidade de registros: ${lista}`);
            }else{
            console.log(`Lista Vazia !`);
                               
        }
            break


        case "3":
            break


    }
}
