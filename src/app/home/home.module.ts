import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { LoginModule } from './login/login.module';
import { AboutModule } from './about/about.module';
import { RankModule } from './rank/rank.module';
import { RegisterModule } from './register/register.module';
import { GameModule } from './game/game.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    LoginModule,
    AboutModule,
    RankModule,
    RegisterModule,
    GameModule
  ]
})
export class HomeModule {}
