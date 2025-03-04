import { Button } from "./ui/button"
import { CheckCircle, XCircle } from "lucide-preact"

export function Result({ result, onReset }) {
  return (
    <div className="flex flex-col items-center justify-center h-[400px] text-center">
      {result.success ? (
        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
      ) : (
        <XCircle className="w-16 h-16 text-red-500 mb-4" />
      )}

      <h2 className={`text-xl font-bold ${result.success ? "text-green-700" : "text-red-700"} mb-2`}>
        {result.success ? "Success!" : "Error"}
      </h2>

      <p className="text-gray-700 mb-6">{result.message}</p>

      {result.details && !result.success && (
        <div className="bg-gray-100 p-3 rounded-md w-full mb-6 overflow-auto max-h-[150px] text-left">
          <pre className="text-xs text-red-600 whitespace-pre-wrap">{result.details}</pre>
        </div>
      )}

      <Button onClick={onReset} className="px-6">
        Send Another Email
      </Button>
    </div>
  )
}

