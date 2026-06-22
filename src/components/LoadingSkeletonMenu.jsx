export default function LoadingSkeletonMenu() {
  return (
    <div className="grid grid-cols-1 gap-6">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="rounded overflow-hidden border border-white/5 bg-gradient-to-b from-dark-300 to-dark-500">
          <div className="h-6 w-72 skeleton-menu" />
          <div className="my-2">
            <div className="my-2 h-4 skeleton-menu" />
            <div className="h-4  skeleton-menu" />
          </div>
        </div>
      ))}
    </div>
  )
}
