import { Personagem } from "../Personagem";
import { Padre } from "../Padre";
import { Guerreiro } from "../Guerreiro";
import { Util } from "../RandomGerador/Util";
import promptSync = require("prompt-sync");

const teclado = promptSync();

let personagens: Personagem[] = [];
personagens.push(new Padre("Fabio De Melo"));
personagens.push(new Guerreiro("King Kong"));
personagens.push(new Padre("Marcelo Rossi"));
personagens.push(new Guerreiro("Jack Chan"));
personagens.push(new Guerreiro("Naruto"));

while (true) {
  console.log(`===== Personagens vivos (${personagens.length}) =====`);
  personagens.forEach((personagem) => console.log(personagem.resumo()));
  if (personagens.length === 1) {
    break;
  }
  console.log("=============================\n");

  teclado("Tecle ENTER para rodar o próximo round\n");
  try {
    const atacantePosicao = Util.randomizar(0, personagens.length - 1);
    const atacadoPosicao = Util.randomizar(0, personagens.length - 1);
    if (atacantePosicao !== atacadoPosicao) {
      const atacante = personagens[atacantePosicao];
      const atacado = personagens[atacadoPosicao];
      // checagem em tempo de execução para evitar acessar undefined
      if (!atacante || !atacado) {
        // atualizar lista caso haja personagens com vida <= 0 e pular este round
        personagens = personagens.filter(
          (personagem) => personagem.vidaAtual > 0
        );
        continue;
      }

      atacante.atacar(atacado);
      console.log(atacante.resumo());
      console.log(atacado.resumo());
      console.log("\n");
      console.log(".".repeat(20));
    }
  } catch (e) {
    // se ocorrer erro durante o ataque, garantimos que removemos personagens mortos
    personagens = personagens.filter((personagem) => personagem.vidaAtual > 0);
    console.log((e as any).message);
  }
}
if (personagens.length > 0) {
  const vencedor = personagens[0];
  if (vencedor) {
    console.log(`\nO vencedor foi \x1b[31m ${vencedor.nome}\x1b[0m`);
  } else {
    console.log("\nNão houve vencedor. Todos os personagens morreram.");
  }
} else {
  console.log("\nNão houve vencedor. Todos os personagens morreram.");
}
