import { ReactNode } from "react";
import { X } from "lucide-react";

interface DrawerProps {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export function Drawer({ title, children, isOpen, onClose }: DrawerProps) {
  return (
    isOpen && (
      <>
        <button
          type="button"
          aria-label="Close drawer overlay"
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />
        <div className="fixed z-50 right-0 min-w-60 top-0 h-screen bg-[#151819] flex flex-col gap-6 px-4">
          <div className="flex justify-between pt-4 py-3 text-[#F4BA83]">
            <p>{title}</p>
            <button aria-label="Close drawer" onClick={onClose}>
              <X />
            </button>
          </div>

          {children}
        </div>
      </>
    )
  );
}
