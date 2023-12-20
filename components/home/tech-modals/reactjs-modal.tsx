import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";
import ReactJS from "@/components/shared/icons/tech-icons/react";
import Link from "next/link";
import Calendar from "@/components/shared/icons/calendar";

const ReactJSModal = ({
  showReactJSModal,
  setShowReactJSModal,
}: {
  showReactJSModal: boolean;
  setShowReactJSModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showReactJSModal} setShowModal={setShowReactJSModal}>
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href="https://react.dev/">
            <ReactJS
              className="h-10 w-10 rounded-full"
            />
          </a>
          <h3 className="font-display text-2xl font-bold">React.js</h3>
          <p className="text-sm text-gray-500">
            Dynamic, component based web library. What I love about React is how dynamic the JSX syntax is and how practical the development process becomes with it, especially when combined with TypeScript. The ability to combine both logic and rendering in the same component while being familiar to HTML is simply wonderful. Makes coding interesting and elegant!  
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

export function useReactJSModal() {
  const [showReactJSModal, setShowReactJSModal] = useState(false);

  const ReactJSModalCallback = useCallback(() => {
    return (
      <ReactJSModal
        showReactJSModal={showReactJSModal}
        setShowReactJSModal={setShowReactJSModal}
      />
    );
  }, [showReactJSModal, setShowReactJSModal]);

  return useMemo(
    () => ({ setShowReactJSModal, ReactJSModal: ReactJSModalCallback }),
    [setShowReactJSModal, ReactJSModalCallback],
  );
}
