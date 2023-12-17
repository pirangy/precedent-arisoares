import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";

const TypeScriptModal = ({
  showTypeScriptModal,
  setShowTypeScriptModal,
}: {
  showTypeScriptModal: boolean;
  setShowTypeScriptModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showTypeScriptModal} setShowModal={setShowTypeScriptModal}>
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href="https://precedent.dev">
            <Image
              src="/logo.png"
              alt="Precedent Logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </a>
          <h3 className="font-display text-2xl font-bold">TypeScript</h3>
          <p className="text-sm text-gray-500">
           My TypeScript Work!
          </p>
        </div>
      </div>
    </Modal>
  );
};

export function useTypeScriptModal() {
  const [showTypeScriptModal, setShowTypeScriptModal] = useState(false);

  const TypeScriptModalCallback = useCallback(() => {
    return (
      <TypeScriptModal
        showTypeScriptModal={showTypeScriptModal}
        setShowTypeScriptModal={setShowTypeScriptModal}
      />
    );
  }, [showTypeScriptModal, setShowTypeScriptModal]);

  return useMemo(
    () => ({ setShowTypeScriptModal, TypeScriptModal: TypeScriptModalCallback }),
    [setShowTypeScriptModal, TypeScriptModalCallback],
  );
}
