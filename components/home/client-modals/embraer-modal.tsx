import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Embraer from "@/components/shared/icons/client-icons/embraer";
import Link from "next/link";
import Calendar from "@/components/shared/icons/calendar";

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
