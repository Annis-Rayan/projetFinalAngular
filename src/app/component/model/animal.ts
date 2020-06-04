export class Animal {
  constructor(private _id?: number,
              private _nomCourant?: string,
              private _nomScientifique?: string,
              private _emplacementImage?: any,
              private _description?: string,
              private _ordre?: string) {

  }


  get ordre(): string {
    return this._ordre;
  }

  set ordre(value: string) {
    this._ordre = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nomCourant(): string {
    return this._nomCourant;
  }

  set nomCourant(value: string) {
    this._nomCourant = value;
  }

  get nomScientifique(): string {
    return this._nomScientifique;
  }

  set nomScientifique(value: string) {
    this._nomScientifique = value;
  }

  get emplacementImage(): any {
    return this._emplacementImage;
  }

  set emplacementImage(value: any) {
    this._emplacementImage = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
