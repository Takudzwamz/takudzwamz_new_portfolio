import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-select-language',
  template: `
    <select #langSelect (change)="translate.use(langSelect.value)">
      <option
        *ngFor="let lang of translate.getLangs()"
        [value]="lang"
        [attr.selected]="lang === translate.currentLang ? '' : null"
      >{{lang}}</option>
    </select>
  `,
  styles: [
    'select { font-size: 0.9em; background-color: transparent; border-radius : 10px; margin-bottom: 8px; padding: 1px; color: black; border: solid #6C55F9;}',
    'option { background-color: #6C55F9; color: white; }'
  ]
})
export class SelectLanguageComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}
