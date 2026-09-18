import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonProfessional() {
  return (
    <section className="w-full py-12 sm:py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4">
        <Skeleton className="h-10 w-44" />

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-12">
          <Skeleton className="aspect-[4/3] w-full rounded-2xl" />

          <div className="flex flex-col gap-4">
            <Skeleton className="h-6 w-28 rounded-full" />
            <Skeleton className="h-9 w-56" />
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-5 w-64" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="size-10 rounded-full" />
              <Skeleton className="size-10 rounded-full" />
              <Skeleton className="size-10 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}