import { Personagem } from "./Personagem";
import { Ramdom } from "./SystemRamdom/Ramdom";
export class Guerreiro extends Personagem {
  constructor(nome: string) {
    super(

        nome + " Warrior",
        Ramdom.randomizar(1, 1000),
        0,
        0,
        Ramdom.randomizar(0, 50),
        Ramdom.randomizar(0, 90),
        0,
        Ramdom.randomizar(1, 40_000)
    );
    this._poderDeAtaque = this._forca * 10;
    this._vidaAtual = this._vidaMaxima;
  }

  public atacar(oponente: Personagem): void {
    console.log(`${this._nome} atacou ${oponente.nome}`);
    this._ataque(oponente);
    oponente.contraAtacar(this);
  }

  public contraAtacar(oponente: Personagem): void {
    console.log(`${this._nome} contra-atacou ${oponente.nome}`);
    this._ataque(oponente);
  }

  public aprimorarHabilidadePrincipal(): void {
    
    this._forca *= 1.1;
    this.atualizarPoderDeAtaque();
  }

  public regenerarVida(): void {
    this._vidaAtual = Math.min(this._vidaMaxima, this._vidaAtual + this._vidaMaxima * 0.1);
  }

  protected _ataque(oponente: Personagem): void {
    const acertou: boolean = Ramdom.randomizar(0, 100) > oponente.esquiva;
    if (acertou) {
      const danoCausado: number =
        (1 - oponente.resistencia / 100) * this._poderDeAtaque;
      oponente.vidaAtual = Math.max(0, oponente.vidaAtual - danoCausado);

      const oponenteMorreu: boolean = oponente.vidaAtual <= 0;
      if (oponenteMorreu) {
        throw new Error(`${oponente.nome} foi derrotado.`);
      }
    } else {
      console.log(`${oponente.nome} esquivou o ataque de ${this._nome}`);
    }
  }

  private atualizarPoderDeAtaque(): void {
    this._poderDeAtaque = this._forca * 10;
  }



}