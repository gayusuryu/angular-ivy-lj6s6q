import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SubscriptionDataService } from '../../data-services/subscriptions.data-service';
import { Subscription } from '../../models/subscription.model';

@Component({
  selector: 'subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscriptionListComponent implements OnChanges {
  _subscriptions$: Observable<Subscription[]> =
    this.subscriptionDataService.getSubscriptions();

  @Input() selectedId?: number;

  constructor(private subscriptionDataService: SubscriptionDataService) {
  }

  ngOnChanges() {
    console.log(this.selectedId);
    this._subscriptions$ = this._subscriptions$.pipe(
      map((user) => {
        console.log('user1', user);
        return user;
      })
    );
  }
}
