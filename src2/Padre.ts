import { Personagem } from "./Personagem";
import { Util } from "./RandomGerador/Util";

export class Padre extends Personagem {
  constructor(nome: string) {
    super(nome + " Padre", 0, 0, 0, 0, 0, 0, Util.randomizar(1, 8000));
    this._vidaAtual = this._vidaMaxima;
  }
  public atacar(oponente: Personagem): void {
    console.log(`${this._nome} tentou converter ${oponente.nome}`);
    this._ataque(oponente);
    oponente.contraAtacar(this);
  }

  public contraAtacar(oponente: Personagem): void {
    console.log(`${this._nome} tentou converter ${oponente.nome}`);
    this._ataque(oponente);
  }

  public aprimorarHabilidadePrincipal(): void {
    throw new Error("Este personagem não pode executar esta ação");
  }

  public regenerarVida(): void {
    this._vidaAtual = Math.min(
      this._vidaMaxima,
      this._vidaAtual + this._vidaMaxima * 0.1
    );
  }

  protected _ataque(oponente: Personagem): void {
    const acertou: boolean = Util.randomizar(0, 100) < 40;
    if (acertou) {
      oponente.vidaAtual = 0;
      throw new Error(`${oponente.nome} foi mandado para a Luz!`);
    }
  }
}
