// criar uma Array[] vazia, e uma variável opção"" vazia
const propriedades = []
let opcao =""

// Criar um Loop com DO e WHILE, para rodar ate o ususario selecionar SAIR
do {
  opcao = prompt(
    "Welcome to the Property Registry System\n" +
    "Bem vindos ao Sistema Cadastro de Imóveis\n" +
    "__________________________________________________\n\n" + 
    "Total de Propriedades: " + propriedades.length +// para o numero de propriedade
    "\n\nEscolha uma opção: \n1. Novo Imóvel \n2. Lista de Imóveis\n3. Sair"
    )
  switch (opcao) { //Para ter uma função em Cada uma das opções
    case "1":
      const propriedade = {}      
      propriedade.proprietario = prompt("Informe o NOME do proprietário do imóvel.")
      propriedade.matricula = prompt("Informe o NÚMERO da matrícula da propriedade.")
      propriedade.areaPropriedade = prompt("Informe a ÁREA da propriedade em hectares.")
      propriedade.beneficiarios = prompt("A propriedade possui beneficiário ?\n Insira o nome por favor: ")
      
      
      const confrimacao = confirm(
        "Salvar estas informações?\n" +
        "\n Proprietário: "+propriedade.proprietario+
        "\n Numero de Matrícula: "+propriedade.matricula+
        "\n Área da Propriedade: "+propriedade.areaPropriedade+
        "\n Nome do beneficiário: "+propriedade.beneficiarios
      )

      if (confrimacao){
        propriedades.push(propriedade)
      }
    break;

    case "2":
      for (let i = 0; i < propriedades.length; i++) {
        alert(
        "Propriedade "+ (i + 1)+
        "\n Proprietário: "+propriedades[i].proprietario+
        "\n Numero de Matrícula: "+propriedades[i].matricula+
        "\n Área da Propriedade: "+propriedades[i].areaPropriedade+ "hectares" +
        "\n Nome do beneficiário: "+propriedades[i].beneficiarios
        )
        
      }

    break;

    case "3":
      alert("Encerrando..")
    break;

    default:
      alert("opcão Invalida\n TENTE NOVAMENTE")
      break;
  }
} while (opcao !== "3"); //rodar enquanto a opç]ao é diferente de 3