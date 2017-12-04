import { Component, OnInit } from '@angular/core';
import { Cpu } from '../cpu';
import { cpu } from '../mock-cpu';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.css']
})
export class CpuComponent implements OnInit {

  cpu: Cpu[];

  selectedCPU: Cpu;

  constructor() {
    this.cpu = cpu;
  }

  ngOnInit() {
  }

  onSelect(cpu: Cpu): void{
    this.selectedCPU = cpu;
  }
}
