export function buildSrcForWidth(url: string, width: number): string {
  try {
    if (url.includes("images.unsplash.com")) {
      const u = new URL(url);
      u.searchParams.set("w", String(width));
      if (!u.searchParams.get("q")) u.searchParams.set("q", "80");
      return u.toString();
    }

    if (url.includes("res.cloudinary.com")) {
      const parts = url.split("/upload/");
      if (parts.length === 2) {
        return parts[0] + `/upload/w_${width},f_auto,q_auto/` + parts[1];
      }
    }

    // Fallback: try to set a `w` query param
    const u = new URL(url);
    u.searchParams.set("w", String(width));
    return u.toString();
  } catch (e) {
    return url;
  }
}

export function buildSrcSet(url: string, widths: number[] = [400, 800, 1200]): string {
  return widths.map((w) => `${buildSrcForWidth(url, w)} ${w}w`).join(", ");
}

export function pickBestSrc(url: string, preferWidth = 800): string {
  return buildSrcForWidth(url, preferWidth);
}

export default buildSrcSet;
