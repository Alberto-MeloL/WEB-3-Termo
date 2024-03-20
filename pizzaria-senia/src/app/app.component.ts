import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { PromocoesSemanalComponent } from './view/promocoes-semanal/promocoes-semanal.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroServiceService } from './service/cadastro-service.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HttpClientModule, HeaderComponent, FooterComponent, PromocoesSemanalComponent],
  templateUrl: './app.component.html',
  providers: [CadastroServiceService],//porque colocar isso
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pizzaria-senia';
}
