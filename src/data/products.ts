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

import mcm0 from "@/assets/mcm2/dune-plaster.webp.asset.json";
import mcm1 from "@/assets/mcm2/diagonal-weave.webp.asset.json";
import mcm2 from "@/assets/mcm2/linen-wash.webp.asset.json";
import mcm3 from "@/assets/mcm2/golden-sand.webp.asset.json";
import mcm4 from "@/assets/mcm2/cliff-rock.webp.asset.json";
import mcm5 from "@/assets/mcm2/fine-reed.webp.asset.json";
import mcm6 from "@/assets/mcm2/woven-grid.webp.asset.json";
import mcm7 from "@/assets/mcm2/chalk-wall.webp.asset.json";
import mcm8 from "@/assets/mcm2/corded-sand.webp.asset.json";
import mcm9 from "@/assets/mcm2/ribbed-frost.webp.asset.json";
import mcm10 from "@/assets/mcm2/desert-dune.webp.asset.json";
import mcm11 from "@/assets/mcm2/classic-travertine.webp.asset.json";
import mcm12 from "@/assets/mcm2/ivory-brick.webp.asset.json";

export const FAMILIES = [
  {
    key: "MCM",
    name: "MCM Flexible Cladding",
    poem: "Stone and clay, thin as fabric.",
    cover: mcm11.url,
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
  // ============ MCM (13) ============
  { slug: "mcm-dune-plaster", name: "Dune Plaster", code: "MCM-DP", family: "MCM", application: "Both", finish: "Textured", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm0.url, poem: "Sand, held still." },
  { slug: "mcm-diagonal-weave", name: "Diagonal Weave", code: "MCM-DW", family: "MCM", application: "Both", finish: "Patterned", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm1.url, poem: "A quiet grid, on the bias." },
  { slug: "mcm-linen-wash", name: "Linen Wash", code: "MCM-LW", family: "MCM", application: "Both", finish: "Textured", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm2.url, poem: "Cloth, in clay." },
  { slug: "mcm-golden-sand", name: "Golden Sand", code: "MCM-GS", family: "MCM", application: "Both", finish: "Natural", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm3.url, poem: "Warm as late light." },
  { slug: "mcm-cliff-rock", name: "Cliff Rock", code: "MCM-CR", family: "MCM", application: "Both", finish: "Stone", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm4.url, poem: "Weight, only in the eye." },
  { slug: "mcm-fine-reed", name: "Fine Reed", code: "MCM-FR", family: "MCM", application: "Both", finish: "Ribbed", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm5.url, poem: "Lines that hold the light." },
  { slug: "mcm-woven-grid", name: "Woven Grid", code: "MCM-WG", family: "MCM", application: "Both", finish: "Patterned", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm6.url, poem: "A weave, pressed in stone." },
  { slug: "mcm-chalk-wall", name: "Chalk Wall", code: "MCM-CW", family: "MCM", application: "Both", finish: "Natural", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm7.url, poem: "Soft as chalk, hard as clay." },
  { slug: "mcm-corded-sand", name: "Corded Sand", code: "MCM-CS", family: "MCM", application: "Both", finish: "Ribbed", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm8.url, poem: "Ribbed, like drifting sand." },
  { slug: "mcm-ribbed-frost", name: "Ribbed Frost", code: "MCM-RF", family: "MCM", application: "Both", finish: "Ribbed", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm9.url, poem: "Cool lines, close together." },
  { slug: "mcm-desert-dune", name: "Desert Dune", code: "MCM-DD", family: "MCM", application: "Both", finish: "Textured", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm10.url, poem: "The dune, in relief." },
  { slug: "mcm-classic-travertine", name: "Classic Travertine", code: "MCM-CT", family: "MCM", application: "Both", finish: "Travertine", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm11.url, poem: "Old stone, thin as skin." },
  { slug: "mcm-ivory-brick", name: "Ivory Brick", code: "MCM-IB", family: "MCM", application: "Both", finish: "Brick", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm12.url, poem: "Brick, kept in whitewash." },

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
