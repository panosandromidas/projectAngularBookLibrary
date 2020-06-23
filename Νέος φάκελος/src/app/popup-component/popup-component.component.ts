import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-popup-component',
  templateUrl: './popup-component.component.html',
  styleUrls: ['./popup-component.component.css']
})
export class PopupComponentComponent implements OnInit {

  newbook: {
    code: number,
    title: string,
    author: string,
    published: any,
    pages: number,
    website: string
  };

formBook = new FormGroup({
    code : new FormControl(null),
    title : new FormControl(null),
    author : new FormControl(null),
    published : new FormControl(null),
    pages : new FormControl(null),
    website : new FormControl(null)


  });

  buttonPushed = false;
  // x: any;

constructor(
     private dialogRef: MatDialogRef<PopupComponentComponent>,

  ) { }

  ngOnInit() {

  }

  onSave() {
    this.buttonPushed = true;
    if (this.formBook.valid) {
      console.log('1 hit!!!!!!!!!!!!!' + this.formBook.value);
      // console.log('xaxaxaxa' + this.formBook.get('code').value );
      // this.x = this.formBook.value;
      this.dialogRef.close(this.formBook.value);
    }
  }

  onClose() {
    this.dialogRef.close();
  }

}
