import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { User } from './components/user/user';
import { Admin } from './components/admin/admin';
import { DataBinding } from './components/data-binding/data-binding';
import { ControlFlow } from './components/control-flow/control-flow';
import { Attribute } from './components/attribute/attribute';
import { Photos } from './components/photos/photos';
@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive, User, Admin, DataBinding, ControlFlow, Attribute, Photos],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Angular_Project');
}
