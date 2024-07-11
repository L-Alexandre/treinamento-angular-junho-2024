import { Component } from '@angular/core';
import { MenuItem } from './interfaces/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'treinamento-angular-junho-2024';

  exibirAlerta(has: string){
    alert(`O palmeiras ${has} mundial`);
  }
}
