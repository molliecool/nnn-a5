import { Component, OnInit } from '@angular/core';

import { Resource } from '../resource';
import { RESOURCES } from '../mock-resources';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})


export class ResourcesComponent implements OnInit {

  resources: Resource[];
  selectedResource: Resource;


  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    this.getResources();
  }

  getResources(): void {
    this.resourceService.getResources().subscribe(resources => this.resources = resources);
  }

  onSelect(resource: Resource): void {
    this.selectedResource = resource;
  }

}
