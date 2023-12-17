import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";
import Angular from "@/components/shared/icons/tech-icons/angular";

const AngularModal = ({
  showAngularModal,
  setShowAngularModal,
}: {
  showAngularModal: boolean;
  setShowAngularModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showAngularModal} setShowModal={setShowAngularModal}>
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href="https://precedent.dev">
            <Angular
              className="h-10 w-10 rounded-full"
            />
          </a>
          <h3 className="font-display text-2xl font-bold">Angular</h3>
          <p className="text-sm text-gray-500">
            My Angular Work!
          </p>
        </div>
      </div>
    </Modal>
  );
};

export function useAngularModal() {
  const [showAngularModal, setShowAngularModal] = useState(false);

  const AngularModalCallback = useCallback(() => {
    return (
      <AngularModal
        showAngularModal={showAngularModal}
        setShowAngularModal={setShowAngularModal}
      />
    );
  }, [showAngularModal, setShowAngularModal]);

  return useMemo(
    () => ({ setShowAngularModal, AngularModal: AngularModalCallback }),
    [setShowAngularModal, AngularModalCallback],
  );
}
