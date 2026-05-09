import { BaseModal } from "../../modals/BaseModal";
import { TextCounter } from "./TextCounter";

interface Props {
  isOpen: boolean; // اینجا از open به isOpen تغییر کرد
  onClose: () => void;
}

export function TextCounterModal({ isOpen, onClose }: Props) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Text Counter">
      <TextCounter />
    </BaseModal>
  );
}
