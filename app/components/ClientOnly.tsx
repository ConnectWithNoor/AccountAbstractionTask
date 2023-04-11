"use client";

import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

function ClientOnly({ children }: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <p>Loading...!</p>;
  }

  return <>{children}</>;
}

export default ClientOnly;
