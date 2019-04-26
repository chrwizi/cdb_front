import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('fr');
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit() {
  }

}
