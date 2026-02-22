import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  ogImage: string;
  url?: string;
}

export const useSeo = ({ title, description, ogImage, url }: SeoProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setMetaName = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("og:title", title);
    setMeta("og:description", description);
    setMeta("og:image", ogImage);
    setMeta("og:type", "article");
    if (url) setMeta("og:url", url);

    setMetaName("description", description);
    setMetaName("twitter:card", "summary_large_image");
    setMetaName("twitter:title", title);
    setMetaName("twitter:description", description);
    setMetaName("twitter:image", ogImage);

    return () => {
      document.title = "American Dream Consulting";
    };
  }, [title, description, ogImage, url]);
};
