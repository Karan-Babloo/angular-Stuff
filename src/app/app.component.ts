import { Component, ViewChildren, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit{
   @ViewChildren('myDiv') myDiv: ElementRef;
  name = 'Angular';
  ngAfterViewInit() {
        console.log(this.myDiv.nativeElement.innerHTML);
    }

    openPDF(){
      this.myDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }

}
