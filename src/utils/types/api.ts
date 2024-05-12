export interface ResponsePayload<T = any> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}
