export function buildSrcForWidth(url: string, width: number): string {
  try {
    if (url.includes("images.unsplash.com")) {
      const u = new URL(url);
      u.searchParams.set("w", String(width));
      if (!u.searchParams.get("q")) u.searchParams.set("q", "90");
      return u.toString();
    }

    if (url.includes("res.cloudinary.com")) {
      const parts = url.split("/upload/");
      if (parts.length === 2) {
        return parts[0] + `/upload/w_${width},f_auto,q_auto:best/` + parts[1];
      }
    }

    const u = new URL(url);
    u.searchParams.set("w", String(width));
    return u.toString();
  } catch (e) {
    return url;
  }
}

export function buildSrcSet(url: string, widths: number[] = [800, 1600, 2400]): string {
  return widths.map((w) => `${buildSrcForWidth(url, w)} ${w}w`).join(", ");
}

export function pickBestSrc(url: string, preferWidth = 1600): string {
  return buildSrcForWidth(url, preferWidth);
}

export default buildSrcSet;
