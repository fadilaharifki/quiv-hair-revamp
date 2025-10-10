export function trackButtonClick(
  button_type: "whatsapp" | "marketplace" | "social" | "promotion",
  extra?: Record<string, any>
) {
  if (typeof window !== "undefined" && (window as any).fbq) {
    const event_id = `${button_type}-${Date.now()}-${Math.random()
      .toString(36)
      .slice(2)}`;

    (window as any).fbq("trackCustom", "ButtonClick", {
      button_type,
      ...extra,
      event_id,
    });
  }
}
