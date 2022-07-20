import { animation, style } from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'SPAPresentacion';
  background: boolean=true;
  DOM: boolean=false;
  NombreUsuario: any;
  button:any;
  formulario:any;
  

  
  
  
  
  public async getInputValue(inputValue:string){
    console.log(inputValue);
     this.NombreUsuario = (inputValue);
    
  
}

  Ocultar() {
    if (this.getInputValue){
        this.background=false;
        this.DOM=true;
        this.getInputValue;
        
        
}
}


}









  












