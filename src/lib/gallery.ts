import rammedCafeAsset from "@/assets/gallery/rammed-earth-cafe-wall.png.asset.json";
import rammedCourtyardAsset from "@/assets/gallery/rammed-earth-courtyard.png.asset.json";
import linearLeavesAsset from "@/assets/gallery/linear-surface-leaves.png.asset.json";
import interiorBedroom from "@/assets/gallery/interior-bedroom.jpg";
import interiorMajlis from "@/assets/gallery/interior-majlis.jpg";
import interiorBoutique from "@/assets/gallery/interior-boutique.jpg";
import interiorLobby from "@/assets/gallery/interior-lobby.jpg";
import archHall from "@/assets/gallery/arch-hall.jpg";
import exteriorVilla from "@/assets/gallery/exterior-villa-dusk.jpg";
import exteriorCourtyard from "@/assets/gallery/exterior-courtyard.jpg";
import facadeDetail from "@/assets/gallery/facade-detail.jpg";
import materialClay from "@/assets/gallery/material-clay-macro.jpg";
import installDetail from "@/assets/gallery/install-detail.jpg";

export type GalleryImage = { src: string; alt: string };

export const GALLERY = {
  interiorLounge: { src: interiorLounge, alt: "Curved plaster lounge finished in warm clay-stone tones" },
  interiorBedroom: { src: interiorBedroom, alt: "Minimal bedroom with warm plaster walls and travertine floor" },
  interiorMajlis: { src: interiorMajlis, alt: "Majlis with limestone cladding and an olive tree" },
  interiorBoutique: { src: interiorBoutique, alt: "Retail boutique with clay plaster walls and backlit niches" },
  interiorLobby: { src: interiorLobby, alt: "Double-height lobby clad in travertine" },
  archHall: { src: archHall, alt: "Arched plaster hall with carved geometric screens" },
  exteriorVilla: { src: exteriorVilla, alt: "Curved villa façade in warm clay finish at dusk" },
  exteriorCourtyard: { src: exteriorCourtyard, alt: "Desert courtyard with textured plaster walls" },
  facadeDetail: { src: facadeDetail, alt: "Close detail of a fluted stone-clad façade" },
  materialClay: { src: materialClay, alt: "Macro texture of flexible clay-stone surface" },
  installDetail: { src: installDetail, alt: "Flexible stone tile being applied to a wall" },
} satisfies Record<string, GalleryImage>;

export const ALL_GALLERY: GalleryImage[] = Object.values(GALLERY);

export const SCENES: GalleryImage[] = [
  GALLERY.interiorLounge,
  GALLERY.exteriorVilla,
  GALLERY.archHall,
  GALLERY.interiorMajlis,
  GALLERY.facadeDetail,
  GALLERY.interiorBoutique,
  GALLERY.exteriorCourtyard,
  GALLERY.interiorLobby,
];

export const MATERIALS: GalleryImage[] = [
  GALLERY.materialClay,
  GALLERY.installDetail,
  GALLERY.facadeDetail,
  GALLERY.interiorBedroom,
  GALLERY.archHall,
];
