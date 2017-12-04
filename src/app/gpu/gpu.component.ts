import { Component, OnInit } from '@angular/core';
import { Gpu } from '../gpu';
import { gpu } from '../mock-gpu';

@Component({
  selector: 'app-gpu',
  templateUrl: './gpu.component.html',
  styleUrls: ['./gpu.component.css']
})
export class GpuComponent implements OnInit {

  gpu: Gpu[];

  selectedGPU: Gpu;

  constructor() {
    this.gpu = gpu;
  }

  ngOnInit() {
  }

  onSelect(gpu: Gpu): void{
    this.selectedGPU = gpu;
  }
}
