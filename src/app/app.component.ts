import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private menuStates = {
    showLeft: false,
    showCenter: true,
    showRight: false,
  };

  constructor(private router:Router) {
    this.router.navigate(['/grades']);
  }

  ngOnInit() {
    
  }

  showMenu() {
    this.menuStates.showLeft = !this.menuStates.showLeft;
  }


  selectMenuOptionReceiver($event) {
    this.router.navigate([`/${$event.route}`]);
  }
}
