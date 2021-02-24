import { Component } from '@angular/core';
import { faCoffee, faThumbsUp , faSkullCrossbones, faRadiation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'warning-et-success';
  //faCoffee = faCoffee;
  faThumbsUp = faThumbsUp;
  faSkullCrossbones = faSkullCrossbones;
}
