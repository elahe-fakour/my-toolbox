import { useState } from 'react'
import { BaseModal } from '../../modals/BaseModal'
import { Button } from '../../components/atoms/Button'
import { faToEn, enToFa } from './utils'


type Props = {
  isOpen: boolean
  onClose: () => void
}

export function NumberConverterModal({ isOpen, onClose }: Props) {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState<'fa-en' | 'en-fa'>('fa-en')

  const convert = () => {
    setOutput(mode === 'fa-en' ? faToEn(input) : enToFa(input))
  }

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="تبدیل اعداد فارسی و انگلیسی">
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button
            variant={mode === 'fa-en' ? 'primary' : 'secondary'}
            onClick={() => setMode('fa-en')}
          >
            فارسی → English
          </Button>
          <Button
            variant={mode === 'en-fa' ? 'primary' : 'secondary'}
            onClick={() => setMode('en-fa')}
          >
            English → فارسی
          </Button>
        </div>

        <input
          className="w-full rounded-xl p-3 bg-white/60 border border-white/30"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <input
          readOnly
          className="w-full rounded-xl p-3 bg-white/80 border border-white/30"
          value={output}
        />

        <Button onClick={convert}>تبدیل</Button>
      </div>
    </BaseModal>
  )
}
