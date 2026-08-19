import rammedCafeAsset from "@/assets/gallery/rammed-earth-cafe-wall.png.asset.json";
import rammedCourtyardAsset from "@/assets/gallery/rammed-earth-courtyard.png.asset.json";
import linearLeavesAsset from "@/assets/gallery/linear-surface-leaves.png.asset.json";
import herringboneAsset from "@/assets/gallery/interior-herringbone-wall.png.asset.json";
import backlitWallAsset from "@/assets/gallery/interior-backlit-textured-wall.png.asset.json";
import sandstoneFacadeAsset from "@/assets/gallery/facade-sandstone-panels.png.asset.json";
import interiorBoutique from "@/assets/gallery/interior-boutique.jpg";
import interiorLobby from "@/assets/gallery/interior-lobby.jpg";
import archHall from "@/assets/gallery/arch-hall.jpg";
import materialClay from "@/assets/gallery/material-clay-macro.jpg";
import installDetail from "@/assets/gallery/install-detail.jpg";

export type GalleryImage = { src: string; alt: string };

export const GALLERY = {
  interiorLounge: { src: rammedCafeAsset.url, alt: "Rammed-earth textured wall lining a daylit café interior" },
  interiorBedroom: { src: herringboneAsset.url, alt: "Guest room wall clad in fine herringbone-textured panels" },
  interiorMajlis: { src: backlitWallAsset.url, alt: "Backlit textured stone wall in a warm majlis interior" },
  interiorBoutique: { src: interiorBoutique, alt: "Retail boutique with clay plaster walls and backlit niches" },
  interiorLobby: { src: interiorLobby, alt: "Double-height lobby clad in travertine" },
  archHall: { src: archHall, alt: "Arched plaster hall with carved geometric screens" },
  exteriorVilla: { src: sandstoneFacadeAsset.url, alt: "Sandstone-textured cladding panels on a building façade" },
  exteriorCourtyard: { src: rammedCourtyardAsset.url, alt: "Rammed-earth courtyard walls framing the sky under a timber soffit" },
  facadeDetail: { src: linearLeavesAsset.url, alt: "Fine linear-grooved stone surface with green foliage in the foreground" },
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
