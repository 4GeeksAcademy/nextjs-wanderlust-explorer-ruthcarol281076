export default function SkeletonCard() {
  return (
    <article
      className="flex flex-col rounded-xl bg-white shadow-sm overflow-hidden border border-gray-100 animate-pulse"
      aria-hidden="true"
    >
      {/* Image placeholder */}
      <div className="aspect-[4/3] bg-gray-200" />
      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <div className="flex items-start justify-between gap-2">
          <div className="h-5 bg-gray-200 rounded w-3/4" />
          <div className="h-4 w-8 bg-gray-200 rounded shrink-0" />
        </div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded w-full" />
          <div className="h-3 bg-gray-200 rounded w-5/6" />
        </div>
        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 bg-gray-200 rounded" />
            <div className="h-3 bg-gray-200 rounded w-20" />
          </div>
          <div className="h-4 bg-gray-200 rounded w-12" />
        </div>
      </div>
    </article>
  );
}