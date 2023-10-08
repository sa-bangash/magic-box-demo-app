import { TestBed, inject } from '@angular/core/testing';
import { SubscriptionService } from './subscription.service';
import { Topic } from '../models/topic.model';
import { TOPIC_STUB } from '../stub.data/topic.stub';
import { SubscriptionDTO } from '../dto/subscription.dto';
import { of } from 'rxjs';

describe('SubscriptionService', () => {
  let service: SubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubscriptionService],
    });
    service = TestBed.inject(SubscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('fetchTopics', () => {
    it('should return an Observable of topics', (done: DoneFn) => {
      service.fetchTopics().subscribe((topics: Topic[]) => {
        expect(topics).toEqual(TOPIC_STUB);
        done();
      });
    });
  });

  describe('createSubscription', () => {
    it('should return an Observable of a SubscriptionDTO', (done: DoneFn) => {
      const mockSubscription: SubscriptionDTO = {
        name: 'ahmad',
        email: 'ahmad@g.com',
        childName: 'kamran',
        dob: {
          date: '1',
          month: '10',
          year: '2000',
        },
        topics: [],
        grade: '1',
      };

      service
        .createSubscription(mockSubscription)
        .subscribe((result: SubscriptionDTO) => {
          expect(result).toEqual(mockSubscription);
          done();
        });
    });
  });
});
