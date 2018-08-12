import { Component } from '@angular/core';
import 'rosefire';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-app';

  public login() {
    Rosefire.signIn('ed282a1e-09d5-4511-a5ab-639280ea16fd', (err, user) => {
      console.log(user);
    });
  }
}
