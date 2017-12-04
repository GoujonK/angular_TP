import { Component, OnInit } from '@angular/core';
import { Hdd } from '../hdd';
import { hdd } from '../mock-hdd';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})

export class StorageComponent implements OnInit {

  hdd: Hdd[];

  selectedHDD: Hdd;

  constructor() {
    this.hdd = hdd;
  }

  ngOnInit() {
  }

  onSelect(hdd: Hdd): void{
    this.selectedHDD = hdd;
  }
}
