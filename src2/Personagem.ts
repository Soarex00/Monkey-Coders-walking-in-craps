export class Personagem {
  constructor(
    protected _nome: string,
    protected _forca: number,
    protected _habilidadeMental: number,
    protected _poderDeAtaque: number,
    protected _esquiva: number,
    protected _resistencia: number,
    protected _vidaAtual: number,
    protected _vidaMaxima: number
  ) {}

  public get esquiva(): number {
    return this._esquiva;
  }
  public get vidaAtual(): number {
    return this._vidaAtual;
  }
  public get poderDeAtaque(): number {
    return this._poderDeAtaque;
  }
  public get resistencia(): number {
    return this._resistencia;
  }
  public get nome(): string {
    return this._nome;
  }

  public set vidaAtual(vidaAtual: number) {
    this._vidaAtual = vidaAtual;
  }

  public resumo(): string {
    return `${this._nome}: ${this._vidaAtual.toFixed(
      1
    )}/${this._vidaMaxima.toFixed(1)}`;
  }

  public atacar(oponente: Personagem): void {
    console.log(
      `${this._nome} tentou atacar ${oponente.nome} — comportamento não implementado na classe base.`
    );
  }

  public contraAtacar(oponente: Personagem): void {
    console.log(
      `${this._nome} tentou contra-atacar ${oponente.nome} — comportamento não implementado na classe base.`
    );
  }

  public aprimorarHabilidadePrincipal(): void {
    console.log(
      `${this._nome} tentou aprimorar habilidade principal — comportamento não implementado na classe base.`
    );
  }

  public regenerarVida(): void {
    console.log(
      `${this._nome} tentou regenerar vida — comportamento não implementado na classe base.`
    );
  }
}
