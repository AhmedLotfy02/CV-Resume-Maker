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
  test2() {
    if (confirm('Are you want to add another field?')) {
      // Save it!
      var cloned = document.getElementById('input2')!.cloneNode(true);
      cloned.nodeValue = ' '; // cloned will have no value
      document.getElementById('div2')!.appendChild(cloned);
      console.log('Thing was saved to the database.');
    } else {
      // Do nothing!
      console.log('Thing was not saved to the database.');
    }
  }

  test3() {
    if (confirm('Are you want to add another field?')) {
      // Save it!
      var cloned = document.getElementById('input3')!.cloneNode(true);
      cloned.nodeValue = ' '; // cloned will have no value
      document.getElementById('div3')!.appendChild(cloned);
      console.log('Thing was saved to the database.');
    } else {
      // Do nothing!
      console.log('Thing was not saved to the database.');
    }
  }
  test4() {
    if (confirm('Are you want to add another field?')) {
      // Save it!
      var cloned = document.getElementById('input4')!.cloneNode(true);
      cloned.nodeValue = ' '; // cloned will have no value
      document.getElementById('div4')!.appendChild(cloned);
      console.log('Thing was saved to the database.');
    } else {
      // Do nothing!
      console.log('Thing was not saved to the database.');
    }
  }
  test5() {
    if (confirm('Are you want to add another field?')) {
      // Save it!
      var cloned = document.getElementById('input5')!.cloneNode(true);
      cloned.nodeValue = ' '; // cloned will have no value
      document.getElementById('div5')!.appendChild(cloned);
      console.log('Thing was saved to the database.');
    } else {
      // Do nothing!
      console.log('Thing was not saved to the database.');
    }
  }
  test6() {
    if (confirm('Are you want to add another field?')) {
      // Save it!
      var cloned = document.getElementById('input6')!.cloneNode(true);
      cloned.nodeValue = ' '; // cloned will have no value
      document.getElementById('div6')!.appendChild(cloned);
      console.log('Thing was saved to the database.');
    } else {
      // Do nothing!
      console.log('Thing was not saved to the database.');
    }
  }
  test7() {
    if (confirm('Are you want to add another field?')) {
      // Save it!
      var cloned = document.getElementById('input7')!.cloneNode(true);
      cloned.nodeValue = ' '; // cloned will have no value
      document.getElementById('div7')!.appendChild(cloned);
      console.log('Thing was saved to the database.');
    } else {
      // Do nothing!
      console.log('Thing was not saved to the database.');
    }
  }
  ngOnInit(): void {}
}
