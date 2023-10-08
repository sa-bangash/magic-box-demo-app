import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Topic } from '../models/topic.model';
import { TOPIC_STUB } from '../stub.data/topic.stub';
import { SubscriptionDTO } from '../dto/subscription.dto';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  fetchTopics(): Observable<Topic[]> {
    return of(TOPIC_STUB);
  }

  createSubscriptoin(sub: SubscriptionDTO) {
    return of(sub);
  }
}
