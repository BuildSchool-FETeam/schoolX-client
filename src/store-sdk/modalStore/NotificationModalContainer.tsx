/* eslint-disable react-hooks/exhaustive-deps */
import { useDisclosure } from "@chakra-ui/react";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { useInjection } from "store-sdk/ioc-container/ioc.context";
import { Symbols } from "store-sdk/ioc-container/symbols";
import {
  INotificationModalStore,
  INoticModalData,
} from "store-sdk/modalServices/interfaces";
import { NotificationModal } from "./NotificationModal";

interface INotificationContainer extends PropsWithChildren<any> {}

export const NotificationModalContainer = (props: INotificationContainer) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [modalData, setModalData] = useState<INoticModalData>();

  const notificationModalStore = useInjection<INotificationModalStore>(
    Symbols.INotificationModalStore
  );

  function _onClose() {
    notificationModalStore.hide();
  }

  useEffect(() => {
    const subNotic = notificationModalStore.modalData$.subscribe((data) => {
      if (data) {
        onOpen();
        setModalData(data);
      } else {
        onClose();
        setModalData(undefined);
      }
    });

    return () => {
      subNotic.unsubscribe();
    };
  }, []);

  return (
    <>
      {props.children}
      <NotificationModal
        title={modalData?.title}
        isOpen={isOpen}
        onClose={_onClose}
        content={modalData?.content}
        type={modalData?.type}
      ></NotificationModal>
    </>
  );
};
