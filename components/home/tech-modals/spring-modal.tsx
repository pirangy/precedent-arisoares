import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";
import SpringBoot from "@/components/shared/icons/tech-icons/springboot";

const SpringModal = ({
  showSpringModal,
  setShowSpringModal,
}: {
  showSpringModal: boolean;
  setShowSpringModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showSpringModal} setShowModal={setShowSpringModal}>
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href="https://precedent.dev">
            <SpringBoot
              className="h-10 w-10 rounded-full"
            />
          </a>
          <h3 className="font-display text-2xl font-bold">Spring</h3>
          <p className="text-sm text-gray-500">
            My Spring Work!
          </p>
        </div>
      </div>
    </Modal>
  );
};

export function useSpringModal() {
  const [showSpringModal, setShowSpringModal] = useState(false);

  const SpringModalCallback = useCallback(() => {
    return (
      <SpringModal
        showSpringModal={showSpringModal}
        setShowSpringModal={setShowSpringModal}
      />
    );
  }, [showSpringModal, setShowSpringModal]);

  return useMemo(
    () => ({ setShowSpringModal, SpringModal: SpringModalCallback }),
    [setShowSpringModal, SpringModalCallback],
  );
}
