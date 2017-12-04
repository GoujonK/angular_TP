import { Component, OnInit } from '@angular/core';
import { Motherboard } from '../motherboards';
import { mb } from '../mock-mb';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-motherboards',
  templateUrl: './motherboards.component.html',
  styleUrls: ['./motherboards.component.css']
})
export class MotherboardComponent implements OnInit {

  motherboard: Motherboard[];

  selectedMB: Motherboard;

  constructor(private socketService: SocketService) {
    this.motherboards = mb;
  }

  ngOnInit() {
    this.getMotherboards();
  }

  onSelect(motherboards: Motherboard): void{
    this.selectedMB = motherboards;
  }

  getMotherboards(): void {
    this.motherboard = this.socketService.getMotherboards();
  }
}
