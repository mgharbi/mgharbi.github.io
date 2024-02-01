import Image from "next/image";
import Link from "next/link";

import { Github, CameraFill } from "react-bootstrap-icons";


function Project({name, description, authors, venue, year}) {
  const authorList = authors.map((author, index) => {
    // if (author == "Michaël Gharbi" ){
    //   author = <span className="font-semibold">{author}</span>;
    // }
    if (index < authors.length - 1) {
      return author + ", ";
    } 
    return author;
  }).join('');

  return (
    <div className="flex flex-row py-2">
      <Link href="">
        <div className="w-36 h-36 relative bg-clip-border bg-violet-600"></div>
      </Link>
      <div className="ps-6">
        <Link href="" className="hover:text-sky-500">
          <h3 className="font-semibold">{name}</h3>
        </Link>
        <p className="italic text-sm">{authorList}</p>
        <p className="text-sm">{venue} {year}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex flex-col px-24 py-12">
      <div className="flex flex-row items-center">
        <div className="top-0 shrink-0 w-36 h-48 relative bg-violet-600 "></div>
        <div className="ps-6">
          <h1 className="text-2xl">Michaël Gharbi</h1>
          <h3 className="">Research Scientist - Adobe</h3>
          <ul className="flex flex-row pt-2">
            <li className="pe-2">Email</li>
            <li className="pe-2">Phone</li>
            <li className="pe-2">Address</li>
            <li className="pe-2">Scholar</li>
            <li className="pe-2">LinkedIn</li>
            <li className="pe-2">Twitter</li>
            <li className="pe-2">CV</li>
            <li className="pe-2"><Link href="https://github.com/mgharbi" className="hover:text-sky-500"><Github/></Link></li>
            <li className="pe-2"><Link href="https://www.vernissage-indigenous.com/" className="hover:text-sky-500"><CameraFill/></Link></li>
          </ul>
          <p className="pt-2 text-sm">
            <span className="font-semibold">Bio: </span>
            I am currently a Research Scientist at Adobe. I was previously a PhD
            student at MIT CSAIL, where I had the chance to work under the
            supervision of Prof. Frédo Durand. My research interests include
            computational photography, computer vision and machine learning. Prior
            to joining MIT, I completed my undergraduate studies in France, at
            École Polytechnique, with a focus on Applied Mathematics.
          </p>
          <p className="pt-2 text-sm">
            <span className="font-semibold">Internships: </span>
            I am currently a Research Scientist at Adobe. I was previously a PhD
            student at MIT CSAIL, where I had the chance to work under the
            supervision of Prof. Frédo Durand. My research interests include
            computational photography, computer vision and machine learning. Prior
            to joining MIT, I completed my undergraduate studies in France, at
            École Polytechnique, with a focus on Applied Mathematics.
          </p>
        </div>
      </div>
      <div className="flex items-center py-12">
        <div className="flex-1 border-t-2 border-gray-200"></div>
          <span className="px-3 text-gray-500">Research</span>
        <div className="flex-1 border-t-2 border-gray-200"></div>
      </div>
      <div className="flex flex-col items-start">
        <Project name="One-step Diffusion with Distribution Matching Distillation" description="A cool project" authors={[
          "Tianwei Yin", "Michaël Gharbi", "Richard Zhang", "Eli Shechtman", "Frédo Durand", "William T. Freeman", "Taesung Park"]} venue="CVPR" year="2024"/>
      </div>
      <div className="flex flex-col items-start">
        <Project name="One-step Diffusion with Distribution Matching Distillation" description="A cool project" authors={[
          "Tianwei Yin", "Michaël Gharbi", "Richard Zhang", "Eli Shechtman", "Frédo Durand", "William T. Freeman", "Taesung Park"]} venue="CVPR" year="2024"/>
      </div>
      <div className="flex flex-col items-start">
        <Project name="One-step Diffusion with Distribution Matching Distillation" description="A cool project" authors={[
          "Tianwei Yin", "Michaël Gharbi", "Richard Zhang", "Eli Shechtman", "Frédo Durand", "William T. Freeman", "Taesung Park"]} venue="CVPR" year="2024"/>
      </div>
    </main>
  );
}
