export interface IFetchService {
  fakeFetch: () => Promise<string>;
  heartBeat: () => Promise<boolean | undefined>;
}
