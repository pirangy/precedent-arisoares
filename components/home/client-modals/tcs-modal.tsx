import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import TCS from "@/components/shared/icons/client-icons/tcs";

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
          <a href="https://www.tcs.com/">
            <TCS
              className="h-10 w-10 rounded-full"
            />
          </a>
          <h3 className="font-display text-2xl font-bold">Systems Engineer</h3>
          <p className="text-sm text-gray-500">
            Worked on projects involving CRM, CMS systems, Digital Transformation and Agile Adoption. Participated of global teams with collaborators from 5+ different nationalities on LATAM, Asia and North America.
          </p>
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
