import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MotherboardComponent } from './motherboards/motherboards.component';
import { CpuComponent } from './cpu/cpu.component';
import { RamComponent } from './ram/ram.component';
import { StorageComponent } from './storage/storage.component';
import { GpuComponent } from './gpu/gpu.component';


@NgModule({
  declarations: [
    AppComponent,
    MotherboardComponent,
    CpuComponent,
    RamComponent,
    StorageComponent,
    GpuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
