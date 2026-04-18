import { BaseModal } from "../..//modals/BaseModal"
import { Calculator } from "./Calculator";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function CalculatorModal({ isOpen, onClose }: Props) {
  return (
    <BaseModal title="ماشین حساب" isOpen={isOpen} onClose={onClose}>
      <Calculator />
    </BaseModal>
  );
}
