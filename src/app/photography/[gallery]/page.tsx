import type { Metadata } from "next";
import { galleries } from "../galleries";
import GalleryPage from "../GalleryPage";

export function generateStaticParams() {
  return galleries.map((g) => ({ gallery: g.slug }));
}

export function generateMetadata({ params }: { params: { gallery: string } }): Metadata {
  const gallery = galleries.find((g) => g.slug === params.gallery);
  return {
    title: `${gallery?.title ?? "Photography"} — vernissage indigenous`,
    description: "Photography by Michaël Gharbi",
  };
}

export default function Page({ params }: { params: { gallery: string } }) {
  const gallery = galleries.find((g) => g.slug === params.gallery) ?? galleries[0];
  return <GalleryPage gallery={gallery} />;
}
