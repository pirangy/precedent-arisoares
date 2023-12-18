import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Bradesco from "@/components/shared/icons/client-icons/bradesco";

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
