import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private selectedLanguageSubject = new BehaviorSubject<string>(this.getSelectedLanguage() || '3');
  private translations: any = {};

  constructor(private http: HttpClient) {
    this.selectedLanguageSubject.subscribe((language) => {
      this.fetchTranslations(language).subscribe((translations) => {
        this.translations = translations;
      });
    });
  }

  getSelectedLanguage(): string {
    return localStorage.getItem('selectedLanguage') || '3';
  }

  setLanguage(language: string): void {
    debugger;
    localStorage.setItem('selectedLanguage', language);
    this.selectedLanguageSubject.next(language);
  }

  getLanguageObservable(): Observable<string> {
    return this.selectedLanguageSubject.asObservable();
  }

  translate(key: string): string {
    return this.translations[key] || key; // Use the key itself if translation is not available
  }

  // getLanguages() {
  //   const languages = [
  //     { id: "3", Lang: "Eng" },
  //     { id: "2", Lang: "Fr" },
  //     { id: "1", Lang: "Cr" },
  //   ];
  //   return languages;
  // }

  private fetchTranslations(language: string): Observable<any> {
    debugger;
    var supportedLanguages:{ [key: string]: string } = {
      "3": "FRENCH",
      "2": "ENGLISH",
      "1": "CREOLE"
    };
    const lngKey = supportedLanguages[language] || 'FRENCH'; // Default to FRENCH if language is not recognized
    const translationsPath = `./assets/i18n/${lngKey}.json`;
    return this.http.get<any>(translationsPath);
  }
}
