import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HelpModule } from './help/help.module';
import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AuthenticationModule, HelpModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
