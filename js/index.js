// Precisamos armazenar o nome da empresa, e sempre que for executado o
// sistema (Execução do arquivo index.js) deve exibir no console esse nome.
// Essa informação nunca deve ser alterada durante o uso do sistema.
const nomeEmpresa = "Omma Receitas";
console.log(nomeEmpresa);

// Precisamos armazenar a lista de receitas em nosso sistema chamada
// receitas: Para isso iremos usar o recurso de Arraysdo Javascript. Essa lista
// deve ter acesso global para todas as funcionalidades do sistema.
// Deixaremos previamente deixar cadastrada uma receita dentro da nossa
// lista de receitas, o cliente deixará livre a escolha de qual receita será. Além
// disso, uma receita será representada por um objeto e deverá ter os
// seguintes atributos:
//  a. Um identificador único que não pode se repetir no sistema
//  b.titulo da receita
//  c. nível dificuldade ( com a escala de simples, moderada e complexa)
//  d. lista de ingredientes já com a medida (Ex: 1 colher de açúcar)
//  e. instruções de preparo
//  f. link do video de preparo
//  g. se é vegana ou não
const listaDeReceitas = [
  {
    id: 1,
    titulo: "Cachorro quente",
    dificuldade: "simples",
    ingredientes: ["1 pão de leite", "1 salsicha", "1 colher de batata palha"],
    preparo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "http://youtube.com",
    vegano: false,
  },
];

// Será preciso criar uma função que permita cadastrar uma receita dentro
// da lista de receitas, seguindo os padrões do objeto estipulado na etapa
// anterior. A função deve se chamarcadastrarReceita e deverá receber
// cada informação da receita porparâmetro devolverumfeedback no
// console que o cadastro foi concluído.
const cadastrarReceita = (
  id,
  titulo,
  dificuldade,
  ingredientes,
  preparo,
  link,
  vegano
) => {
  const novaReceita = {
    id,
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link,
    vegano,
  };

  listaDeReceitas.push(novaReceita);

  // console.log("Cadastro da receita " + titulo + " feito com sucesso!");
  console.log(`Cadastro da receita ${titulo} feito com sucesso!`);
};

// Devemos criar uma função chamadaexibirReceitas queirá listar no
// console, todas as receitas cadastradas. Porém ao exibir cada receita deve
// apenas os seguintes atributos devem ser mostrados:
//  a.Titulo da Receita
//  b.Lista de Ingredientes
//  c.Se é vegana ou não
const exibirReceitas = () => {
  listaDeReceitas.forEach((receita) => {
    console.log("--------------------------------");
    console.log(`Título: ${receita.titulo}`);

    console.log("Ingredientes:");
    receita.ingredientes.forEach((ingrediente) => {
      console.log(`- ${ingrediente}`);
    });
    console.log("É vegano? ", receita.vegano ? "Sim" : "Não");
    console.log("--------------------------------");
  });
};

// Devemos criar uma função que nos permita deletar uma receita, e o nome
// serádeletarReceita ela irá receber como parâmetroo identificador da
// receita. Caso o identificador não seja encontrado deve exibir a seguinte
// mensagem:“Receita não encontrada”. Se a receita forencontrada deve
// ser deletada da lista e exibir uma mensagem de sucesso no console.
const deletarReceita = (id) => {
  const indiceReceita = listaDeReceitas.findIndex((receita) => {
    return receita.id === id;
  });

  if (indiceReceita === -1) {
    return console.log("Receita não encontrada");
  }

  listaDeReceitas.splice(indiceReceita, 1);
  console.log("Receita deletada com sucesso!");
};

// Devemos criar uma função chamadabuscarReceita queirá receber por
// parâmetro um termo a ser buscado no título da receita. Deverá exibir todas
// as receitas que contenha a palavra/termo buscado.
const buscarReceita = (termo) => {
  return listaDeReceitas.filter((receita) => {
    return receita.titulo.toLowerCase().indexOf(termo) != -1; //PQ USOU !=  -1??
  });
};

// Devemos criar uma função chamadaatualizarReceita que deverá receber
// o identificador da receita e todas as informações que podem ser alteradas.
// Só deverá ser atualizado o identificador informado, caso não exista deve
// ser dado um feedback ao usuário.


//TESTE: cadastrarReceita 
// exibirReceitas();
// console.log(`---R E S U L T A D O---R E S U L T A D O---R E S U L T A D O---`);
// cadastrarReceita(
//   2,
//   "Ovo frito",
//   "simples",
//   ["1 ovo", "1 colher de azeite", "Sal a gosto"],
//   "Quebre o ovo em um copo americano, jogue sal, e leve à frigideira.",
//   "https://google.com",
//   false
// );
// exibirReceitas();
//-----------------------------------------------------------------------


//TESTE: buscarReceita
//console.log(buscarReceita("quente"));

// Exibe todas as receitas
// exibirReceitas();

// Remove a receita de id 1
// deletarReceita(1);

// Exibe a nova lista de receitas
//exibirReceitas();