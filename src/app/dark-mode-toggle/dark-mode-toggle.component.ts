import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DarkModeService } from '../services/dark-mode-services/dark-mode.service';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.scss']
})
export class DarkModeToggleComponent implements OnInit {
  readonly darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  constructor(private darkModeService: DarkModeService) { }

  ngOnInit(): void {
  }

  onToggle(): void {
    this.darkModeService.toggle();
  }

}
