import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
menuHamburguer: boolean = false;

openMenu(): void{
  this.menuHamburguer != this.menuHamburguer
}

}
