// components/mail.jsx

import { Envelope } from "lucide-preact"

const Mail = () => {
  return (
    <div className="flex items-center space-x-2">
      <Envelope className="h-4 w-4" />
      <span className="text-sm font-medium">mail@example.com</span>
    </div>
  )
}

export default Mail

