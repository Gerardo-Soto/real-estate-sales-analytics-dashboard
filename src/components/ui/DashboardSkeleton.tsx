function SkeletonBlock({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-gray-200 ${className}`}
    />
  );
}


export default function DashboardSkeleton() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
          <div>
            <SkeletonBlock className="h-4 w-44" />
            <SkeletonBlock className="mt-3 h-9 w-72" />
            <SkeletonBlock className="mt-3 h-4 w-96 max-w-full" />
          </div>

          <div className="min-w-[360px] rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <SkeletonBlock className="h-3 w-32" />

            <div className="mt-4 flex gap-6">
              <div>
                <SkeletonBlock className="h-3 w-12" />
                <SkeletonBlock className="mt-2 h-6 w-20" />
              </div>

              <div>
                <SkeletonBlock className="h-3 w-12" />
                <SkeletonBlock className="mt-2 h-6 w-20" />
              </div>

              <div>
                <SkeletonBlock className="h-3 w-10" />
                <SkeletonBlock className="mt-2 h-6 w-16" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <SkeletonBlock className="h-10 w-44" />
          <SkeletonBlock className="h-10 w-36" />
          <SkeletonBlock className="h-10 w-32" />
        </div>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map(
            (_, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <SkeletonBlock className="h-4 w-28" />
                <SkeletonBlock className="mt-4 h-8 w-32" />
                <SkeletonBlock className="mt-3 h-3 w-24" />
              </div>
            )
          )}
        </section>

        <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <SkeletonBlock className="h-5 w-56" />
          <SkeletonBlock className="mt-2 h-3 w-80 max-w-full" />
          <SkeletonBlock className="mt-6 h-72 w-full" />
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          {Array.from({ length: 2 }).map(
            (_, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <SkeletonBlock className="h-5 w-48" />
                <SkeletonBlock className="mt-2 h-3 w-64 max-w-full" />
                <SkeletonBlock className="mt-6 h-64 w-full" />
              </div>
            )
          )}
        </section>

      </div>
    </main>
  );
}