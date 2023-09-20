import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Subscription } from '../models/subscription.model';

export class SubscriptionDataService {
  private subscriptions: Subscription[] = [
    {
      id: '1',
      userId: '1',
      name: 'Mobile service',
      price: 2.2
    },
    {
      id: '2',
      userId: '1',
      name: 'Text service',
      price: 0.44
    },
    {
      id: '3',
      userId: '2',
      name: 'Mobile service',
      price: 3.1
    },
    {
      id: '1',
      userId: '3',
      name: 'Mobile service',
      price: 5
    },
    {
      id: '2',
      userId: '3',
      name: 'Text service',
      price: 66.98
    },
    {
      id: '3',
      userId: '3',
      name: 'Abroad charges',
      price: 12.4
    }
  ];

  public getSubscriptions(): Observable<Subscription[]> {
    return of(this.subscriptions);
  }
}
