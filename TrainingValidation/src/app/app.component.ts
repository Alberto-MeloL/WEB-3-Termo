import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CadatroLoginComponent } from "./cadatro-login/cadatro-login.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, CadatroLoginComponent] //componentes <-----
})
export class AppComponent {
  title = 'TrainingValidation';
}
