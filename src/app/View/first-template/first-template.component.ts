import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

// import * as html2pdf from 'html2pdf.js';
// import html2pdf from 'html2pdf.js';
@Component({
  selector: 'app-first-template',
  templateUrl: './first-template.component.html',
  styleUrls: ['./first-template.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FirstTemplateComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}
  show = true;
  toggle() {
    this.show = false;
  }
  transform(html: any, styleSelector: any, styleValue: any): SafeHtml {
    const style = ` style = "${styleSelector}: ${styleValue};"`;
    const indexPosition = html.indexOf('>');
    const newHtml = [
      html.slice(0, indexPosition),
      style,
      html.slice(indexPosition),
    ].join('');
    return this.sanitizer.bypassSecurityTrustHtml(newHtml);
  }
  myFunctionToClear() {
    const element = document.getElementById('printme');
    element!.classList.toggle('mainContainer1');
  }
  add = document.querySelector('.add');
  div = document.querySelector('div');
  test() {
    if (confirm('Are you want to add another field?')) {
      // Save it!
      var cloned = document.getElementById('input')!.cloneNode(true);
      cloned.nodeValue = ' '; // cloned will have no value
      document.getElementById('div')!.appendChild(cloned);
      console.log('Thing was saved to the database.');
    } else {
      // Do nothing!
      console.log('Thing was not saved to the database.');
    }
  }

  ngOnInit(): void {}
}
