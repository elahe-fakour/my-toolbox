import { BaseModal } from "../../modals/BaseModal";
import { NumberGuessGame } from "./NumberGuessGame";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function NumberGuessModal({ isOpen, onClose }: Props) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="بازی حدس عدد">
      <NumberGuessGame />
    </BaseModal>
  );
}
