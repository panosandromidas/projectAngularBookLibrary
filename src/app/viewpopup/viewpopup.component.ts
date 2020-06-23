import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { stringify } from 'querystring';

@Component({
  selector: 'app-viewpopup',
  templateUrl: './viewpopup.component.html',
  styleUrls: ['./viewpopup.component.css']
})
export class ViewpopupComponent implements OnInit  {

  takeBook: any ;



  viewformBook = new FormGroup({
    code : new FormControl(null),
    title : new FormControl(null),
    subtitle : new FormControl(null),
    author : new FormControl(null),
    published : new FormControl(null),
    publisher : new FormControl(null),
    pages : new FormControl(null),
    website : new FormControl(null)

  });


  constructor(
    private dialogRef: MatDialogRef<ViewpopupComponent>
  ) { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {

  }

  onClose() {
    this.dialogRef.close();
  }




}
