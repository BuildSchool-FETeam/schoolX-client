import { Observable } from "rxjs";
import { NotificationModalType } from "store-sdk/modalStore/NotificationModal";

export interface INoticModalData {
  title: string;
  content: string;
  type: NotificationModalType;
}

export interface INotificationModalStore {
  modalData$: Observable<INoticModalData | undefined>;
  hide(): void;
  show(data: INoticModalData): void;
}
