import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [TranslateModule, CommonModule],
  templateUrl: './navbar.component.html',
  styles: `
      .btn-len {
        height: 10%;
        width: 10%;
      }
  `,
  standalone: true
})
export class NavbarComponent {

  private currentLanguage = 'es';

  isMXLenguage = false;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang(this.currentLanguage);

  }

  public toggleLanguage() {
    this.currentLanguage = this.isMXLenguage ? 'es' : 'en';
    this.translate.use(this.currentLanguage);
    this.isMXLenguage = !this.isMXLenguage;
  }
}
