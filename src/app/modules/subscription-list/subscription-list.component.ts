import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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
  subscription: any = [];

  @Input() selectedId?: any;

  constructor(
    private subscriptionDataService: SubscriptionDataService // private cdr: ChangeDetectorRef
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log('change', changes.selectedId.currentValue);
    this.subscription = [];

    // this._subscriptions$ = changes.selectedId.currentValue.tap(
    //   debounceTime(100),
    //   distinctUntilChanged(),
    //   this._subscriptions$.pipe(
    //     switchMap((subscription) =>
    //       subscription.filter((val) => val.id === this.selectedId)
    //     )
    //   )
    // );

    // this._subscriptions$
    //   .pipe(
    //     switchMap((subs) =>
    //       subs.filter((val) => val.userId === changes.selectedId.currentValue)
    //     )
    //   )
    //   .subscribe((data) => {
    //     console.log('dataa', data);

    //     this.subscription.push(data);
    //   });

    // this.cdr.detectChanges();

    this._subscriptions$
      .pipe(
        switchMap((subs) =>
          subs.filter((val) => val.userId === changes.selectedId.currentValue)
        )
      )
      .subscribe((data) => {
        console.log('dataa', data);

        this.subscription.push(data);
      });
  }
}
