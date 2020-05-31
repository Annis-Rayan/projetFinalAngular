export class Observation {

  constructor(private _id?: number, private _dateObservation?: Date,
              private _nombreObservations?: number, private _description?: string) {
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
    return this._nombreObservations;
  }

  set nombreObservations(value: number) {
    this._nombreObservations = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
