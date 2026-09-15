"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type EnquiryContextValue = {
  open: boolean;
  openEnquiry: () => void;
  closeEnquiry: () => void;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openEnquiry = useCallback(() => setOpen(true), []);
  const closeEnquiry = useCallback(() => setOpen(false), []);
  const value = useMemo(
    () => ({ open, openEnquiry, closeEnquiry }),
    [open, openEnquiry, closeEnquiry]
  );

  return (
    <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) {
    throw new Error("useEnquiry must be used within EnquiryProvider");
  }
  return ctx;
}
