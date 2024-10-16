import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'spa-static';

  holamundo() {
    console.log('hola mundo');
    console.log('hola mundo');
    console.log('hola mundo');
    console.log('hola mundo');
    console.log('hola mundo');
  }
}
