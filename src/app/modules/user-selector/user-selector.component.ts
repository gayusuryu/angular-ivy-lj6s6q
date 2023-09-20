import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { UserDataService } from '../../data-services/users.data-service';
import { User } from '../../models/user.model';

@Component({
  selector: 'user-selector',
  templateUrl: './user-selector.component.html',
  styleUrls: ['./user-selector.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSelectorComponent implements OnInit {
  _users$: Observable<User[]> = this.userDataService.getUsers();
  selectedId?: number;

  @Output() selectId: EventEmitter<number> = new EventEmitter<number>();

  constructor(private userDataService: UserDataService) {
    console.log(this._users$);
    this._users$ = this._users$.pipe(
      map((user) => user.filter((value) => value.age > 18))
    );
  }

  ngOnInit() {}

  getId() {
    this.selectId.emit(this.selectedId);
  }
}
