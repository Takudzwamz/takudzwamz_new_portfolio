import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentfulProjectsService {

  constructor() { }

  private client = createClient({
    space: environment.projspaceId,
    accessToken: environment.projaccessToken
  });

  getAllEntries(){
    const promise = this.client.getEntries()
    return from(promise);
  }

  getEntryById(id: string){
    const promise = this.client.getEntry(id);
    return from(promise);
  }
}
