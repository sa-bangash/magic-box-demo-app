export interface SubscriptionDTO {
  name: string;
  email: string;
  childName:string;
  dob: {
    date: string;
    month: string;
    year: string;
  };
  topics: string[];
  grade: string;
}
