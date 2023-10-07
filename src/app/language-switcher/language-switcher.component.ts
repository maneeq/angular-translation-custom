import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { LanguageService } from '../_services/language.service';


@Component({
  selector: 'app-language-switcher',
  template: `
    <select   [(ngModel)]="selectedValue" class="language-select"   #selected (change)="switchLanguage(selected.value)">
    <option *ngFor="let option of LanguageData" [value]="option.id" [hidden]="option.id === selected.value">
    {{ option.value }}
  </option>
    </select>
  `,
  styleUrls: ['./language-switcher.component.css'],
})

export class LanguageSwitcherComponent {
  slectedLanguage!:string
  languagesArray: any;
  selectedValue: string;
  LanguageData=[
    {id:"2",Lang:"Eng",value:"english"},
    {id:"3",Lang:"Fr",value:"french"},
    {id:"1",Lang:"Cr",value:"cereole"},
  ]
  constructor(public languageService: LanguageService) {
    const storedValue = localStorage.getItem('selectedLanguage');
    this.selectedValue = storedValue || '3';
  }

  switchLanguage(language: string): void {
    debugger
    this.languageService.setLanguage(language);
     this.selectedValue =language;

  }

}
