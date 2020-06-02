export class User {


  constructor(private _id?: number, private _pseudo?: string,
              private _prenom?: string, private _nom?: string,
              private _imageProfil?: Blob) {

    // TO DO observations ? Signalement ?


  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get pseudo(): string {
    return this._pseudo;
  }

  set pseudo(value: string) {
    this._pseudo = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get imageProfil(): Blob {
    return this._imageProfil;
  }

  set imageProfil(value: Blob) {
    this._imageProfil = value;
  }
}
