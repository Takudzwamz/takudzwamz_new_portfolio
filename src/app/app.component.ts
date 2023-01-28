import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'takudzwamz';
  

  constructor(private metaTagService: Meta) {}

  ngOnInit()  {
    this.metaTagService.addTags([
      {
        name: 'keywords',
        content:
          'Technology, Takudzwa Mupanesure, CSS, HTML, .Net, C#, Angular, NodeJs,Software development, Computer science, E-commerce, Android apps, iOS apps, Windows, macOS, .Net 6, ASP.NET Core, SQL, No- SQL, Mongodb, Mysql, Ctabot, Github, Software developer, dev, web, Спутник Тех, Андроидаб , веб, Разработка программного обеспечения, Разработка Android, Разработка iOS,разработка веб-сайта, интернет-магазин ',
      },
      { name: 'robots', content: 'index, follow' },
      
      {
        name: 'description',
        content:
          'Takudzwa Mupanesure is a full stake software developer  who develops modern web, desktop and mobile applications. If you like what I do please dont hesitate to contact me, lets work together',
      },
      { name: 'author', content: 'Takudzwa Mupanesure' },
      { name: 'twitter:card', content: 'Takudzwa Mupanesure' },
      {
        name: 'twitter:title',
        content:
          'Sputnik  Tech is a software development company that develops modern web, desktop and mobile applications.',
      },
      {
        name: 'twitter:description',
        content:
          'Takudzwa Mupanesure is a full stake software developer  who develops modern web, desktop and mobile applications. If you like what I do please dont hesitate to contact me, lets work together',
      },
      {
        name: 'twitter:image',
        content: 'https://res.cloudinary.com/dyzeuqi75/image/upload/v1635267108/ico_bbiqat.png',
      },
      
    ]);
  }
}
