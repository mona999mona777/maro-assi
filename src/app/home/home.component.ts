import { Component, OnInit } from '@angular/core';
import { ApiserveService } from '../apiserve.service';
import { error } from 'console';
import { Idata } from '../idata';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
constructor(private _ApiserveService:ApiserveService){};
alldata:Idata[]=[];
ngOnInit(): void {
    this._ApiserveService.getdata().subscribe({
      next:(res)=>{
        this.alldata=res;
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }
}
