import { Injectable } from '@angular/core';
import { Cpu } from './cpu'
import { cpu } from './mock-cpu'
import { Motherboard } from './motherboards'
import { mb } from './mock-mb'

@Injectable()
export class SocketService {

  constructor() { }

  getMotherboards(): Motherboard[]{
    return mb;
  }

}
