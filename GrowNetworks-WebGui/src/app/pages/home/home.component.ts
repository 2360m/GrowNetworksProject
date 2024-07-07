import { Component } from '@angular/core';
import {AbosComponent} from "../../components/packages/abos.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AbosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
