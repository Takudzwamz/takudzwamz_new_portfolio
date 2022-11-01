import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from "rxjs";
import { CanonicalService } from '../services/canonical.service';
import {ContentfulProjectsService } from '../services/contentful-projects.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {


  constructor(
    private title: Title,
    private canonicalService: CanonicalService,
    private contentfulProjectsService: ContentfulProjectsService,
    private metaTagService: Meta
  ) { }

  // Get the projects from Contentful
  projectPosts$ : Observable<any> | undefined;

  ngOnInit(): void {
    this.projectPosts$ = this.contentfulProjectsService.getAllEntries();
    this.title.setTitle('Projects');
    this.canonicalService.setCanonicalURL();
    this.metaTagService.updateTag(
      { name: 'description', content: 'Projects' }
    );
  }
}
