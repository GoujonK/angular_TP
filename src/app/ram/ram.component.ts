import { Component, OnInit } from '@angular/core';
import { Ram } from '../ram';
import { ram } from '../mock-ram';

@Component({
  selector: 'app-ram',
  templateUrl: './ram.component.html',
  styleUrls: ['./ram.component.css']
})
export class RamComponent implements OnInit {

  ram: Ram[];

  selectedRAM: Ram;

  constructor() {
    this.ram = ram;
  }

  ngOnInit() {
  }

  onSelect(ram: Ram): void{
    this.selectedRAM = ram;
  }
}
