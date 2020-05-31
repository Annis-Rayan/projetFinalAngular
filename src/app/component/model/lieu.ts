export class Lieu {

  constructor(private _id?: number, private _pays?: string, private _region?: string, private _localite?: string) {
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get pays(): string {
    return this._pays;
  }

  set pays(value: string) {
    this._pays = value;
  }

  get region(): string {
    return this._region;
  }

  set region(value: string) {
    this._region = value;
  }

  get localite(): string {
    return this._localite;
  }

  set localite(value: string) {
    this._localite = value;
  }
}
