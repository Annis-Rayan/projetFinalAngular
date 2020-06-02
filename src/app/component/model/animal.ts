export class Animal {
  constructor(private _id?: number,
              private _nomCourant?: string,
              private _nomLatin?: string,
              private _image?:string,
              private _description?:string,
              private _order?: string) {

  }


  get order(): string {
    return this._order;
  }

  set order(value: string) {
    this._order = value;
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

  get nomLatin(): string {
    return this._nomLatin;
  }

  set nomLatin(value: string) {
    this._nomLatin = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
