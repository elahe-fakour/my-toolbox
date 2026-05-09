import { BaseModal } from "../../modals/BaseModal";
import { PasswordGenerator } from "./PasswordGenerator";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function PasswordGeneratorModal({ isOpen, onClose }: Props) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="تولید رمز عبور">
      <PasswordGenerator />
    </BaseModal>
  );
}
