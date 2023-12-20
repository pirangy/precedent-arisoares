import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import MetLife from "@/components/shared/icons/client-icons/metlife";
import Link from "next/link";
import Calendar from "@/components/shared/icons/calendar";

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
          <a href="https://www.metlife.com/" target="_blank" rel="noreferrer">
            <MetLife
              className="h-10 w-10 rounded-full"
            />
          </a>
          <h3 className="font-display text-2xl font-bold">DesignOps</h3>
          <p className="text-sm text-gray-500">
          Joined efforts to ensure Design System adoption for new products by fostering, validating and establishing a proper design operations flow that enhanced interactions between Dev, Product and Design teams.
          </p>
          <button className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
                >
            <Link href="https://calendar.app.google/PFSv56GCFqKjMcYm6" target="_blank" rel="noreferrer" className="flex items-center font-display text-2x1"> 
                <Calendar className="h-8 w-8 text-[#1d9bf0]"/>
                <p>Lets have a Chat!</p>
            </Link>
          </button>
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
