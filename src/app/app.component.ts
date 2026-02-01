import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Islem ARGOUBI | Full Stack Web Developer");
    this.metaService.addTags([
      { name: 'keywords', content: 'Web, software, developer' },
      { name: 'description', content: 'Passionate about technology and software development, eager to create impactful digital solutions and continuously learn new skills.' },
    ]);

    AOS.init();
  }
}
