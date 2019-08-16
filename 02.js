// A partir do vetor contido no arquivo data.json e utilizando os métodos de array (map, reduce, filter e find)
// 1. Crie uma variável que contenha todas as idades (age) dos usuário - map
// 2. Crie uma variáveis que tenha apenas os usuários do sexo feminino e com mais de 18 anos - reduce
// 3. Crie uma variável que procura por um usuário que more na cidade chamada Monroe - find
// 4. Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos

const data = require("./data.json");
//1. Mostrar idade dos usuários
const idades = ()=> (parseInt(data.age) > 18 ? )
     `${data.age} ` 
);
console.log(idades);


// const { people } = require('./people');

// const older = (bigger, person) => bigger = (bigger.hasOwnProperty('age')) ? 
//(parseInt(person.age) > parseInt(bigger.age)) ? person : bigger : person;

// const peopleOlder = people.reduce(older, {});

// console.log(peopleOlder);

