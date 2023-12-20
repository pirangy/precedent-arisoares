import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import TCS from "@/components/shared/icons/client-icons/tcs";
import Link from "next/link";
import Calendar from "@/components/shared/icons/calendar";

const TCSModal = ({
  showTCSModal,
  setShowTCSModal,
}: {
  showTCSModal: boolean;
  setShowTCSModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showTCSModal} setShowModal={setShowTCSModal}>
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href="https://www.tcs.com/" target="_blank" rel="noreferrer">
            <TCS
              className="h-10 w-10 rounded-full"
            />
          </a>
          <h3 className="font-display text-2xl font-bold">Systems Engineer</h3>
          <p className="text-sm text-gray-500">
            Worked on projects involving CRM, CMS systems, Digital Transformation and Agile Adoption. Participated of global teams with collaborators from 5+ different nationalities on LATAM, Asia and North America.
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

export function useTCSModal() {
  const [showTCSModal, setShowTCSModal] = useState(false);

  const TCSModalCallback = useCallback(() => {
    return (
      <TCSModal
        showTCSModal={showTCSModal}
        setShowTCSModal={setShowTCSModal}
      />
    );
  }, [showTCSModal, setShowTCSModal]);

  return useMemo(
    () => ({ setShowTCSModal, TCSModal: TCSModalCallback }),
    [setShowTCSModal, TCSModalCallback],
  );
}
