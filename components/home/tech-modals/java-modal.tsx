import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";
import Java from "@/components/shared/icons/tech-icons/java";

const JavaModal = ({
  showJavaModal,
  setShowJavaModal,
}: {
  showJavaModal: boolean;
  setShowJavaModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showJavaModal} setShowModal={setShowJavaModal}>
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href="https://precedent.dev">
            <Java
              className="h-10 w-10 rounded-full"
            />
          </a>
          <h3 className="font-display text-2xl font-bold">Java</h3>
          <p className="text-sm text-gray-500">
            My Java Work!
          </p>
        </div>
      </div>
    </Modal>
  );
};

export function useJavaModal() {
  const [showJavaModal, setShowJavaModal] = useState(false);

  const JavaModalCallback = useCallback(() => {
    return (
      <JavaModal
        showJavaModal={showJavaModal}
        setShowJavaModal={setShowJavaModal}
      />
    );
  }, [showJavaModal, setShowJavaModal]);

  return useMemo(
    () => ({ setShowJavaModal, JavaModal: JavaModalCallback }),
    [setShowJavaModal, JavaModalCallback],
  );
}
