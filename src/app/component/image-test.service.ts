import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageTestService {

  constructor(private httpClient: HttpClient) {
  }

  private _id: number;

  private _selectedFile;
  private _event1;
  private _imgURL: any;
  private _receivedImageData: any = {};
  private _base64Data: any;
  private _convertedImage: any;

  public onFileChanged(event) {
    console.log(event);
    this._selectedFile = event.target.files[0];

    // Below part is used to display the selected image
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this._imgURL = reader.result;
    };

  }


  onUpload() {

    const uploadData = new FormData();
    uploadData.append('myFile', this._selectedFile, this._selectedFile.name);
    console.log(uploadData);

    this.httpClient.post('http://localhost:8080/web/rest/users/edit/upload/' + this._id, uploadData)
      .subscribe(
        res => {
          console.log(res);
          this._receivedImageData = res;
          this._base64Data = this._receivedImageData.pic;
          this._convertedImage = 'data:image/jpeg;base64,' + this._base64Data;
        },
        err => console.log('Error Occured during saving: ' + err)
      );


  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get selectedFile() {
    return this._selectedFile;
  }

  set selectedFile(value) {
    this._selectedFile = value;
  }

  get event1() {
    return this._event1;
  }

  set event1(value) {
    this._event1 = value;
  }

  get imgURL(): any {
    return this._imgURL;
  }

  set imgURL(value: any) {
    this._imgURL = value;
  }

  get receivedImageData(): any {
    return this._receivedImageData;
  }

  set receivedImageData(value: any) {
    this._receivedImageData = value;
  }

  get base64Data(): any {
    return this._base64Data;
  }

  set base64Data(value: any) {
    this._base64Data = value;
  }

  get convertedImage(): any {
    return this._convertedImage;
  }

  set convertedImage(value: any) {
    this._convertedImage = value;
  }

}
