import { Component } from '@angular/core';
import { PromocoesSemanalComponent } from '../promocoes-semanal/promocoes-semanal.component';
import { FooterComponent } from "../../template/footer/footer.component";
import { HeaderComponent } from "../../template/header/header.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [PromocoesSemanalComponent, FooterComponent, HeaderComponent]
})
export class HomeComponent {

}
