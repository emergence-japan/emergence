import ContactForm from '@/components/ContactForm'

export default function TestFormPage() {
  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Contact Form Test</h1>
        <ContactForm />
      </div>
    </div>
  )
}
