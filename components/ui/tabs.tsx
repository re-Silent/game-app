import { ReactNode, useState } from "react";

export function Tabs({ children, defaultValue }: {
  children: ReactNode;
  defaultValue: string;
}) {
  return <div>{children}</div>;
}

export function TabsList({ children }: { children: ReactNode }) {
  return <div className="flex gap-2 bg-[#1b1e29] p-1 rounded-xl">{children}</div>;
}

export function TabsTrigger({ children, value }: { children: ReactNode; value: string }) {
  return (
    <button className="px-4 py-1 rounded-lg hover:bg-indigo-600 bg-indigo-700 text-white text-sm">
      {children}
    </button>
  );
}
