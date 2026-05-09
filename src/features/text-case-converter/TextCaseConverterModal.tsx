import { BaseModal } from "../../modals/BaseModal";
import { TextCaseConverter } from "./TextCaseConverter";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function TextCaseConverterModal({ isOpen, onClose }: Props) {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="مبدل متن (کوچک / بزرگ)"
    >
      <TextCaseConverter />
    </BaseModal>
  );
}
