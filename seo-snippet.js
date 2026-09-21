// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.avoriaz-skiferie.dk",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.avoriaz-skiferie.dk/","title_tag":"Avoriaz skilejlighed med udsigt | Skilejlighed i Avoriaz","meta_description":"Stor Avoriaz skilejlighed i bilfri by med snesikre pister og ski direkte fra lejligheden. Skøn skiferie i Alperne tæt på skiområde Portes du Soleil."},{"page_url":"https://www.avoriaz-skiferie.dk/lejligheden","title_tag":"Avoriaz skilejlighed med udsigt | Skilejlighed i Avoriaz","meta_description":"Eksklusiv Avoriaz skilejlighed i to plan med lejlighed med udsigt og ski direkte fra lejligheden. Ideel til børnevenlig ski i snesikre pister."},{"page_url":"https://www.avoriaz-skiferie.dk/oplysninger","title_tag":"Børnevenlig ski i Avoriaz | Skilejlighed i Avoriaz","meta_description":"Bilfri by med børnevenlig ski og snesikre pister i skiområde Portes du Soleil. Nyd gourmetrestauranter Avoriaz, udsigt og skiferie i Alperne."},{"page_url":"https://www.avoriaz-skiferie.dk/ledige-uger","title_tag":"Avoriaz skilejlighed ledige uger | Skilejlighed i Avoriaz","meta_description":"Se ledige uger i stor Avoriaz skilejlighed med ski direkte fra lejligheden. Book skiferie i Alperne med snesikre pister i Portes du Soleil."},{"page_url":"https://www.avoriaz-skiferie.dk/links","title_tag":"Skiområde Portes du Soleil links | Skilejlighed i Avoriaz","meta_description":"Nyttige links til skiområde Portes du Soleil, Avoriaz og Morzine. Planlæg skiferie i Alperne med transport, skiudlejning Avoriaz m.m."},{"page_url":"https://www.avoriaz-skiferie.dk/kontakt","title_tag":"Kontakt om Avoriaz skilejlighed | Skilejlighed i Avoriaz","meta_description":"Kontakt os om Avoriaz skilejlighed i bilfri by med snesikre pister. Få info om skiferie i Alperne tæt på skiområde Portes du Soleil."}],"keywords":["Avoriaz skilejlighed","skiområde Portes du Soleil","snesikre pister","bilfri by","ski direkte fra lejligheden","børnevenlig ski","gourmetrestauranter Avoriaz","lejlighed med udsigt","skiferie i Alperne","skiudlejning Avoriaz"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": "https://www.avoriaz-skiferie.dk/#lodging",
  "name": "Skilejlighed i Avoriaz",
  "url": "https://www.avoriaz-skiferie.dk/",
  "description": "Stor skilejlighed i to plan med fantastisk udsigt i charmerende og eksklusive Avoriaz. Udlejes fredag til fredag. 2 soveværelser og 2 dobbelte sovesofaer, snesikkert og bilfrit område, ski direkte fra lejligheden, stille beliggende i den gamle bydel, med adgang til ca. 650 km pister i Frankrig og Schweiz, gode spisesteder, afterski, shopping og supermarkeder med specialiteter.",
  "image": "https://static.wixstatic.com/media/996dd9_218a652604314757b599619c66453f28~mv2.jpg/v1/fill/w_288,h_192,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/996dd9_218a652604314757b599619c66453f28~mv2.jpg",
  "email": "mailto:mh@absalon-pension.dk",
  "telephone": "+45 40415060",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Tesch Allé 14",
    "postalCode": "2840",
    "addressLocality": "Holte",
    "addressCountry": "DK"
  },
  "priceRange": "kr. 12.000-18.000 per uge",
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Ski-in/ski-out",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Bilfri by",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Snesikkert område",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Børnevenlig skiby",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Indendørs vandland i nærheden",
      "value": true
    }
  ],
  "containsPlace": {
    "@type": "Apartment",
    "name": "Skilejlighed i Avoriaz",
    "description": "Eksklusiv skilejlighed på ca. 65 kvm i to plan med 8 sovepladser (to soveværelser samt fire sovepladser i stuen), beliggende øverst på 5. sal i den gamle bydel med fantastisk udsigt over terræn, dal og Morzine. Stor stue med solrig altan, fuldt udstyret køkken, to badeværelser, brændeovn, fibernet, TV, Apple-TV, DVD-afspiller, vaskemaskine, stor entré og privat skiskab lige udenfor lejligheden.",
    "numberOfRooms": 3,
    "numberOfBedrooms": 2,
    "occupancy": {
      "@type": "QuantitativeValue",
      "value": 8,
      "unitCode": "C62"
    }
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "url": "https://www.avoriaz-skiferie.dk/ledige-uger",
      "description": "Udlejning af skilejlighed i Avoriaz fra fredag til fredag. Se oversigt over ledige uger og priser for 2027.",
      "priceCurrency": "DKK",
      "availability": "https://schema.org/LimitedAvailability"
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
