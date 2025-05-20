"use client";

export default function LoadingLine() {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[80]">
      <div className="w-3/12 h-1 bg-gray-200 overflow-hidden rounded">
        <div className="animate-slide bg-light-primary-navbar h-full w-2/3" />
      </div>
    </div>
  );
}
