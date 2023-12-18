import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import MetLife from "@/components/shared/icons/client-icons/metlife";

const MetLifeModal = ({
  showMetLifeModal,
  setShowMetLifeModal,
}: {
  showMetLifeModal: boolean;
  setShowMetLifeModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showMetLifeModal} setShowModal={setShowMetLifeModal}>
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href="https://www.metlife.com/">
            <MetLife
              className="h-10 w-10 rounded-full"
            />
          </a>
          <h3 className="font-display text-2xl font-bold">MetLife</h3>
          <p className="text-sm text-gray-500">
            My MetLife Work!
          </p>
        </div>
      </div>
    </Modal>
  );
};

export function useMetLifeModal() {
  const [showMetLifeModal, setShowMetLifeModal] = useState(false);

  const MetLifeModalCallback = useCallback(() => {
    return (
      <MetLifeModal
        showMetLifeModal={showMetLifeModal}
        setShowMetLifeModal={setShowMetLifeModal}
      />
    );
  }, [showMetLifeModal, setShowMetLifeModal]);

  return useMemo(
    () => ({ setShowMetLifeModal, MetLifeModal: MetLifeModalCallback }),
    [setShowMetLifeModal, MetLifeModalCallback],
  );
}
