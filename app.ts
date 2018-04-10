/**
 * A basic hello-world Angular 2 App
 */
import {
  NgModule,
  Component
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
@Component({
  selector: 'hello-world',
  template: `
  <div>
     Hello {{ name }}
   </div>
   `
})
class HelloWorld {
  name: string;
  constructor() {
    this.name = 'Jialiang';
  }
}
@NgModule({
  declarations: [ HelloWorld ],
  imports: [ BrowserModule ],
  bootstrap: [ HelloWorld ],
})
class HelloWorldAppModule {}

platformBrowserDynamic().bootstrapModule(HelloWorldAppModule);
