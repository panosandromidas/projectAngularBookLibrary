import { Component, OnInit, Injectable} from '@angular/core';
// import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {  MatDialog } from '@angular/material/dialog';
import { PopupComponentComponent } from 'src/app/popup-component/popup-component.component';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

@Injectable()
export class FooterComponent implements OnInit{
  // @ViewChild(PopupComponentComponent ) child;
  // tslint:disable-next-line:no-input-rename
  //  @Input('formBook.value') x: any;
  data: any;

  books = [];

  private jsonURL = 'assets/data/book.data.json';

  constructor(
    private http: HttpClient,
    private dialogRef: MatDialog,


    ) {
   this.http.get<any>(this.jsonURL).subscribe((data) => {
    console.log(data);
    this.books = data.books;
    // if (!this.x) {this.books.push(this.x); }
    console.log('ayta einai ' + this.books); }
   );
   }

   onCallBookPopup() {
     this.dialogRef.open(PopupComponentComponent);
     this.dialogRef.afterAllClosed.subscribe(
       (data) => {
         console.log('footer component')
         console.log(data);
    //   // this.books.push(data);
      }
     );
    }

    // tslint:disable-next-line:use-lifecycle-interface
    // ngAfterViewInit() {
    //   this.books.push(this.dialogRef.afterAllClosed.);

    // }

    //  let dialogRef;
    // if (path === 'password-policy') {
    //   dialogRef = this.dialog.open(PasswordPolicyFormPopupComponent, { disableClose: true });
    // } else if (path === 'consider-national') {
    //   dialogRef = this.dialog.open(ConsiderNationalFormPopupComponent, { disableClose: true });
    // } else if (path === 'abc') {
    //   //dialogRef = this.dialog.open(PasswordPolicyFormPopupComponent, { disableClose: true });
    // }
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.notificationService.showNotification(
    //       {
    //         title: this.translate.instant('common.buttons.save'),
    //         type: 'SUCCESS',
    //         message: this.translate.instant('common.messages.success') + ' ' + this.translate.instant('common.buttons.save'),
    //         status: '1'
    //       });
    //   }
    // });

  //  }



  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  }

