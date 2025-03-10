const citacoes = [
        { id: 1, autor: "Agostinho de Hipona", citação: "A Bíblia é a verdade escrita, e é através dela que conhecemos a verdade." },
        { id: 2, autor: "Martinho Lutero", citação: "A Bíblia não é um livro qualquer, mas a Palavra de Deus, viva e eficaz." },
        { id: 3, autor: "João Calvino", citação: "A Escritura é uma lâmpada para os nossos pés e uma luz para o nosso caminho." },
        { id: 4, autor: "C. S. Lewis", citação: "A Bíblia é a história mais verdadeira que já foi contada, e a história que conta a nossa verdadeira condição." },
        { id: 5, autor: "John Wesley", citação: "Eu sou um homem da Bíblia, e a Bíblia é o meu livro." },
        { id: 6, autor: "Charles Spurgeon", citação: "A Bíblia é um oceano de sabedoria, e, ao mergulharmos nela, encontramos a plenitude de Cristo." },
        { id: 7, autor: "Dietrich Bonhoeffer", citação: "A Bíblia é a Palavra de Deus que nos chama a seguir a Cristo, a viver com Ele e a ser transformados por Ele." },
        { id: 8, autor: "A.W. Tozer", citação: "A Bíblia é a única fonte verdadeira de sabedoria e conhecimento para a vida cristã." },
        { id: 9, autor: "Billy Graham", citação: "A Bíblia é a Palavra viva de Deus, e sua mensagem nunca envelhece." },
        { id: 10, autor: "J.I. Packer", citação: "A Bíblia é uma revelação progressiva de Deus, dando-nos o que precisamos para a salvação e para viver uma vida cristã." },
        { id: 11, autor: "R.C. Sproul", citação: "A Bíblia é a única autoridade final sobre a vida cristã e a única fonte de verdade eterna." },
        { id: 12, autor: "Francis Schaeffer", citação: "A Bíblia é a base para toda a nossa compreensão do mundo e da verdade." },
        { id: 13, autor: "Augustus H. Strong", citação: "A Bíblia é a Palavra inspirada de Deus, infalível e a fonte de autoridade para a fé e prática cristãs." },
        { id: 14, autor: "Henry Morris", citação: "A Bíblia é o manual do Criador para a humanidade, revelando Sua vontade e propósito." },
        { id: 15, autor: "John Owen", citação: "A Bíblia é a fonte de todas as doutrinas e a luz para a nossa vida espiritual." },
        { id: 16, autor: "Tertuliano", citação: "A Bíblia é a nossa defesa contra todas as heresias." },
        { id: 17, autor: "Thomas Watson", citação: "A Bíblia é a receita da vida eterna e a chave para entender o Reino de Deus." },
        { id: 18, autor: "Matthew Henry", citação: "Cada palavra da Bíblia é rica em sabedoria e em poder transformador." },
        { id: 19, autor: "William Tyndale", citação: "Eu traduzi a Bíblia para que o homem comum pudesse conhecer as Escrituras e o evangelho de Cristo." },
        { id: 20, autor: "Oswald Chambers", citação: "A Bíblia não é um livro de regras, mas uma revelação de Deus que nos convida a uma relação profunda com Ele." },
        { id: 21, autor: "G.K. Chesterton", citação: "A Bíblia é a única verdade imutável em um mundo em constante mudança." },
        { id: 22, autor: "John Bunyan", citação: "A Bíblia é o nosso guia em direção à cidade celestial." },
        { id: 23, autor: "Martin Bucer", citação: "A Bíblia é a regra de fé e vida, que nos orienta no caminho da santidade." },
        { id: 24, autor: "William Carey", citação: "Levar a Bíblia ao mundo é levar a esperança ao perdido." },
        { id: 25, autor: "Herman Bavinck", citação: "A Bíblia é a revelação definitiva de Deus, e ela deve moldar a vida do cristão." },
        { id: 26, autor: "Blaise Pascal", citação: "A Bíblia contém um tesouro de sabedoria que só pode ser compreendido com a luz do Espírito Santo." },
        { id: 27, autor: "Jonathan Edwards", citação: "A Bíblia nos ensina que a única verdadeira felicidade é encontrada na comunhão com Deus." },
        { id: 28, autor: "A.W. Pink", citação: "A Bíblia é a autoridade suprema para a vida do cristão, e toda doutrina deve ser testada à luz das Escrituras." },
        { id: 29, autor: "John Stott", citação: "A Bíblia é a Palavra de Deus, e como tal, ela deve ser ouvida, estudada e obedecida." },
        { id: 30, autor: "C.S. Lewis", citação: "A Bíblia é a verdade absoluta que nos guia em nossa busca por significado e propósito." },
        { id: 31, autor: "Michael Horton", citação: "A Bíblia é a única base firme para nossa fé e prática." },
        { id: 32, autor: "F.F. Bruce", citação: "A Bíblia é a Palavra escrita que revela a Verdade viva de Deus." },
        { id: 33, autor: "Leon Morris", citação: "A Bíblia é a fonte de revelação que nos conduz à pessoa de Jesus Cristo." },
        { id: 34, autor: "Alistair Begg", citação: "A Bíblia é o ponto de partida para uma vida de fé que agrada a Deus." },
        { id: 35, autor: "David Platt", citação: "A Bíblia nos mostra o que Deus está fazendo no mundo e como podemos fazer parte disso." },
        { id: 36, autor: "Timothy Keller", citação: "A Bíblia nos chama a viver de maneira radicalmente diferente, mostrando-nos a vida de Cristo como nosso modelo." },
        { id: 37, autor: "James Montgomery Boice", citação: "A Bíblia é a palavra infalível e inerrante de Deus, que nos fala com clareza sobre Seu propósito para nós." },
        { id: 38, autor: "Walter Chantry", citação: "A Bíblia é o único livro que revela com precisão a mente e a vontade de Deus." },
        { id: 39, autor: "Richard Wurmbrand", citação: "A Bíblia é a espada do Espírito, capaz de transformar até o coração mais endurecido." },
        { id: 40, autor: "John MacArthur", citação: "A Bíblia é a única fonte de verdade absoluta e inerrante." },
        { id: 41, autor: "Wayne Grudem", citação: "A Bíblia é a única base segura para a teologia cristã." },
        { id: 42, autor: "Michael Youssef", citação: "A Bíblia é a Palavra eterna de Deus, que nunca falha em trazer sabedoria e orientação." },
        { id: 43, autor: "Francis Chan", citação: "A Bíblia não é apenas um livro sagrado, mas a forma pela qual podemos conhecer verdadeiramente a Deus." },
        { id: 44, autor: "Alister McGrath", citação: "A Bíblia é a revelação definitiva de Deus, e é a base para todo o nosso entendimento da vida cristã." }
]

export default citacoes;