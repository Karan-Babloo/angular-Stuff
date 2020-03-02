import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit{
   @ViewChild('myDiv', {static: false}) myDiv: ElementRef;
  name = 'Angular';
  ngAfterViewInit() {
        console.log('what',this.myDiv.nativeElement.innerHTML);
    }

    openPDF(){
      this.myDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }

  /*
  getExportPayrollFileByPaymentType() {
        this.service.RptExcelwith.00Decimal()
        .then(
            (response) => {
              const byteArray = new Uint8Array(atob(response.data).split('').map(char => char.charCodeAt(0)));
              return new Blob([byteArray], {
                type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
              });
            }).then(blob => {
            this.formHelper.saveAsExcelWithoutDateExtension(blob, 'ApExtractFilesRptExcel');
          }, (error) => this.apiHander.catchAndNotify(error))
          .catch(err => {
            return Promise.reject(this.apiHander.catchAndNotify(err.json().error));
          });
    } */
  
 /* import * as FileSaver from 'file-saver'; 
 saveAsExcelWithoutDateExtension(buffer: any, fileName: string): void {
        const data: Blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
        FileSaver.saveAs(data, fileName + '.xlsx');
    }*/
}
