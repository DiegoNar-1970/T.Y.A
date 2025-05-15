import clsx from "clsx";
import { motion } from 'framer-motion';

const shimmer = "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse";

const SkeletonBox = ({ className }) => (
  <motion.div
    className={clsx("rounded-lg", shimmer, className)}
    initial={{ opacity: 0.4 }}
    animate={{ opacity: [0.4, 1, 0.4] }}
    transition={{ duration: 1.5, repeat: Infinity }}
  />
);
export const Skeleton = () => {

  return (
    <div className="flex h-screen bg-gray-100">
    {/* Sidebar */}
    <aside className="w-64 bg-black text-white flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-center h-20 border-b border-gray-700">
          <SkeletonBox className="w-24 h-6" />
        </div>
        <nav className="mt-6 space-y-4 px-6">
          {[...Array(5)].map((_, i) => (
            <SkeletonBox key={i} className="h-4 w-32" />
          ))}
        </nav>
      </div>
      <div className="p-4 text-xs text-gray-400">footer</div>
    </aside>

    {/* Main */}
    <main className="flex-1 p-8 overflow-auto">
      <div className="flex items-center justify-between mb-6">
        <SkeletonBox className="h-8 w-72" />
        <SkeletonBox className="w-10 h-10 rounded-full bg-red-300" />
      </div>

      <SkeletonBox className="h-4 w-1/2 mb-8" />

      {/* Info cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow space-y-3">
            <SkeletonBox className="h-4 w-24" />
            <SkeletonBox className="h-6 w-12" />
            <SkeletonBox className="h-3 w-32" />
          </div>
        ))}
      </div>

      {/* Documentos recientes y acciones */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Documentos */}
        <div className="bg-white p-6 rounded-xl shadow col-span-2">
          <div className="flex justify-between items-center mb-4">
            <SkeletonBox className="h-6 w-48" />
            <SkeletonBox className="h-4 w-16" />
          </div>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <SkeletonBox className="w-6 h-8 rounded" />
                  <SkeletonBox className="h-4 w-40" />
                </div>
                <SkeletonBox className="h-3 w-20" />
              </div>
            ))}
          </div>
        </div>

        {/* Acciones rápidas */}
        <div className="bg-white p-6 rounded-xl shadow space-y-4">
          <SkeletonBox className="h-6 w-48" />
          <SkeletonBox className="h-10 w-full rounded-lg" />
          <SkeletonBox className="h-10 w-full rounded-lg" />
        </div>
      </div>
    </main>
  </div>
  )
}
