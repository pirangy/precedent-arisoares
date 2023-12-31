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
import Link from "next/link";
import Calendar from "@/components/shared/icons/calendar";

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
          <a href="https://spring.io/" target="_blank" rel="noreferrer">
            <SpringBoot
              className="h-10 w-10 rounded-full"
            />
          </a>
          <h3 className="font-display text-2xl font-bold">Spring</h3>
          <p className="text-sm text-gray-500">
            A micro-services based Java framework for the web. Spring is everywhere and what I love about it is how it makes Java programming swifter, more practical and comprehensible. If Java is not going anywhere any time soon, Spring will also remain as a go-to technology, especially in its Spring Boot modality.
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
