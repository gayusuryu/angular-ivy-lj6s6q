import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SubscriptionDataService } from './data-services/subscriptions.data-service';
import { UserSelectorComponent } from './modules/user-selector/user-selector.component';
import { SubscriptionListComponent } from './modules/subscription-list/subscription-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule, ReactiveFormsModule],
  declarations: [AppComponent, UserSelectorComponent, SubscriptionListComponent],
  bootstrap: [AppComponent],
  providers: [SubscriptionDataService]
})
export class AppModule {}
