import { useEffect } from "react";

const DEFAULT_SITE_NAME = "Shubham Mathur | Portfolio";
const DEFAULT_LOCALE = "en_US";
const BASE_URL = "https://shubham-mathur.me";
const DEFAULT_IMAGE = "/social-preview.svg";

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    if (attributes.name) {
      element.setAttribute("name", attributes.name);
    }
    if (attributes.property) {
      element.setAttribute("property", attributes.property);
    }
    document.head.appendChild(element);
  }

  element.setAttribute("content", attributes.content);
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    if (attributes.rel) {
      element.setAttribute("rel", attributes.rel);
    }
    document.head.appendChild(element);
  }

  element.setAttribute("href", attributes.href);
}

export default function usePageMetadata({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
}) {
  useEffect(() => {
    const canonicalUrl = `${BASE_URL}${path}`;
    const imageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`;

    document.title = title;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });

    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: imageUrl,
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: DEFAULT_SITE_NAME,
    });
    upsertMeta('meta[property="og:locale"]', {
      property: "og:locale",
      content: DEFAULT_LOCALE,
    });

    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: imageUrl,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });

    upsertLink('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl,
    });
  }, [description, image, path, title]);
}
