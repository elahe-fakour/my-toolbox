import { BaseModal } from "../../modals/BaseModal";
import { MindfulBreathing } from "./MindfulBreathing";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function MindfulBreathingModal({ isOpen, onClose }: Props) {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="تنفس آگاهانه"
      titleClassName="
        bg-gradient-to-r from-sky-600 via-cyan-500 to-amber-400
        bg-clip-text text-transparent
        drop-shadow-md
      "
    >
      <MindfulBreathing />
    </BaseModal>
  );
}
