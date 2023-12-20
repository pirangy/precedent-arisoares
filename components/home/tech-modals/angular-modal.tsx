import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Angular from "@/components/shared/icons/tech-icons/angular";
import Calendar from "@/components/shared/icons/calendar";
import Link from "next/link";

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
          <a href="https://angular.io/">
            <Angular
              className="h-10 w-10 rounded-full"
            />
          </a>
          <h3 className="font-display text-2xl font-bold">Angular</h3>
          <p className="text-sm text-gray-500">
          A robust, object-oriented, full-stack framework for the Web. Working with Angular is always exciting because of its swift and practical scalability for Web REST applications and integrations with new paradigms such as RxJS.
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
