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
  
  /*
  public async apiHttpPostAsPromiseWithAwait(url, requestParams): Promise<ApiResponse> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('applicationName', 'name');
        const body = JSON.stringify(requestParams);
        //stackoverflow.com/questions/49444816/angular-5-synchronous-http-call
        return await this.apiHttp
            .post(url, body, { headers: headers })
            .toPromise();
    }
    
    //For Upload
    
    
    public apiHttpPostFormData<T>(url, requestParams, mapResponse: boolean = true): Observable<{} | Observable<T[]>> {
        const headers = new Headers();
        //Do not add the 'content-type:application/json' to headers when form-data/multipart is been sent.
        headers.append('applicationName', 'name');
        return this.apiHttp
            .post(url, requestParams, { headers: headers })
            .map((apiResponse: ApiResponse) => {
                return mapResponse ? (apiResponse.data as T[]) : apiResponse;
            })
            .catch((apiResponse: any) => this.handleError(apiResponse));
    }
    
    // Regular API
    
     public apiHttpPostPdf<T>(url, requestParams): Observable<{} | Observable<T[]>> {
        const headers = new Headers();
        //application/pdf format is not supported by our services so use application/json and create blob objects for generating pdfs
        headers.append('Content-Type', 'application/json');
        headers.append('applicationName', 'name');
        const responseType = ResponseContentType.ArrayBuffer;
        const body = JSON.stringify(requestParams);
        return this.apiHttp
            .postReport(url, body, { headers: headers, responseType: responseType })
            .map((apiResponse) => {
                return apiResponse;
            })
            .catch((apiResponse: any) => this.handleError(apiResponse));
    }
  */
}
