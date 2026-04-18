import { BaseModal } from "../../modals/BaseModal";
import { HourglassTimer } from "./HourglassTimer";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function HourglassModal({ isOpen, onClose }: Props) {
  return (
    <BaseModal title="تایمر ساعت شنی" isOpen={isOpen} onClose={onClose}>
      <HourglassTimer />
    </BaseModal>
  );
}
