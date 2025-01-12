import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';  // Import RouterModule
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { GameComponent } from './game/game.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent,GameComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([  // Ensure routes are configured here
      { path: '', component: MenuComponent },
      { path: 'game', component: GameComponent },
      { path: 'about', component: AboutComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
