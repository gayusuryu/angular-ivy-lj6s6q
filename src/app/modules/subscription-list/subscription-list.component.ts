import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SubscriptionDataService } from '../../data-services/subscriptions.data-service';
import { Subscription } from '../../models/subscription.model';

@Component({
  selector: 'subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubscriptionListComponent {
  _subscriptions$: Observable<
    Subscription[]
  > = this.subscriptionDataService.getSubscriptions();

  constructor(private subscriptionDataService: SubscriptionDataService) {
      // this._subscriptions$ = 
  }
}
