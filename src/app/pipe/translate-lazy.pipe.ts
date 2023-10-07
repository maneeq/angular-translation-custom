// import { Pipe, PipeTransform } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, BehaviorSubject } from 'rxjs';
// import { map, switchMap, take } from 'rxjs/operators';

// @Pipe({
//   name: 'translateLazy',
//   pure: false
// })
// export class TranslateLazyPipe implements PipeTransform {
//   private languageSubject = new BehaviorSubject<string>('fr');
//   private translations: any = {};

//   constructor(private readonly http: HttpClient) {
//     this.languageSubject.next(localStorage.getItem('selectedLanguage') || 'fr');
//     this.languageSubject.pipe(switchMap((language) => this.fetchTranslations(language)), take(1))
//       .subscribe((translations) => {
//         this.translations = translations;
//       });
//   }

//   transform(value: string): string {
//     return this.translations[value] || `?${value}`;
//   }

//   fetchTranslations(language: string): Observable<any> {
//     const translationsPath = `./assets/i18n/${language}.json`;
//     return this.http.get<any>(translationsPath);
//   }
//   updateTranslations(): void {
//     const language = localStorage.getItem('selectedLanguage') || 'fr';
//     this.fetchTranslations(language).subscribe((translations) => {
//       this.translations = translations;
//     });
//   }
// }
import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../_services/language.service';


@Pipe({
  name: 'translateLazy',
  pure: false
})
export class TranslateLazyPipe implements PipeTransform {

  constructor(private readonly language: LanguageService) {}

  transform(value: string): string {

    return  this.language.translate(value).replace('?', '');
  }
}

