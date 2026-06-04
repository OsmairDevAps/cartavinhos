export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="rounded-2xl overflow-hidden border border-white/5 bg-gradient-to-b from-dark-700 to-dark-800">
          <div className="h-72 skeleton" />
          <div className="p-5 space-y-3">
            <div className="h-px skeleton" />
            <div className="h-7 w-3/4 skeleton rounded-lg" />
            <div className="h-3 w-1/2 skeleton rounded-md" />
            <div className="h-4 skeleton rounded-md" />
            <div className="h-4 w-5/6 skeleton rounded-md" />
          </div>
        </div>
      ))}
    </div>
  )
}
