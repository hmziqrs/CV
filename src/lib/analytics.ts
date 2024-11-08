import { Analytics, logEvent as firebaseLogEvent } from "firebase/analytics";

export const logEvent = (
  analytics: Analytics | null,
  eventName: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  eventParams?: { [key: string]: any },
) => {
  if (analytics) {
    firebaseLogEvent(analytics, eventName, eventParams);
  }
};
