import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [
    RouterOutlet,
    RouterLink,
    TranslateModule,
    CommonModule
  ],
  templateUrl: './about.component.html',
  styles: ``,
  standalone: true
})
export class AboutComponent {

}
