import { Gallery } from "./galleries";
import GalleryViewer from "./GalleryViewer";
import Sidebar from "./Sidebar";

export default function GalleryPage({ gallery }: { gallery: Gallery }) {
  return (
    <div className="min-h-screen bg-white text-[#222]">
      <Sidebar activeSlug={gallery.slug} />
      <main className="p-6 sm:ml-[280px] sm:py-10 sm:pr-10 sm:pl-0">
        <GalleryViewer key={gallery.slug} gallery={gallery} />
      </main>
    </div>
  );
}
