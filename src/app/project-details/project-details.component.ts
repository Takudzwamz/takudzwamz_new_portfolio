import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CanonicalService } from '../services/canonical.service';
import { ContentfulProjectsService } from '../services/contentful-projects.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private canonicalService: CanonicalService,
    private contentfulProjectsService: ContentfulProjectsService,
    private metaTagService: Meta
  ) { }

  projectPost$: Observable<any> | undefined;

  ngOnInit(): void {
    this.canonicalService.setCanonicalURL();
    this.title.setTitle('Project details page');
    this.metaTagService.updateTag({
      name: 'description',
      content: 'Sputnik Tech project details',
    });
    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.projectPost$ = this.contentfulProjectsService.getEntryById(id);
      }
    );
  }

}
