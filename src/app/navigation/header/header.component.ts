import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // Make the event listenable from the outside
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {

  }

  onToggleSidenav() {
    // used on click of the hamburger button
    // When clicked, need to emit the click event to the parent
    this.sidenavToggle.emit();
  }
}
