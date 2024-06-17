const clientes = {
    nome: 'Aline', 
    idade: 17,
    email:'aline.rafaela.santos@escola.pr.gov.br',
    telefone:['(43)998429733', '(43)9998452026'],
};

clientes.endereços = [
    {
    rua: 'B. Água das Perobas',
    fazenda: 'Nova Esperança',
    apartamento: false,
    numero: false,
    complemento: 'Perto da encruzilhada com uma ponte',
},
]

clientes.endereço.push({
    rua: 'B. Guergolette',
    fazenda: 'Bom Jardim',
    apartamento: false,
    numero: false,
    complemento: 'Perto da quadra de futsal e da igreja',
});

for(let chave in cliente){
   console.log(chave)
}