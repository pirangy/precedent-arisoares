import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Bradesco from "@/components/shared/icons/client-icons/bradesco";
import Link from "next/link";
import Calendar from "@/components/shared/icons/calendar";

const BradescoModal = ({
  showBradescoModal,
  setShowBradescoModal,
}: {
  showBradescoModal: boolean;
  setShowBradescoModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showBradescoModal} setShowModal={setShowBradescoModal}>
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href="https://banco.bradesco/html/classic/index.shtm" target="_blank" rel="noreferrer">
            <Bradesco
              className="h-10 w-10 rounded-full"
            />
          </a>
          <h3 className="font-display text-2xl font-bold">UI Designer</h3>
          <p className="text-sm text-gray-500">
          Worked closely with Product and Development teams to insure seamless experiences for Credit Card, Loan clients looking for the best and most suitable options to their needs. Participated in strategic projects involving collaborations with Disney and other major Tourism and Entertainment Brands.
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

export function useBradescoModal() {
  const [showBradescoModal, setShowBradescoModal] = useState(false);

  const BradescoModalCallback = useCallback(() => {
    return (
      <BradescoModal
        showBradescoModal={showBradescoModal}
        setShowBradescoModal={setShowBradescoModal}
      />
    );
  }, [showBradescoModal, setShowBradescoModal]);

  return useMemo(
    () => ({ setShowBradescoModal, BradescoModal: BradescoModalCallback }),
    [setShowBradescoModal, BradescoModalCallback],
  );
}
