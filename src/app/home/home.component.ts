import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CanonicalService } from '../services/canonical.service';



/**
 * @title Basic cards
 */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class HomeComponent implements OnInit {
  
  constructor(
    config: NgbCarouselConfig,
    private title: Title,
    private canonicalService: CanonicalService
  ) { 
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    config.interval = 8000; // images change in 8sec //
    config.wrap = true; // autometically redirect to first image //
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  showNavigationArrows = false;
  showNavigationIndicators = false;
  public images = [
    'https://res.cloudinary.com/dyzeuqi75/image/upload/v1636054776/WhatsApp_Image_2021-11-04_at_21.31.18_5_f5tecq.jpg',

    'https://res.cloudinary.com/dyzeuqi75/image/upload/v1636054778/WhatsApp_Image_2021-11-04_at_21.31.18_8_lv0he9.jpg',

    'https://res.cloudinary.com/dyzeuqi75/image/upload/v1636054775/WhatsApp_Image_2021-11-04_at_21.31.18_2_l0ne0i.jpg',

    'https://res.cloudinary.com/dyzeuqi75/image/upload/v1636054777/WhatsApp_Image_2021-11-04_at_21.31.18_7_j5muwr.jpg',
  ];
  titles = ['iOS', 'Android', 'Web Apps', 'Cross-platform Apps'];
  discription = [
    'iOS mobile applications',
    'Android mobile applications',
    'Any type of website',
    'Same app working on iOS, Android and Web ',
  ];

  ngOnInit(): void {
    this.canonicalService.setCanonicalURL();
    this.title.setTitle('Takudzwa Mupanesure');
    
    
    
  }

}
