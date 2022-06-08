export interface IFetchService {
  heartBeat: () => Promise<boolean | undefined>;
}
