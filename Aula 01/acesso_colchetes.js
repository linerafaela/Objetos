const objetoPessoa = {
    nome: 'Line',
    idade: 17,
    CPF: '11112223333',
    email: 'aline.rafaela.santos@escola.pr.gov.br'
}

    console.log(`O nome do cliente é ${objetoPessoa['nome']} e sua idade é ${objetoPessoa['idade']}anos.`)

const chaves = ['nome','idade','CPF','email','altura'];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${objetoPessoa[chave]}`);
});