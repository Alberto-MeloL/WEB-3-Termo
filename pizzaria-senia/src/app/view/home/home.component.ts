import { Component } from '@angular/core';
import { PromocoesSemanalComponent } from '../promocoes-semanal/promocoes-semanal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PromocoesSemanalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
