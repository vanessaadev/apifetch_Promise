// const minhaPromise = new Promise((resolve, reject) => {
//     // operação assíncrona
//     let sucesso = true;

//     if (sucesso) {
//         resolve('Operação bem sucedida');
//     } else {
//         reject ("Ocorreu um erro");
//     }
// })

// minhaPromise
//     .then(resultado => {
//         console.log(resultado); //Operação bem sucedida
//     })
//     .catch(erro => {
//         console.error(erro); //Ocorreu um erro
//     })
//     .finally(() => {
//         console.log('Operação Concluída');
//     });

// const esperar = ms => new Promise(resolve => setTimeout(resolve, ms));

// esperar(2000).then(() => console.log('Passaram-se 2 segundos')) 

fetch('https://marneicardoso.com/api/')
    .then(response => {
        // Verifica se a resposta foi bem sucedida
        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.statusText);
        }
        // Converte a resposta para JSON
        return response.json();
    })
    .then(data => {
        data.forEach(elemento => {
            const div = document.createElement("div");
            div.innerHTML = `Produto: ${elemento.nome_produto} | R$ ${elemento.valor_produto} \nDescrição: ${elemento.descricao_produto}`


            document.querySelector("body").appendChild(div)

            const foto = document.createElement("img");
            foto.setAttribute('src', elemento.foto_produto);
            foto.setAttribute('alt', elemento.nome_produto);

            div.appendChild(foto);
        });
        // Manipula os dados recebidos
        // console.log(data)
    })
    .catch(error => {
        // Lida com erros na requisição
        console.error('Erro ao buscar dados', error);
    });