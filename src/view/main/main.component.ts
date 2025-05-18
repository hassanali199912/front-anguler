import { Component } from '@angular/core';

import { RouterOutlet } from "@angular/router"
import { NavComponent } from "../../components/nav/nav.component"
import { SideNavComponent } from "../../components/side-nav/side-nav.component"
@Component({
  selector: 'app-main',
  imports: [RouterOutlet, NavComponent, SideNavComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
