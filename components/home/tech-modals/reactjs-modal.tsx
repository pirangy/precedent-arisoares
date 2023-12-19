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
            My React.js Work!
          </p>
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
