import { useEffect } from "react";
import type { SeoProps } from "./types";

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

export function Seo({ title, description, image = "/og-image.jpg", jsonLd }: SeoProps) {
  useEffect(() => {
    document.title = title;
    document.documentElement.lang = "pt-BR";

    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: image });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: image });

    let jsonLdScript = document.head.querySelector('script[type="application/ld+json"]') as HTMLScriptElement | null;

    if (jsonLd) {
      if (!jsonLdScript) {
        jsonLdScript = document.createElement("script");
        jsonLdScript.type = "application/ld+json";
        document.head.appendChild(jsonLdScript);
      }
      jsonLdScript.textContent = JSON.stringify(jsonLd);
    } else if (jsonLdScript) {
      jsonLdScript.remove();
    }

    return () => {
      const script = document.head.querySelector('script[type="application/ld+json"]');
      if (script) script.remove();
    };
  }, [description, image, title, jsonLd]);

  return null;
}
