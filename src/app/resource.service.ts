import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Resource } from './resource';
import { RESOURCES } from './mock-resources';
import { MessageService } from './message.service';


@Injectable()
export class ResourceService {

  constructor(private messageService: MessageService) { }

  getResources(): Observable<Resource[]> {
    this.messageService.add('ResourceService: fetched resources');
    return of(RESOURCES);
  }

}
