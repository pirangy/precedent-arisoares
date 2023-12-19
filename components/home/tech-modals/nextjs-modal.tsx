import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";
import NextJS from "@/components/shared/icons/tech-icons/nextjs";

const NextJSModal = ({
  showNextJSModal,
  setShowNextJSModal,
}: {
  showNextJSModal: boolean;
  setShowNextJSModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showNextJSModal} setShowModal={setShowNextJSModal}>
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href="https://nextjs.org/">
            <NextJS
              className="h-10 w-10 rounded-full"
            />
          </a>
          <h3 className="font-display text-2xl font-bold">Next.js</h3>
          <p className="text-sm text-gray-500">
            My Next.js Work!
          </p>
        </div>
      </div>
    </Modal>
  );
};

export function useNextJSModal() {
  const [showNextJSModal, setShowNextJSModal] = useState(false);

  const NextJSModalCallback = useCallback(() => {
    return (
      <NextJSModal
        showNextJSModal={showNextJSModal}
        setShowNextJSModal={setShowNextJSModal}
      />
    );
  }, [showNextJSModal, setShowNextJSModal]);

  return useMemo(
    () => ({ setShowNextJSModal, NextJSModal: NextJSModalCallback }),
    [setShowNextJSModal, NextJSModalCallback],
  );
}
