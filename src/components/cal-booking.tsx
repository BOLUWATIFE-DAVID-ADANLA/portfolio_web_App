"use client";

import { useSyncExternalStore } from "react";
import Cal from "@calcom/embed-react";

const CAL_LINK = "boluwatife-adanla-okfa5n/30min";

type Theme = "light" | "dark";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

const getTheme = (): Theme =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";

const getServerTheme = (): Theme => "light";

export default function CalBooking() {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  // Cal can't re-theme a loaded embed, so remount it when the theme changes.
  return (
    <Cal
      key={theme}
      calLink={CAL_LINK}
      style={{ width: "100%", minHeight: "600px" }}
      config={{ layout: "month_view", theme }}
    />
  );
}
