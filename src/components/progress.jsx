export function Progress() {
  return (
    <div className="flex flex-col items-center justify-center h-[400px]">
      <div className="w-16 h-16 border-t-4 border-primary border-solid rounded-full animate-spin"></div>
      <p className="mt-6 text-lg font-medium text-gray-700">Sending email...</p>
      <p className="mt-2 text-sm text-gray-500">This may take a few seconds</p>
    </div>
  )
}

