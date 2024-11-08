import { useEffect, useState } from "react";
import { Analytics } from "firebase/analytics";
import { initFirebase } from "@/lib/firebase";

export const useFirebase = () => {
  const [analytics, setAnalytics] = useState<Analytics | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      initFirebase().then(({ analytics }) => {
        if (analytics) {
          setAnalytics(analytics);
        }
      });
    }
  }, []);

  return { analytics };
};
