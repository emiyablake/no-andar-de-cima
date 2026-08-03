// story.js — equivalente ao story.lua
// Dados das cenas de "No Andar de Cima" (texto portado verbatim do Lua original)

const story = {

  // Bloco 01 Cena 01 - A chegada
  1: {
    text: "Você chegou em seu novo apartamento. Não é exatamente como você imaginava, mas com um pouco de tempo, as coisas podem ficar do seu agrado, e talvez você comece a sentir que este é seu novo lar.",
    subtext: "O que você faz?",
    options: [
      { text: "Arrumar sua mudança.", next: 2 },
      { text: "Abrir um vinho.", next: 3 }
    ]
  },

  // B1C2R1 - A - Começa a guardar as coisas e arrumar a casa.
  2: {
    text: "Você desencaixa suas coisas e começa a achar o lugar adequado para cada uma delas. No processo você fica emotivo quando acha uma foto com sua mãe. Mas o apartamento começa a ficar mais a sua cara. Depois dessa arrumação toda, você toma um banho e decide que é hora de comer algo..",
    subtext: "O que você faz?",
    options: [
      { text: "Pede uma pizza.", next: 4 },
      { text: "Come um sanduíche", next: 5 }
    ]
  },

  // B1C2R2 - B - Abrir uma garrafa de vinho.
  3: {
    text: "Você acaba bebendo mais do que deveria e acorda tarde da noite no sofá, o vizinho de cima parece estar dando uma festa, com música alta e conversas animadas. Confuso e com muita sede você se dirige para a cozinha atrás de água. Ao olhar no relógio, percebe que já são duas da manhã.",
    subtext: "O que você faz?",
    options: [
      { text: "Interfona para o vizinho de cima.", next: 6 },
      { text: "Desiste e resolve dormir, deixando para resolver isso amanhã.", next: 7 }
    ]
  },

  // B1C3R1 - A - Pede uma pizza.
  4: {
    text: "Você pega o telefone e pede uma pizza de pepperoni. Enquanto espera, decide explorar o apartamento um pouco mais. Ao abrir a sacada da sala, percebe que a vista é melhor do que imaginava. A cidade parece calma vista desse bairro à noite.A pizza chega e, enquanto você come, nota vozes acalentadas e risadas altas vindo do apartamento de cima. Ao primeiro momento você ignora e tenta terminar o dia em paz, mas logo uma música alta e passos pesados, como se pulassem, se estendendo por boas horas noite adentro.",
    subtext: "O que você faz?",
    options: [
      { text: "Interfona para a síndica", next: 8 },
      { text: "Interfona para o vizinho", next: 6 }
    ]
  },

  // B1C4R1 - B - Come um sanduíche
  5: {
    text: "Com seu sanduba feito você decide aproveitar para comê-lo na sacada, apreciando a vista. Você se sente feliz com a calma e a paz que o silêncio trás. Infelizmente não dura muito tempo, você começa a notar vozes acalentadas e risadas altas vindo do apartamento de cima.  Ao primeiro momento você ignora e tenta terminar seu sanduba em paz, mas logo uma música alta e passos pesados, como se pulassem, se estendendo por boas duas horas.",
    subtext: "O que você faz?",
    options: [
      { text: "Interfona para a síndica", next: 8 },
      { text: "Interfona para o vizinho", next: 6 }
    ]
  },

  // B1C3R2 - A - Interfona para o vizinho
  6: {
    text: "Irritado, você pega o interfone e disca o número do apartamento de cima. A ligação toca por alguns minutos, mas ninguém atende. Impaciente, você tenta mais uma vez, mas o silêncio continua. Parece que a festa está tão alta que ninguém está ouvindo.",
    subtext: "O que você faz?",
    options: [
      { text: "Interfona para a síndica.", next: 8 },
      { text: "Desiste e resolve dormir, deixando para resolver isso amanhã.", next: 7 }
    ]
  },

  // B1C4R2 - B - Desiste e resolve dormir
  7: {
    text: "Mesmo com dificuldade por conta do barulho o cansaço da mudança fala mais alto e logo cai no sono. Na manhã seguinte, você acorda exausto, com a sensação de ter tido a pior noite de sono da sua vida. Com esforço, você se levanta e vai até a cozinha, preparando um café forte para tentar se recuperar. Xícara em mãos, você decide aproveitar o tempo na varanda, o dia está ensolarado.",
    subtext: "O que você faz?",
    options: [
      { text: "Ir no apartamento de cima.", next: 9 },
      { text: "Dar uma volta pelo bairro.", next: 10 }
    ]
  },

  // B1C5R1 - A & B - Interfona para a síndica
  8: {
    text: "Você interfona para a síndica, que nitidamente atende o interfone incomodada, você explica a situação para ela que com um tom confuso te responde: “ não tem morador nenhum no andar de cima, o apartamento da cobertura está fechado a anos..”. A resposta te deixa desconcertado. O barulho é real, está ali é inegável e mesmo assim você começa a se perguntar: será que estou imaginando coisas? Será que estou tão cansado assim? ",
    subtext: "O que você faz?",
    options: [
      { text: "Insiste que tem alguém dando uma festa e que se nada for feito você vai chamar a policia.", next: 11 },
      { text: "Pergunta se tem alguém que poderia ir verificar.", next: 12 }
    ]
  },

  // B1C5R2 - A - Ir no apartamento de cima
  9: {
    text: "Refletindo sobre os motivos que te levaram a se mudar e escolher esse lugar para um novo começo você decide que precisa conversar com o vizinho de cima e entender se os acontecimentos de ontem são frequentes ou foi uma ocasião especial. Com a xícara de café ainda em mãos, você sobe as escadas e toca a campainha. Aguarda por alguns segundos, mas não há resposta. Toca a campainha novamente, aguardando com um pouco mais de ansiedade. Depois de mais alguns minutos, bate na porta, mas ainda assim não recebe nenhuma resposta. O silêncio é intrigante, mas considerando todo o barulho da noite anterior, quem quer que esteja dentro desse apartamento deve estar de ressaca.",
    subtext: "O que você faz?",
    options: [
      { text: "Interfona para a síndica e explica a situação.", next: 13 },
      { text: "Tenta abrir a porta.", next: 15 }
    ]
  },

  10: {
    text: "Um bairro afastado do centro realmente foi uma boa escolha. Você caminha pela rua calma, sentindo o sol aquecer seu corpo, os últimos anos foram difíceis, e esse momento é merecido. No caminho de volta para o apartamento você decide que algo deve ser feito.",
    subtext: "O que você faz?",
    options: [
      { text: "Interfona para a síndica e explica a situação.", next: 13 },
      { text: "Pelo seu bem, você decide se mudar para outro prédio..", next: 14 }
    ]
  },

  11: {
    text: "Pelo horário e talvez por você ser novo no prédio, a síndica não fica nada feliz com a sua pressão, mas ela entende sua preocupação e diz que vai pedir para o porteiro dar uma olhada lá, enquanto isso ela insiste para que você tente dormir e deixe para resolver isso amanhã",
    subtext: "O que você faz?",
    options: [
      { text: "Vai dormir e deixa que o porteiro cuide disso." },
      { text: "Você mesmo decide subir lá e resolver essa situação" }
    ]
  },

  12: {
    text: "Tentando manter a calma, você pergunta educadamente se a síndica pode enviar alguém para verificar o apartamento. Ela responde, com certa relutância, que vai pedir ao porteiro para dar uma olhada.  Após um tempo de espera, a síndica retorna dizendo que o zelador verificou e não encontrou nada. O apartamento está fechado e vazio, exatamente como ela havia dito.",
    subtext: "O que você faz?",
    options: [
      { text: "Aceita a resposta mas com muito receio decide ir dormir." },
      { text: "Você acata a resposta dela, mas decide investigar por si mesmo." }
    ]
  },

  13: {
    text: "Você decide que essa situação já foi longe o suficiente e retorna ao seu apartamento para interfonar para a síndica. Ela atende num tom agradável, e você sem rodeios já relata o barulho e a ausência de resposta no apartamento de cima. Ela responde com uma certa relutância: - Tem certeza que está vindo do apartamento de cima?. Você sinaliza que sim, os barulhos vinham de cima e você tinha quase certeza disso, então ela te responde que não há moradores na cobertura já fazem alguns bons anos. Essa resposta não foi nada agradável, o barulho parecia real demais, mas ao mesmo tempo, não há motivos para ela mentir.",
    subtext: "O que você faz?",
    options: [
      { text: "Decide investigar por conta própria.", next: 16 },
      { text: "Com essa nova informação, você pondera melhor suas escolhas e pensa que talvez seja melhor se mudar.", next: 17 }
    ]
  }
};
