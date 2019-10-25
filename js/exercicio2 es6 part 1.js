const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(function(item){
    return item.idade;
});

console.log(idades);

const usuarioMaior = usuarios.filter(function(item){
    return item.idade >= 18;
})

console.log(usuarioMaior);

const find = usuarios.find(function(item){
    return item.empresa==='Google';
});

console.log(find);