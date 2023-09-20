import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs/operators';
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

  @Input() selectedId?: any;

  constructor(private subscriptionDataService: SubscriptionDataService) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.selectedId);
    console.log('change', changes.selectedId.currentValue);

    // this._subscriptions$ = this.selectedId.
    this._subscriptions$ = this._subscriptions$.pipe(
      map((user) => {
        console.log('user1', user);
        return user;
      })
    );

    this._subscriptions$ = changes.selectedId.currentValue.tap(
      debounceTime(100),
      distinctUntilChanged(),
      this._subscriptions$.pipe(
        switchMap((subscription) =>
          subscription.filter((val) => val.id === this.selectedId)
        )
      )
    );
  }
}
