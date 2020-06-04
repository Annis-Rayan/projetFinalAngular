import {Animal} from './animal';
import {Lieu} from './lieu';
import {User} from './user';
import {concat} from 'rxjs';

export class Observation {

  constructor(private _id?: number,
              private _animal?: Animal,
              private _localisation?: Lieu,
              private _user?: User,
              private _dateObservation?: Date,
              private _nombre?: number,
              private _description?: string,
              private _emplacementImage?: any
  ) {
  }


  get nombre(): number {
    return this._nombre;
  }

  set nombre(value: number) {
    this._nombre = value;
  }

  get emplacementImage(): any {
    return this._emplacementImage;
  }

  set emplacementImage(value: any) {
    this._emplacementImage = value;
  }

  get animal(): Animal {
    return this._animal;
  }

  set animal(value: Animal) {
    this._animal = value;
  }

  get localisation(): Lieu {
    return this._localisation;
  }

  set localisation(value: Lieu) {
    this._localisation = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get dateObservation(): Date {
    return this._dateObservation;
  }

  set dateObservation(value: Date) {
    this._dateObservation = value;
  }

  get nombreObservations(): number {
    return this._nombre;
  }

  set nombreObservations(value: number) {
    this._nombre = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
