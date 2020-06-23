import { Component, OnInit, Injectable, Input, Output } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { PopupComponentComponent } from "src/app/popup-component/popup-component.component";
import { ViewpopupComponent } from "../viewpopup/viewpopup.component";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
@Injectable()
export class FooterComponent implements OnInit {
  data: any;
  view: string;

  books = [];

  private jsonURL = 'assets/data/book.data.json';

  constructor(private http: HttpClient, private dialogRef: MatDialog) {
    this.http.get<any>(this.jsonURL).subscribe((data) => {
      console.log(data);
      this.books = data.books;
      this.books.map((x) => {
        console.log(x);
      });
    });
  }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  onCallBookPopup() {
    const dial = this.dialogRef.open(PopupComponentComponent);
    dial.afterClosed().subscribe((data) => {
      console.log("inside data");
      this.books.push(data);
      console.log(data);
    });
  }

  mouseOverFun(book: any) {
   // console.log('this is after choose ' + JSON.stringify(book));

    const dialduo = this.dialogRef.open(ViewpopupComponent);
    dialduo.componentInstance.viewformBook.setValue(book);
  }
}
