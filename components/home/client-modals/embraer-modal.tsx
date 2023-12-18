import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Embraer from "@/components/shared/icons/client-icons/embraer";

const EmbraerModal = ({
  showEmbraerModal,
  setShowEmbraerModal,
}: {
  showEmbraerModal: boolean;
  setShowEmbraerModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showEmbraerModal} setShowModal={setShowEmbraerModal}>
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href="https://embraer.com/" target="_blank" rel="noreferrer">
            <Embraer
              className="h-10 w-10 rounded-full"
            />
          </a>
          <h3 className="font-display text-2xl font-bold">UI Developer</h3>
          <p className="text-sm text-gray-500">
          Integrated efforts to optimize the main CRM platform in times of high pressure due to significant shifts in demand occasioned by the military situation in Ukraine and its global impacts. High demand for expectations and conflicts management.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export function useEmbraerModal() {
  const [showEmbraerModal, setShowEmbraerModal] = useState(false);

  const EmbraerModalCallback = useCallback(() => {
    return (
      <EmbraerModal
        showEmbraerModal={showEmbraerModal}
        setShowEmbraerModal={setShowEmbraerModal}
      />
    );
  }, [showEmbraerModal, setShowEmbraerModal]);

  return useMemo(
    () => ({ setShowEmbraerModal, EmbraerModal: EmbraerModalCallback }),
    [setShowEmbraerModal, EmbraerModalCallback],
  );
}
