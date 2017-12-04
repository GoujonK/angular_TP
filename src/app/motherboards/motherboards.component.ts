import { Component, OnInit } from '@angular/core';
import { Motherboard } from '../motherboards';
import { mb } from '../mock-mb';

@Component({
  selector: 'app-motherboards',
  templateUrl: './motherboards.component.html',
  styleUrls: ['./motherboards.component.css']
})
export class MotherboardComponent implements OnInit {

  motherboards: Motherboard[];

  selectedMB: Motherboard;

  constructor() {
    this.motherboards = mb;
  }

  ngOnInit() {
  }

  onSelect(motherboards: Motherboard): void{
    this.selectedMB = motherboards;
  }
}
