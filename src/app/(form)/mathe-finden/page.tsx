import MultiStepForm from '@/components/MultiStepForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mathekurs finden | Mathekurse Zuhause',
  description: 'Finden Sie in wenigen Schritten den passenden Mathelehrer für Ihre Bedürfnisse.',
}

export default function MathefindenPage() {
  return (
    <div>
      <MultiStepForm />
    </div>
  )
}