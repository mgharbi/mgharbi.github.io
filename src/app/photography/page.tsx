import type { Metadata } from "next";
import { galleries } from "./galleries";
import GalleryPage from "./GalleryPage";

export const metadata: Metadata = {
  title: "vernissage indigenous",
  description: "Photography by Michaël Gharbi",
};

export default function Photography() {
  return <GalleryPage gallery={galleries[0]} />;
}
