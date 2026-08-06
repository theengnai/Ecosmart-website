import imgA from "@/assets/section-materials.jpg";
import imgB from "@/assets/section-design.jpg";
import imgC from "@/assets/section-samples.jpg";
import imgD from "@/assets/section-gallery.jpg";
import imgE from "@/assets/section-technical.jpg";
import imgF from "@/assets/section-visualizer.jpg";
// PU Stone — hero + lifestyle imagery from EcoSmart PU Stone Cladding brief
import puHero from "@/assets/pu/pu-page_1.jpg.asset.json";
import puLife1 from "@/assets/pu/pu-page_2.jpg.asset.json";
import puLife2 from "@/assets/pu/pu-img_p5_1.jpg.asset.json";
import puLife3 from "@/assets/pu/pu-img_p13_1.jpg.asset.json";
import puLife4 from "@/assets/pu/pu-img_p4_1.jpg.asset.json";
import puLife5 from "@/assets/pu/pu-img_p4_2.jpg.asset.json";
import puLife6 from "@/assets/pu/pu-img_p4_3.jpg.asset.json";
import puLife7 from "@/assets/pu/pu-img_p4_4.jpg.asset.json";

export const PU_LIFESTYLE = [puHero.url, puLife1.url, puLife2.url, puLife3.url, puLife4.url, puLife5.url, puLife6.url, puLife7.url];

export type ProductDetails = {
  description: string;
  useCases: string[];
  specs: [string, string][];
  gallery: string[];
};

export type Product = {
  slug: string;
  name: string;
  code: string;
  family: "MCM" | "PU" | "WPC" | "SPC" | "Aluminium" | "Panels";
  application: "Interior" | "Exterior" | "Both";
  finish: string;
  colors: string[];
  fireRating: string;
  cover?: string;
  poem: string;
  price?: number;
  currency?: "SAR";
  details?: ProductDetails;
};

import m1 from "@/assets/mcm3/mcm-1.webp.asset.json";
import m2 from "@/assets/mcm3/mcm-2.webp.asset.json";
import m3 from "@/assets/mcm3/mcm-3.webp.asset.json";
import m4 from "@/assets/mcm3/mcm-4.webp.asset.json";
import m5 from "@/assets/mcm3/mcm-5.webp.asset.json";
import m6 from "@/assets/mcm3/mcm-6.webp.asset.json";
import m7 from "@/assets/mcm3/mcm-7.webp.asset.json";
import m8 from "@/assets/mcm3/mcm-8.webp.asset.json";
import m9 from "@/assets/mcm3/mcm-9.webp.asset.json";
import m10 from "@/assets/mcm3/mcm-10.webp.asset.json";
import m11 from "@/assets/mcm3/mcm-11.webp.asset.json";
import m12 from "@/assets/mcm3/mcm-12.webp.asset.json";
import m13 from "@/assets/mcm3/mcm-13.webp.asset.json";
import m14 from "@/assets/mcm3/mcm-14.webp.asset.json";
import m15 from "@/assets/mcm3/mcm-15.webp.asset.json";
import m16 from "@/assets/mcm3/mcm-16.webp.asset.json";
import m17 from "@/assets/mcm3/mcm-17.webp.asset.json";
import m18 from "@/assets/mcm3/mcm-18.webp.asset.json";
import m19 from "@/assets/mcm3/mcm-19.webp.asset.json";
import m20 from "@/assets/mcm3/mcm-20.webp.asset.json";
import m21 from "@/assets/mcm3/mcm-21.webp.asset.json";
import m22 from "@/assets/mcm3/mcm-22.webp.asset.json";
import m23 from "@/assets/mcm3/mcm-23.webp.asset.json";
import m24 from "@/assets/mcm3/mcm-24.webp.asset.json";
import m25 from "@/assets/mcm3/mcm-25.webp.asset.json";
import m26 from "@/assets/mcm3/mcm-26.webp.asset.json";
import m27 from "@/assets/mcm3/mcm-27.webp.asset.json";
import m28 from "@/assets/mcm3/mcm-28.webp.asset.json";
import m29 from "@/assets/mcm3/mcm-29.webp.asset.json";
import m30 from "@/assets/mcm3/mcm-30.webp.asset.json";
import m31 from "@/assets/mcm3/mcm-31.webp.asset.json";
import m32 from "@/assets/mcm3/mcm-32.webp.asset.json";
import m33 from "@/assets/mcm3/mcm-33.webp.asset.json";
import m34 from "@/assets/mcm3/mcm-34.webp.asset.json";
import m35 from "@/assets/mcm3/mcm-35.webp.asset.json";
import m36 from "@/assets/mcm3/mcm-36.webp.asset.json";
import m37 from "@/assets/mcm3/mcm-37.webp.asset.json";
import m38 from "@/assets/mcm3/mcm-38.webp.asset.json";
import m39 from "@/assets/mcm3/mcm-39.webp.asset.json";
import m40 from "@/assets/mcm3/mcm-40.webp.asset.json";
import m41 from "@/assets/mcm3/mcm-41.webp.asset.json";
import m42 from "@/assets/mcm3/mcm-42.webp.asset.json";
import m43 from "@/assets/mcm3/mcm-43.webp.asset.json";
import m44 from "@/assets/mcm3/mcm-44.webp.asset.json";
import m45 from "@/assets/mcm3/mcm-45.webp.asset.json";

export const FAMILIES = [
  {
    key: "MCM",
    name: "MCM Flexible Cladding",
    poem: "Stone and clay, thin as fabric.",
    cover: m41.url,
  },
  {
    key: "PU",
    name: "PU Stone Cladding",
    poem: "Stone-quiet weight, without the mass.",
    cover: puHero.url,
  },
  {
    key: "WPC",
    name: "WPC Decking & Cladding",
    poem: "Warm underfoot. Weathered by design.",
    cover: imgA,
  },
  {
    key: "SPC",
    name: "SPC Flooring",
    poem: "Stone-firm, silent, waterproof.",
    cover: imgB,
  },
  {
    key: "Aluminium",
    name: "Aluminium Louvers",
    poem: "Light, filtered. Heat, refused.",
    cover: imgE,
  },
  {
    key: "Panels",
    name: "Wall Panels",
    poem: "Rooms that hush and hold.",
    cover: imgD,
  },
] as const;

const COVERS = [imgA, imgB, imgC, imgD, imgE, imgF];

// -------- Authored (rich) details for the first two products in each family --------
// Technical values are issued against the relevant test certificate and are shown as
// "To be confirmed" rather than estimated — per the EcoSmart TDS methodology.

const wpcOakDetails: ProductDetails = {
  description:
    "A wood-plastic composite (WPC) decking board — moisture-resistant, dimensionally stable and suited to KSA humidity. Joist spacing, expansion gaps and end gaps are product-specific — follow the product installation values.",
  useCases: [
    "Rooftop terraces and pool surrounds",
    "Villa gardens and shaded balconies",
    "Deck areas requiring dry, drainable installation",
  ],
  specs: [
    ["Reference standard family", "EN 15534"],
    ["Reaction to fire", "EN 13501-1 · certificate on request"],
    ["Board dimensions", "Product spec · TBC"],
    ["Installation", "Concealed clip on joist substructure"],
    ["Maintenance", "Sweep / rinse periodically"],
    ["Certified values", "Issued against test certificate on request"],
  ],
  gallery: [imgA, imgD, imgC],
};

const wpcLinenDetails: ProductDetails = {
  description:
    "A WPC cladding profile for ventilated rainscreen use — moisture-resistant, dimensionally stable, low-maintenance. Suits façades where humidity and thermal movement would degrade timber.",
  useCases: [
    "Villa and townhouse façades",
    "Boundary walls and garden screens",
    "Soffits under pergolas",
  ],
  specs: [
    ["Reference standard family", "EN 15534"],
    ["Reaction to fire", "EN 13501-1 · certificate on request"],
    ["Substructure", "Aluminium sub-frame, project-specific"],
    ["Fixing", "Concealed clip"],
    ["Maintenance", "Wipe / rinse; avoid abrasives"],
    ["Certified values", "Issued against test certificate on request"],
  ],
  gallery: [imgC, imgA, imgE],
};

const spcNordicDetails: ProductDetails = {
  description:
    "SPC (stone-plastic composite) rigid-core click flooring for interior use. Dimensionally stable, waterproof, and installed as a floating floor with no wet trades.",
  useCases: [
    "Apartments and residential fit-out",
    "Boutique retail and showrooms",
    "Offices and light commercial interiors",
  ],
  specs: [
    ["Reaction to fire", "EN 13501-1 · certificate on request"],
    ["Locking system", "Click / floating floor"],
    ["Substrate", "Level, dry, sound"],
    ["Underlay", "IXPE · integrated or separate per SKU"],
    ["Maintenance", "Damp mop; avoid steam / abrasives"],
    ["Certified values", "Issued against test certificate on request"],
  ],
  gallery: [imgB, imgA, imgD],
};

const spcTerraDetails: ProductDetails = {
  description:
    "A warm, terra-toned SPC plank for interior surfaces. Installs as a floating floor over a prepared substrate — no adhesive, no wet trades, no downtime.",
  useCases: [
    "Family rooms and majlises",
    "Wellness spaces and studios",
    "Cafés and slow-hospitality interiors",
  ],
  specs: [
    ["Reaction to fire", "EN 13501-1 · certificate on request"],
    ["Locking system", "Click / floating floor"],
    ["Expansion gap", "Per product installation guidance"],
    ["Maintenance", "Damp mop; avoid abrasives"],
    ["Certified values", "Issued against test certificate on request"],
  ],
  gallery: [imgA, imgC, imgE],
};

const aluBladeDetails: ProductDetails = {
  description:
    "Aluminium blade for sun-shading and screening — cut and finished to project length, installed on a project-designed substructure.",
  useCases: [
    "Façade sun-shading",
    "Rooftop plant screens",
    "Podium enclosures and privacy screens",
  ],
  specs: [
    ["Substructure", "Project-designed"],
    ["Fixing", "Concealed sub-frame, stainless"],
    ["Finish", "Anodised / powder — project spec"],
    ["Wind design", "Saudi Building Code (SBC)"],
    ["Certified values", "Issued against test certificate on request"],
  ],
  gallery: [imgE, imgF, imgD],
};

const aluFinDetails: ProductDetails = {
  description:
    "A slim aluminium fin for tighter rhythms and lighter façades — closer spacing, sharper shadow lines, softer visual weight. Used where the louver is meant to be felt rather than seen.",
  useCases: [
    "Boutique retail façades",
    "Balcony privacy screens",
    "Interior room dividers",
  ],
  specs: [
    ["Fixing", "Top and bottom rail"],
    ["Finish", "Polyester powder — project spec"],
    ["Wind design", "Saudi Building Code (SBC)"],
    ["Certified values", "Issued against test certificate on request"],
  ],
  gallery: [imgF, imgE, imgA],
};

const pnlLinenDetails: ProductDetails = {
  description:
    "An interior wall panel line — cut and finished for interior surfaces and joinery, aligned to the EcoSmart PVC Laminated Foam Interior Line and PVC Laminated Foam Board Sheets.",
  useCases: [
    "Meeting rooms and reception areas",
    "Residential feature walls",
    "Hospitality interiors",
  ],
  specs: [
    ["Reaction to fire", "EN 13501-1 · certificate on request"],
    ["Substrate", "Sound, clean, dry"],
    ["Fixing", "Adhesive and/or concealed fixing"],
    ["Maintenance", "Wipe clean; avoid abrasives"],
    ["Certified values", "Issued against test certificate on request"],
  ],
  gallery: [imgC, imgD, imgB],
};

const pnlSlatDetails: ProductDetails = {
  description:
    "A slatted wall panel for interior feature surfaces — cut to length, installed on prepared substrate with adhesive and/or concealed fixings.",
  useCases: [
    "Feature walls in living areas",
    "Reception backdrops",
    "TV walls and headboards",
  ],
  specs: [
    ["Reaction to fire", "EN 13501-1 · certificate on request"],
    ["Substrate", "Sound, clean, dry"],
    ["Fixing", "Adhesive + concealed screw"],
    ["Maintenance", "Dust / wipe clean; avoid abrasives"],
    ["Certified values", "Issued against test certificate on request"],
  ],
  gallery: [imgB, imgA, imgD],
};

const puStoneDetails: ProductDetails = {
  description:
    "Lightweight polyurethane stone panels reproducing the texture and tonal depth of quarried stone — up to 75% lighter than natural stone and up to 3× faster to install. Advanced molding captures authentic grain; interlocking edges align without specialist masonry.",
  useCases: [
    "Feature walls, fireplaces and lobby columns",
    "Boutique hotel and villa façades",
    "Reception backdrops and hospitality interiors",
  ],
  specs: [
    ["Material", "Polyurethane composite"],
    ["Panel size", "1200 × 600 × 50 mm"],
    ["Weight", "3.5 – 5.2 kg/m²"],
    ["Fire rating", "Class B1 · ASTM E84 tested"],
    ["Weather range", "−40 °C to 60 °C · UV stable"],
    ["Installation", "Direct adhesive mount + interlocking edges"],
    ["Certified values", "Issued against test certificate on request"],
  ],
  gallery: [imgC, imgE, imgD],
};

// -------- Full catalog (12 per family) --------

export const PRODUCTS: Product[] = [
  // ============ MCM Flexible Clay-Stone Tiles (45) ============
  { slug: "mcm-arctic-linear-rib", name: "Arctic Linear Rib", code: "MCM-2001", family: "MCM", application: "Both", finish: "Ribbed", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m2.url, poem: "Crisp white MCM flexible tile with closely spaced.", details: { description: "A crisp white MCM flexible tile with closely spaced horizontal ribs and subtle natural irregularities, creating a clean linear finish for contemporary feature walls and refined interior surfaces.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "2.95 x 1.20 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m2.url] } },
  { slug: "mcm-pearl-rain-texture", name: "Pearl Rain Texture", code: "MCM-2002", family: "MCM", application: "Both", finish: "Textured", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m6.url, poem: "Pearl-grey MCM flexible tile with fine vertical.", details: { description: "A pearl-grey MCM flexible tile with fine vertical rain-like striations and a soft tactile appearance, offering understated movement and a modern textured character.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "2.74 x 0.95 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m6.url] } },
  { slug: "mcm-ivory-dune-wave", name: "Ivory Dune Wave", code: "MCM-2003", family: "MCM", application: "Both", finish: "Textured", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m25.url, poem: "Warm ivory MCM flexible tile defined by broad.", details: { description: "A warm ivory MCM flexible tile defined by broad, gently undulating bands that resemble wind-shaped dunes, bringing softness, depth and an organic architectural rhythm.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "2.97 x 0.57 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m25.url] } },
  { slug: "mcm-salmani-beige", name: "Salmani Beige", code: "MCM-2004", family: "MCM", application: "Both", finish: "Stone", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m41.url, poem: "Beige MCM flexible stone tile with layered mineral tones.", details: { description: "A beige MCM flexible stone tile with layered mineral tones, scattered brown accents and a naturally weathered surface, creating a rich handcrafted sandstone appearance.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.18 x 0.60 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m41.url] } },
  { slug: "mcm-salmani-earth-stone", name: "Salmani Earth Stone", code: "MCM-2005", family: "MCM", application: "Both", finish: "Stone", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m44.url, poem: "Warm copper and rust-toned MCM flexible tile with.", details: { description: "A warm copper and rust-toned MCM flexible tile with mottled mineral variation and rugged stone character, ideal for creating an earthy, expressive visual statement.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.18 x 0.60 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m44.url] } },
  { slug: "mcm-salmani-stone", name: "Salmani Stone", code: "MCM-2006", family: "MCM", application: "Both", finish: "Stone", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m40.url, poem: "Sandy beige MCM flexible tile with softly blended cream.", details: { description: "A sandy beige MCM flexible tile with softly blended cream, tan and weathered brown markings, producing a natural aged-stone look with balanced tonal variation.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.18 x 0.60 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m40.url] } },
  { slug: "mcm-salmani-blend", name: "Salmani Blend", code: "MCM-2007", family: "MCM", application: "Both", finish: "Textured", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m43.url, poem: "Taupe and brown MCM flexible tile with granular.", details: { description: "A taupe and brown MCM flexible tile with granular mineral movement and cloudy layered variation, giving the surface a rugged canyon-inspired appearance.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.18 x 0.60 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m43.url] } },
  { slug: "mcm-polar-travertine-linear", name: "Polar Travertine Linear", code: "MCM-2008", family: "MCM", application: "Both", finish: "Travertine", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m5.url, poem: "Cool white MCM flexible tile with delicate horizontal.", details: { description: "A cool white MCM flexible tile with delicate horizontal pores and linear markings inspired by light travertine, delivering a calm and contemporary stone finish.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.20 x 0.60 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m5.url] } },
  { slug: "mcm-ivory-travertine-cloud", name: "Ivory Travertine Cloud", code: "MCM-2009", family: "MCM", application: "Both", finish: "Travertine", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m35.url, poem: "Ivory-white MCM flexible tile with soft cream clouding.", details: { description: "An ivory-white MCM flexible tile with soft cream clouding and subtle horizontal layering, combining the warmth of limestone with the movement of travertine.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.20 x 0.60 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m35.url] } },
  { slug: "mcm-snow-drift-travertine", name: "Snow Drift Travertine", code: "MCM-2010", family: "MCM", application: "Both", finish: "Plaster", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m7.url, poem: "Bright white MCM flexible tile with fine horizontal.", details: { description: "A bright white MCM flexible tile with fine horizontal trowel marks and gently uneven texture, creating a clean handcrafted plaster effect.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.20 x 0.60 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m7.url] } },
  { slug: "mcm-silver-strata-travertine", name: "Silver Strata Travertine", code: "MCM-2011", family: "MCM", application: "Both", finish: "Stone", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m32.url, poem: "Cool silver-grey MCM flexible tile with pronounced.", details: { description: "A cool silver-grey MCM flexible tile with pronounced horizontal strata and layered mineral shading, giving walls a sophisticated sedimentary-stone appearance.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.20 x 0.60 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m32.url] } },
  { slug: "mcm-concrete-travertine", name: "Concrete Travertine", code: "MCM-2012", family: "MCM", application: "Both", finish: "Textured", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m20.url, poem: "Soft concrete-grey MCM flexible tile with cloudy tonal.", details: { description: "A soft concrete-grey MCM flexible tile with cloudy tonal movement and a lightly textured surface, suited to minimalist, industrial and contemporary design schemes.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.20 x 0.60 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m20.url] } },
  { slug: "mcm-champagne-travertine", name: "Champagne Travertine", code: "MCM-2013", family: "MCM", application: "Both", finish: "Travertine", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m24.url, poem: "Light champagne-beige MCM flexible tile with flowing.", details: { description: "A light champagne-beige MCM flexible tile with flowing horizontal bands and subtle porous detail, creating an elegant warm travertine-inspired finish.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.20 x 0.60 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m24.url] } },
  { slug: "mcm-opal-linear-travertine", name: "Opal Linear Travertine", code: "MCM-2014", family: "MCM", application: "Both", finish: "Textured", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m28.url, poem: "Pale opal-white MCM flexible tile with fine horizontal.", details: { description: "A pale opal-white MCM flexible tile with fine horizontal grain and restrained surface variation, offering a subtle linear finish for bright modern spaces.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.20 x 0.60 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m28.url] } },
  { slug: "mcm-heritage-cream-travertine", name: "Heritage Cream Travertine", code: "MCM-2015", family: "MCM", application: "Both", finish: "Stone", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m36.url, poem: "Creamy beige MCM flexible tile with aged horizontal.", details: { description: "A creamy beige MCM flexible tile with aged horizontal layering, muted gold accents and softly distressed texture, evoking the character of time-worn natural stone.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.20 x 0.60 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m36.url] } },
  { slug: "mcm-fossil-layer-travertine", name: "Fossil Layer Travertine", code: "MCM-2016", family: "MCM", application: "Both", finish: "Stone", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m45.url, poem: "Beige and brown MCM flexible tile with broad.", details: { description: "A beige and brown MCM flexible tile with broad sediment-like bands, fossil-inspired shapes and contrasting mineral layers for a distinctive natural-stone expression.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.20 x 0.60 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m45.url] } },
  { slug: "mcm-najdi-stone", name: "Najdi Stone", code: "MCM-2017", family: "MCM", application: "Both", finish: "Plaster", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m39.url, poem: "Najdi-toned MCM flexible tile with irregular.", details: { description: "A najdi-toned MCM flexible tile with irregular hand-rendered texture and raised mineral movement, creating a warm artisanal plaster-stone surface.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.16 x 0.57 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m39.url] } },
  { slug: "mcm-arctic-ledger-stone", name: "Arctic Ledger Stone", code: "MCM-2018", family: "MCM", application: "Both", finish: "Brick", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m26.url, poem: "White MCM flexible tile with narrow horizontally.", details: { description: "A white MCM flexible tile with narrow horizontally stacked ledge-stone courses and subtle joint definition, producing a crisp architectural masonry appearance.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.16 x 0.58 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m26.url] } },
  { slug: "mcm-polar-split-face-brick", name: "Polar Split-Face Brick", code: "MCM-2019", family: "MCM", application: "Both", finish: "Brick", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m12.url, poem: "Bright white MCM flexible tile with staggered.", details: { description: "A bright white MCM flexible tile with staggered rectangular blocks and split-face texture, creating the dimensional look of hand-laid stone brickwork.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.16 x 0.58 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m12.url] } },
  { slug: "mcm-cream-mineral-plaster", name: "Cream Mineral Plaster", code: "MCM-2020", family: "MCM", application: "Both", finish: "Plaster", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m14.url, poem: "Pale cream MCM flexible tile with fine granular.", details: { description: "A pale cream MCM flexible tile with fine granular texture and restrained organic variation, offering a soft mineral-plaster appearance with understated depth.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.16 x 0.58 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m14.url] } },
  { slug: "mcm-silver-diagonal-weave", name: "Silver Diagonal Weave", code: "MCM-2021", family: "MCM", application: "Both", finish: "Ribbed", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m11.url, poem: "Silver-grey MCM flexible tile with precise diagonal.", details: { description: "A silver-grey MCM flexible tile with precise diagonal micro-ribs arranged in a woven pattern, delivering a refined textile-inspired architectural texture.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.16 x 0.58 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m11.url] } },
  { slug: "mcm-graphite-brush-texture", name: "Graphite Brush Texture", code: "MCM-2022", family: "MCM", application: "Both", finish: "Textured", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m19.url, poem: "Medium-grey MCM flexible tile with dense horizontal.", details: { description: "A medium-grey MCM flexible tile with dense horizontal brush marks and darker linear accents, creating an expressive hand-worked concrete effect.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.16 x 0.58 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m19.url] } },
  { slug: "mcm-sandstone-render", name: "Sandstone Render", code: "MCM-2023", family: "MCM", application: "Both", finish: "Plaster", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m30.url, poem: "Muted sandy-yellow MCM flexible tile with an evenly.", details: { description: "A muted sandy-yellow MCM flexible tile with an evenly rough mineral surface, giving walls the warm and tactile appearance of traditional sandstone render.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.16 x 0.57 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m30.url] } },
  { slug: "mcm-platinum-linen", name: "Platinum Linen", code: "MCM-2024", family: "MCM", application: "Both", finish: "Textured", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m1.url, poem: "Platinum-grey MCM flexible tile with fine horizontal.", details: { description: "A platinum-grey MCM flexible tile with fine horizontal and vertical striations resembling woven linen, combining a soft textile look with mineral depth.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.30 x 0.58 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m1.url] } },
  { slug: "mcm-urban-stack-stone", name: "Urban Stack Stone", code: "MCM-2025", family: "MCM", application: "Both", finish: "Brick", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m4.url, poem: "Cool grey MCM flexible tile with narrow stacked-stone.", details: { description: "A cool grey MCM flexible tile with narrow stacked-stone courses and subtle surface variation, offering a contemporary urban masonry aesthetic.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.19 x 0.59 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m4.url] } },
  { slug: "mcm-concrete-silk-travertine", name: "Concrete Silk Travertine", code: "MCM-2026", family: "MCM", application: "Both", finish: "Plaster", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m8.url, poem: "Smooth light-grey MCM flexible tile with minimal.", details: { description: "A smooth light-grey MCM flexible tile with minimal trowel movement and soft tonal transitions, creating a calm, refined concrete-plaster finish.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.20 x 0.60 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m8.url] } },
  { slug: "mcm-linear-slate-grey", name: "Linear Slate Grey", code: "MCM-2027", family: "MCM", application: "Both", finish: "Stone", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m33.url, poem: "Grey MCM flexible tile with repeated narrow horizontal.", details: { description: "A grey MCM flexible tile with repeated narrow horizontal ridges and stone-like irregularity, producing a structured linear slate appearance.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.20 x 0.60 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m33.url] } },
  { slug: "mcm-slate-fracture-grey", name: "Slate Fracture Grey", code: "MCM-2028", family: "MCM", application: "Both", finish: "Stone", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m9.url, poem: "Medium-grey MCM flexible tile with broad fractured.", details: { description: "A medium-grey MCM flexible tile with broad fractured lines and irregular stone planes, creating a natural cleft-slate character with restrained contrast.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.20 x 0.60 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m9.url] } },
  { slug: "mcm-warm-chalk-travertine", name: "Warm Chalk Travertine", code: "MCM-2029", family: "MCM", application: "Both", finish: "Textured", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m18.url, poem: "Warm off-white MCM flexible tile with subtle vertical.", details: { description: "A warm off-white MCM flexible tile with subtle vertical weathering and chalk-like mineral texture, giving the surface a soft aged architectural finish.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "3.00 x 1.20 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m18.url] } },
  { slug: "mcm-alpine-plaster", name: "Alpine Plaster", code: "MCM-2030", family: "MCM", application: "Both", finish: "Plaster", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m10.url, poem: "Cool white MCM flexible tile with irregular raised.", details: { description: "A cool white MCM flexible tile with irregular raised plaster texture and gentle trowel movement, producing a bright handcrafted wall finish.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "2.85 x 1.20 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m10.url] } },
  { slug: "mcm-arctic-band-texture", name: "Arctic Band Texture", code: "MCM-2031", family: "MCM", application: "Both", finish: "Textured", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m3.url, poem: "Clean white MCM flexible tile with broad.", details: { description: "A clean white MCM flexible tile with broad, evenly spaced horizontal bands and softly rounded relief, creating a modern layered surface.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "2.95 x 1.20 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m3.url] } },
  { slug: "mcm-glacier-rock", name: "Glacier Rock", code: "MCM-2032", family: "MCM", application: "Both", finish: "Stone", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m31.url, poem: "White and pale-grey MCM flexible tile with rugged.", details: { description: "A white and pale-grey MCM flexible tile with rugged craggy movement and natural rock-like relief, giving walls a bold sculpted mineral appearance.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "2.65 x 1.00 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m31.url] } },
  { slug: "mcm-silver-fluted", name: "Silver Fluted", code: "MCM-2033", family: "MCM", application: "Both", finish: "Ribbed", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m13.url, poem: "Silver-grey MCM flexible tile with tightly spaced.", details: { description: "A silver-grey MCM flexible tile with tightly spaced vertical flutes and subtle tonal shading, offering a sleek architectural rhythm and contemporary depth.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "2.65 x 1.10 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m13.url] } },
  { slug: "mcm-woven-sand-grid", name: "Woven Sand Grid", code: "MCM-2034", family: "MCM", application: "Both", finish: "Patterned", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m29.url, poem: "Light sand MCM flexible tile with intersecting linear.", details: { description: "A light sand MCM flexible tile with intersecting linear impressions arranged in a woven grid, creating a distinctive handcrafted geometric texture.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "2.90 x 1.10 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m29.url] } },
  { slug: "mcm-snow-plaster", name: "Snow Plaster", code: "MCM-2035", family: "MCM", application: "Both", finish: "Plaster", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m17.url, poem: "Pure white MCM flexible tile with soft uneven plaster.", details: { description: "A pure white MCM flexible tile with soft uneven plaster texture and restrained vertical movement, delivering a clean artisanal finish.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "2.65 x 1.10 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m17.url] } },
  { slug: "mcm-ivory-corduroy", name: "Ivory Corduroy", code: "MCM-2036", family: "MCM", application: "Both", finish: "Ribbed", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m38.url, poem: "Ivory-white MCM flexible tile with narrow organic.", details: { description: "An ivory-white MCM flexible tile with narrow organic vertical grooves resembling corduroy, creating a tactile linear surface with gentle visual movement.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "2.70 x 1.16 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m38.url] } },
  { slug: "mcm-cream-quarry", name: "Cream Quarry", code: "MCM-2037", family: "MCM", application: "Both", finish: "Stone", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m16.url, poem: "Pale cream MCM flexible tile with irregular.", details: { description: "A pale cream MCM flexible tile with irregular quarry-like texture and subtle mineral shadowing, producing a warm natural stone appearance.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "2.97 x 1.10 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m16.url] } },
  { slug: "mcm-arctic-column-flute", name: "Arctic Column Flute", code: "MCM-2038", family: "MCM", application: "Both", finish: "Ribbed", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m23.url, poem: "Bright white MCM flexible tile with deep.", details: { description: "A bright white MCM flexible tile with deep, evenly spaced vertical flutes, creating a strong architectural profile inspired by classical column detailing.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "2.70 x 1.00 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m23.url] } },
  { slug: "mcm-pale-limestone", name: "Pale Limestone", code: "MCM-2039", family: "MCM", application: "Both", finish: "Stone", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m21.url, poem: "Light cream MCM flexible tile with softly raised.", details: { description: "A light cream MCM flexible tile with softly raised mineral texture and natural tonal variation, offering an understated limestone-inspired surface.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "2.90 x 1.15 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m21.url] } },
  { slug: "mcm-rammed-earth", name: "Rammed Earth", code: "MCM-2040", family: "MCM", application: "Both", finish: "Textured", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m34.url, poem: "Warm golden-sand MCM flexible tile with broad layered.", details: { description: "A warm golden-sand MCM flexible tile with broad layered waves and fine granular relief, evoking the movement and softness of desert dunes.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.20 x 0.60 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m34.url] } },
  { slug: "mcm-classic-travertine", name: "Classic Travertine", code: "MCM-2041", family: "MCM", application: "Both", finish: "Travertine", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m22.url, poem: "Ivory and light-beige MCM flexible tile with flowing.", details: { description: "An ivory and light-beige MCM flexible tile with flowing horizontal layers, subtle pores and gentle tonal variation inspired by classic vein-cut travertine.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.20 x 0.60 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m22.url] } },
  { slug: "mcm-steel-strata", name: "Steel Strata", code: "MCM-2042", family: "MCM", application: "Both", finish: "Stone", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m37.url, poem: "Cool steel-grey MCM flexible tile with cloudy.", details: { description: "A cool steel-grey MCM flexible tile with cloudy horizontal layering and softly brushed mineral movement, creating a sophisticated contemporary stone finish.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.18 x 0.58 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m37.url] } },
  { slug: "mcm-crystal-white-rock", name: "Crystal White Rock", code: "MCM-2043", family: "MCM", application: "Both", finish: "Stone", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m15.url, poem: "Bright white MCM flexible tile with crystalline rough.", details: { description: "A bright white MCM flexible tile with crystalline rough texture and fine natural relief, giving the surface a fresh, luminous rock-like character.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.16 x 0.57 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m15.url] } },
  { slug: "mcm-desert-vein-stone", name: "Desert Vein Stone", code: "MCM-2044", family: "MCM", application: "Both", finish: "Stone", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m42.url, poem: "Warm ivory MCM flexible tile with delicate ochre.", details: { description: "A warm ivory MCM flexible tile with delicate ochre veining and softly layered stone texture, creating an elegant desert-sandstone appearance.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.16 x 0.57 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m42.url] } },
  { slug: "mcm-white-ledger-brick", name: "White Ledger Brick", code: "MCM-2045", family: "MCM", application: "Both", finish: "Brick", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: m27.url, poem: "White MCM flexible tile with compact staggered ledger.", details: { description: "A white MCM flexible tile with compact staggered ledger blocks and subtle relief, producing a clean contemporary brick-and-stone wall effect.", useCases: ["Interior feature walls and reception surfaces", "Exterior façades and curved elevations", "Hospitality, retail and residential fit-out"], specs: [["Sheet size", "1.18 x 0.58 m"], ["Thickness", "3–5 mm"], ["Surface", "Matt"], ["Application", "Wall · interior & exterior"], ["Origin", "100% Saudi-made"], ["Reaction to fire", "EN 13501-1 / ASTM E84 · certificate on request"], ["Water absorption", "ISO 10545-3"], ["Bond strength", "EN 1348"]], gallery: [m27.url] } },

  // ============ PU Stone (23) — from EcoSmart PU Stone Cladding brief ============
 { slug: "pu-ashen-ledger", name: "Ashen Ledger", code: "PU-01", family: "PU", application: "Both", finish: "Rough Stone", colors: ["#8a857e"], fireRating: "B1 · ASTM E84", poem: "Grey stone, feather-light.", details: puStoneDetails },
 { slug: "pu-silver-cliff", name: "Silver Cliff", code: "PU-02", family: "PU", application: "Both", finish: "Rough Stone", colors: ["#b8b4ad"], fireRating: "B1 · ASTM E84", poem: "A quiet, weathered face.", details: puStoneDetails },
 { slug: "pu-honey-sandstone", name: "Honey Sandstone", code: "PU-03", family: "PU", application: "Both", finish: "Sandstone", colors: ["#c9a86a"], fireRating: "B1 · ASTM E84", poem: "Sun-warmed sandstone." },
 { slug: "pu-alpine-white", name: "Alpine White", code: "PU-04", family: "PU", application: "Both", finish: "Rough Stone", colors: ["#e6e3dc"], fireRating: "B1 · ASTM E84", poem: "A wall, snow-quiet." },
 { slug: "pu-basalt-grey", name: "Basalt Grey", code: "PU-05", family: "PU", application: "Both", finish: "Rough Stone", colors: ["#5a5854"], fireRating: "B1 · ASTM E84", poem: "Dark stone, feather-light." },
 { slug: "pu-black-slate", name: "Black Slate", code: "PU-06", family: "PU", application: "Both", finish: "Slate", colors: ["#3a3530"], fireRating: "B1 · ASTM E84", poem: "Slate, quiet as pressed ash." },
 { slug: "pu-whitewash-brick", name: "Whitewash Brick", code: "PU-07", family: "PU", application: "Both", finish: "Brick", colors: ["#dcd7cd"], fireRating: "B1 · ASTM E84", poem: "Brick, kept in whitewash." },
 { slug: "pu-weathered-brick", name: "Weathered Brick", code: "PU-08", family: "PU", application: "Both", finish: "Brick", colors: ["#a8968a"], fireRating: "B1 · ASTM E84", poem: "A wall, softly grey." },
 { slug: "pu-colonial-red-brick", name: "Colonial Red Brick", code: "PU-09", family: "PU", application: "Both", finish: "Brick", colors: ["#8a3a1c"], fireRating: "B1 · ASTM E84", poem: "Red brick, no mortar to lay." },
 { slug: "pu-retro-loop-panel", name: "Retro Loop Panel", code: "PU-10", family: "PU", application: "Interior", finish: "3D Panel", colors: ["#8a6a4a"], fireRating: "B1 · ASTM E84", poem: "Rhythm pressed into stone." },
 { slug: "pu-diagonal-weave", name: "Diagonal Weave", code: "PU-11", family: "PU", application: "Interior", finish: "3D Panel", colors: ["#c9c4bb"], fireRating: "B1 · ASTM E84", poem: "A quiet grid, held in relief." },
 { slug: "pu-amber-bloom", name: "Amber Bloom", code: "PU-12", family: "PU", application: "Interior", finish: "3D Panel", colors: ["#c99a5a"], fireRating: "B1 · ASTM E84", poem: "Amber, in soft geometry." },

  // ============ WPC (12) ============
  { slug: "wpc-oak-deep", name: "Deep Oak Deck", code: "WPC-OD-140", family: "WPC", application: "Exterior", finish: "Brushed", colors: ["#6b4a2f", "#8a6a4a", "#3d2b1c"], fireRating: "B-s1,d0", cover: imgA, poem: "Long grain, deep shadow.", details: wpcOakDetails },
  { slug: "wpc-linen", name: "Linen WPC Cladding", code: "WPC-LC-160", family: "WPC", application: "Exterior", finish: "Sanded", colors: ["#c9b39a", "#a8927a", "#dbc9b3"], fireRating: "B-s1,d0", cover: imgC, poem: "The colour of morning light.", details: wpcLinenDetails },
  { slug: "wpc-charcoal", name: "Charcoal Reeded", code: "WPC-CR-170", family: "WPC", application: "Both", finish: "Reeded", colors: ["#2a2622", "#3a3530", "#1c1a17"], fireRating: "B-s1,d0", cover: imgD, poem: "A pause between rooms." },
  { slug: "wpc-teak", name: "Teak Grain Deck", code: "WPC-TG-140", family: "WPC", application: "Exterior", finish: "Brushed", colors: ["#8a5a3c", "#a87848", "#5c3a24"], fireRating: "B-s1,d0", cover: imgA, poem: "Sun-baked, salt-proof." },
  { slug: "wpc-ash", name: "Ash Grey Cladding", code: "WPC-AG-160", family: "WPC", application: "Exterior", finish: "Sanded", colors: ["#8a8580", "#a8a39e", "#5c5854"], fireRating: "B-s1,d0", cover: imgE, poem: "Silver under evening sky." },
  { slug: "wpc-walnut", name: "Walnut Deck", code: "WPC-WN-140", family: "WPC", application: "Exterior", finish: "Brushed", colors: ["#4a2f1c", "#6b4a2f", "#2a1a10"], fireRating: "B-s1,d0", cover: imgD, poem: "Dark grain, soft step." },
  { slug: "wpc-bamboo", name: "Bamboo Fluted Cladding", code: "WPC-BF-150", family: "WPC", application: "Both", finish: "Fluted", colors: ["#c9b39a", "#8a6a4a", "#a8927a"], fireRating: "B-s1,d0", cover: imgC, poem: "Vertical rhythm, quiet façade." },
  { slug: "wpc-mahogany", name: "Mahogany Reeded", code: "WPC-MR-170", family: "WPC", application: "Both", finish: "Reeded", colors: ["#6b2f1c", "#8a3a24", "#3d1810"], fireRating: "B-s1,d0", cover: imgA, poem: "Red heat, held back." },
  { slug: "wpc-ivory", name: "Ivory Cladding", code: "WPC-IV-160", family: "WPC", application: "Exterior", finish: "Sanded", colors: ["#e5ddd0", "#dbc9b3", "#c9b39a"], fireRating: "B-s1,d0", cover: imgF, poem: "A pale, patient wall." },
  { slug: "wpc-espresso", name: "Espresso Deck", code: "WPC-ES-140", family: "WPC", application: "Exterior", finish: "Brushed", colors: ["#3a2015", "#2a1a10", "#4a2f1c"], fireRating: "B-s1,d0", cover: imgE, poem: "Roasted, deep, at ease." },
  { slug: "wpc-sandstone", name: "Sandstone Cladding", code: "WPC-SS-160", family: "WPC", application: "Exterior", finish: "Sanded", colors: ["#c9a48a", "#a8836b", "#e5c9a8"], fireRating: "B-s1,d0", cover: imgB, poem: "Desert colour, wall form." },
  { slug: "wpc-noir", name: "Noir Fluted", code: "WPC-NF-150", family: "WPC", application: "Both", finish: "Fluted", colors: ["#0f0d0b", "#2a2622", "#1c1a17"], fireRating: "B-s1,d0", cover: imgD, poem: "The wall recedes." },

  // ============ SPC (12) ============
  { slug: "spc-nordic", name: "Nordic Ash SPC", code: "SPC-NA-052", family: "SPC", application: "Interior", finish: "Matte", colors: ["#d8c9b0", "#c7b598", "#e5d8c0"], fireRating: "Bfl-s1", cover: imgB, poem: "Cool north, warm room.", details: spcNordicDetails },
  { slug: "spc-terra", name: "Terra Grain SPC", code: "SPC-TG-055", family: "SPC", application: "Interior", finish: "Textured", colors: ["#a06b48", "#8b5a3c", "#c98a5f"], fireRating: "Bfl-s1", cover: imgA, poem: "Clay, but silent.", details: spcTerraDetails },
  { slug: "spc-basalt", name: "Basalt SPC", code: "SPC-BS-060", family: "SPC", application: "Interior", finish: "Stone", colors: ["#4a4744", "#5c5854", "#3a3835"], fireRating: "Bfl-s1", cover: imgE, poem: "Stone that keeps its cool." },
  { slug: "spc-oak-blonde", name: "Blonde Oak SPC", code: "SPC-BO-052", family: "SPC", application: "Interior", finish: "Matte", colors: ["#e5d0b0", "#d8c9a8", "#c9b39a"], fireRating: "Bfl-s1", cover: imgC, poem: "The floor in a light room." },
  { slug: "spc-walnut", name: "Walnut Rich SPC", code: "SPC-WR-055", family: "SPC", application: "Interior", finish: "Textured", colors: ["#4a2f1c", "#6b4a2f", "#3a2015"], fireRating: "Bfl-s1", cover: imgD, poem: "Dark warmth, dry underfoot." },
  { slug: "spc-marble", name: "Carrara SPC", code: "SPC-CM-060", family: "SPC", application: "Interior", finish: "Stone", colors: ["#e5ddd0", "#c4beb5", "#8a8580"], fireRating: "Bfl-s1", cover: imgF, poem: "Marble, without the mass." },
  { slug: "spc-slate", name: "Slate Grey SPC", code: "SPC-SG-060", family: "SPC", application: "Interior", finish: "Stone", colors: ["#5c5854", "#3a3835", "#8a8580"], fireRating: "Bfl-s1", cover: imgE, poem: "Overcast, but dry." },
  { slug: "spc-honey", name: "Honey Oak SPC", code: "SPC-HO-052", family: "SPC", application: "Interior", finish: "Matte", colors: ["#c9a067", "#a8834a", "#e5c88a"], fireRating: "Bfl-s1", cover: imgA, poem: "Late-afternoon floor." },
  { slug: "spc-ebony", name: "Ebony SPC", code: "SPC-EB-055", family: "SPC", application: "Interior", finish: "Textured", colors: ["#1c1a17", "#2a2622", "#0f0d0b"], fireRating: "Bfl-s1", cover: imgD, poem: "Black room, quiet plan." },
  { slug: "spc-mist", name: "Mist Oak SPC", code: "SPC-MO-052", family: "SPC", application: "Interior", finish: "Matte", colors: ["#c9c4be", "#a8a39e", "#dbd6d0"], fireRating: "Bfl-s1", cover: imgB, poem: "The colour of early rain." },
  { slug: "spc-sand", name: "Sand SPC", code: "SPC-SD-055", family: "SPC", application: "Interior", finish: "Textured", colors: ["#dbc9a8", "#c9b39a", "#a8927a"], fireRating: "Bfl-s1", cover: imgC, poem: "Underfoot as the dune above." },
  { slug: "spc-concrete", name: "Concrete SPC", code: "SPC-CC-060", family: "SPC", application: "Interior", finish: "Stone", colors: ["#8a8580", "#a8a39e", "#6b6864"], fireRating: "Bfl-s1", cover: imgF, poem: "Loft floor, no dust." },

  // ============ Aluminium (12) ============
  { slug: "alu-blade-70", name: "Blade Louver 70", code: "ALU-BL-070", family: "Aluminium", application: "Exterior", finish: "Anodised", colors: ["#8a8580", "#5c5854", "#c4beb5"], fireRating: "A1", cover: imgE, poem: "Sun, arrived filtered.", details: aluBladeDetails },
  { slug: "alu-fin-40", name: "Fin Louver 40", code: "ALU-FN-040", family: "Aluminium", application: "Exterior", finish: "Powder", colors: ["#2a2622", "#8a8580", "#c9a48a"], fireRating: "A1", cover: imgF, poem: "A comb through the wind.", details: aluFinDetails },
  { slug: "alu-wave", name: "Wave Screen", code: "ALU-WV-120", family: "Aluminium", application: "Exterior", finish: "Anodised", colors: ["#b4592c", "#8a8580", "#5c5854"], fireRating: "A1", cover: imgD, poem: "The wall breathes." },
  { slug: "alu-blade-100", name: "Blade Louver 100", code: "ALU-BL-100", family: "Aluminium", application: "Exterior", finish: "Anodised", colors: ["#8a8580", "#a8a39e", "#5c5854"], fireRating: "A1", cover: imgE, poem: "Bigger blade, longer shadow." },
  { slug: "alu-mesh", name: "Perforated Mesh", code: "ALU-PM-030", family: "Aluminium", application: "Both", finish: "Powder", colors: ["#2a2622", "#8a8580", "#e5ddd0"], fireRating: "A1", cover: imgF, poem: "The wall as filter." },
  { slug: "alu-tube", name: "Tube Louver 50", code: "ALU-TB-050", family: "Aluminium", application: "Exterior", finish: "Powder", colors: ["#3a3530", "#8a8580", "#c9a48a"], fireRating: "A1", cover: imgD, poem: "Round shade, soft rhythm." },
  { slug: "alu-plank", name: "Plank Cladding", code: "ALU-PC-200", family: "Aluminium", application: "Exterior", finish: "Powder", colors: ["#5c5854", "#8a8580", "#2a2622"], fireRating: "A1", cover: imgE, poem: "The building, lined." },
  { slug: "alu-diamond", name: "Diamond Screen", code: "ALU-DS-100", family: "Aluminium", application: "Both", finish: "Anodised", colors: ["#b4592c", "#8a5a3c", "#c9a48a"], fireRating: "A1", cover: imgF, poem: "Pattern that keeps the sun outside." },
  { slug: "alu-corten", name: "Corten-Look Fin", code: "ALU-CF-060", family: "Aluminium", application: "Exterior", finish: "Powder", colors: ["#8a3a1c", "#6b2f15", "#b4592c"], fireRating: "A1", cover: imgD, poem: "Rust colour, no rust." },
  { slug: "alu-linear", name: "Linear Ceiling Baffle", code: "ALU-LB-050", family: "Aluminium", application: "Both", finish: "Powder", colors: ["#2a2622", "#8a8580", "#e5ddd0"], fireRating: "A1", cover: imgE, poem: "Above, in rhythm." },
  { slug: "alu-privacy", name: "Privacy Screen 120", code: "ALU-PS-120", family: "Aluminium", application: "Both", finish: "Powder", colors: ["#3a3530", "#8a8580", "#c9a48a"], fireRating: "A1", cover: imgF, poem: "A wall you can see through, just." },
  { slug: "alu-vent", name: "Vent Blade 30", code: "ALU-VB-030", family: "Aluminium", application: "Exterior", finish: "Anodised", colors: ["#8a8580", "#a8a39e", "#c4beb5"], fireRating: "A1", cover: imgD, poem: "For hidden plant. Quiet air." },

  // ============ Panels (12) ============
  { slug: "pnl-linen", name: "Linen Acoustic Panel", code: "PNL-LA-30", family: "Panels", application: "Interior", finish: "Fabric", colors: ["#d8c9b0", "#c9b39a", "#8a7a68"], fireRating: "B-s2,d0", cover: imgC, poem: "Rooms that listen back.", details: pnlLinenDetails },
  { slug: "pnl-slat-oak", name: "Slatted Oak Panel", code: "PNL-SO-45", family: "Panels", application: "Interior", finish: "Wood", colors: ["#8a6a4a", "#6b4a2f", "#c9a48a"], fireRating: "B-s2,d0", cover: imgB, poem: "Warmth in rhythm.", details: pnlSlatDetails },
  { slug: "pnl-mineral", name: "Mineral Cast Panel", code: "PNL-MC-25", family: "Panels", application: "Interior", finish: "Cast", colors: ["#e5ddd0", "#c4beb5", "#8a8580"], fireRating: "A2", cover: imgE, poem: "A wall with weight." },
  { slug: "pnl-slat-walnut", name: "Slatted Walnut Panel", code: "PNL-SW-45", family: "Panels", application: "Interior", finish: "Wood", colors: ["#4a2f1c", "#6b4a2f", "#2a1a10"], fireRating: "B-s2,d0", cover: imgD, poem: "Dark rhythm, quiet room." },
  { slug: "pnl-charcoal-felt", name: "Charcoal Felt Panel", code: "PNL-CF-30", family: "Panels", application: "Interior", finish: "Fabric", colors: ["#3a3530", "#2a2622", "#5c5854"], fireRating: "B-s2,d0", cover: imgC, poem: "The wall, absorbing." },
  { slug: "pnl-ivory-felt", name: "Ivory Felt Panel", code: "PNL-IF-30", family: "Panels", application: "Interior", finish: "Fabric", colors: ["#e5ddd0", "#dbc9b3", "#c4beb5"], fireRating: "B-s2,d0", cover: imgF, poem: "Bright surface, still voice." },
  { slug: "pnl-3d-wave", name: "3D Wave Panel", code: "PNL-3W-20", family: "Panels", application: "Interior", finish: "MDF", colors: ["#e5ddd0", "#c4beb5", "#8a8580"], fireRating: "B-s2,d0", cover: imgE, poem: "A wall in motion." },
  { slug: "pnl-3d-diamond", name: "3D Diamond Panel", code: "PNL-3D-20", family: "Panels", application: "Interior", finish: "MDF", colors: ["#dbc9b3", "#c9b39a", "#a8927a"], fireRating: "B-s2,d0", cover: imgD, poem: "Cut light, still surface." },
  { slug: "pnl-slat-black", name: "Slatted Black Panel", code: "PNL-SB-45", family: "Panels", application: "Interior", finish: "Wood", colors: ["#1c1a17", "#2a2622", "#0f0d0b"], fireRating: "B-s2,d0", cover: imgB, poem: "Night wall, warm below." },
  { slug: "pnl-oak-veneer", name: "Oak Veneer Panel", code: "PNL-OV-18", family: "Panels", application: "Interior", finish: "Veneer", colors: ["#c9a48a", "#a8836b", "#8a6a4a"], fireRating: "B-s2,d0", cover: imgA, poem: "Flat oak, quiet plane." },
  { slug: "pnl-marble-look", name: "Marble-Look Panel", code: "PNL-ML-06", family: "Panels", application: "Interior", finish: "Laminate", colors: ["#e5ddd0", "#c4beb5", "#8a8580"], fireRating: "B-s2,d0", cover: imgF, poem: "The stone, but lighter." },
  { slug: "pnl-terrazzo", name: "Terrazzo Panel", code: "PNL-TZ-06", family: "Panels", application: "Interior", finish: "Laminate", colors: ["#e5ddd0", "#c9a48a", "#5c5854"], fireRating: "B-s2,d0", cover: imgE, poem: "Speckled surface, calm room." },
];

export function productsByFamily(family: string) {
  return PRODUCTS.filter((p) => p.family === family);
}
