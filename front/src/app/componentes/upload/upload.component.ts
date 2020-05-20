import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../servicios/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  UploadFiles:Array<File>;
  constructor(private uploadService : UploadService) { }

  ngOnInit(): void {
  }

  onUpload(){
    let formData = new FormData();
    for(let i=0; i < this.UploadFiles.length; i++){
      formData.append("uploads[]", this.UploadFiles[i], this.UploadFiles[i].name);
    }

    //Call service
    this.uploadService.uploadFile(formData).subscribe((res) =>{
      console.log('Response: ', res);
    });
  }

  onFileChange(e){
    this.UploadFiles = e.target.files;
  }

}
