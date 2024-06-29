import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogleScholar, faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCamera, faHouse, faFilePdf, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from "@fortawesome/fontawesome-svg-core";


function Project({project}: {project: ProjectInterface}) {
  const authorList = project.authors.map((author, index) => {
    // if (author == "Michaël Gharbi" ){
    //   author = <span className="font-semibold">{author}</span>;
    // }
    if (index < project.authors.length - 1) {
      return author + ", ";
    } 
    return author;
  }).join('');

  return (
    <div className="flex">
      <Link href={project.homepage} className="hover:text-sky-500">
        <div className="flex-none w-36 h-24">
          { project.image ? (
            <Image
              src={`/images/projects/${project.image}`}
              width={500}
              height={500}
              alt=""
            />
            ) : null
          }
        </div>
      </Link>
      <div className="ps-2 text-sm sm:px-4">
        <Link href={project.homepage} className="hover:text-sky-500">
          <h3 className="font-semibold">{project.title}</h3>
          <p className="italic">{authorList}</p>
          <p>{project.venue} {project.year}</p>
        </Link>
        <ul className="flex space-x-4 sm:space-x-2 items-center pt-2">
          { project.homepage ? (
              <li className="w-6 sm:w-4">
                <Link href={project.homepage} className="hover:text-sky-500">
                  <FontAwesomeIcon icon={faHouse} fixedWidth listItem/> 
                </Link>
              </li>
            ) : null
          }
          { project.pdf ? (
              <li className="w-6 sm:w-4">
              <Link href="" className="hover:text-sky-500">
                <FontAwesomeIcon icon={faFilePdf} fixedWidth listItem/> 
              </Link>
              </li>
            ) : null
          }
          { project.code ? (
              <li className="w-6 sm:w-4">
              <Link href="" className="hover:text-sky-500">
                <FontAwesomeIcon icon={faGithub} fixedWidth listItem/> 
              </Link>
              </li>
            ) : null
          }
        </ul>
      </div>
    </div>
  );
}

interface ProjectInterface {
  title: string;
  authors: string[];
  venue: string;
  year: string;
  homepage: string;
  code: string;
  pdf: string;
  image: string;
}

function Projects() {
  let projects = [
    {
      "title": "One-step Diffusion with Distribution Matching Distillation",
      "authors": ["Tianwei Yin", "Michaël Gharbi", "Richard Zhang", "Eli Shechtman", "Frédo Durand", "William T. Freeman", "Taesung Park"],
      "venue": "CVPR",
      "year": "2024",
      "homepage": "https://tianweiy.github.io/dmd/",
      "code": "http",
      "pdf": "https://arxiv.org/abs/2311.18828",
      "image": "dmd.png"
    },
    {
      "title": "project 2",
      "authors": ["Michaël Gharbi", "Frédo Durand"],
      "venue": "CVPR",
      "year": "2024",
      "homepage": "http",
      "code": "http",
      "pdf": "http",
      "image": ""
    },
  ];
  return (
    <ul>
      {
        projects.map((project, index) => (
          <li key={index} className="my-4">
            <Project project={project}/>
          </li>
        ))
      }
    </ul>
  );
}

function SocialLinks() {
  const links = [
    ["https://scholar.google.com/citations?user=R6jgG94AAAAJ&hl=en", faGoogleScholar],
    ["https://github.com/mgharbi", faGithub],
    ["https://www.linkedin.com/in/michaelgharbi/", faLinkedin],
    ["https://twitter.com/m_gharbi", faTwitter],
    ["https://www.vernissage-indigenous.com/", faCamera],
  ];
  return (
    <ul className="flex flex-row space-x-2 text-sm my-2 items-center">
      {
        links.map(([link, icon], index) => (
          <li className="w-6 sm:w-5" key={index}>
            <Link href={link.toString()} className="hover:text-sky-500">
              <FontAwesomeIcon icon={icon as IconProp} fixedWidth listItem/> 
            </Link>
          </li>
      ))
      }
    </ul>
  );
}

function Divider({title}: { title: string }) {
  return (
    <div className="flex items-center">
      <div className="flex-1 border-t-2 border-gray-200"></div>
        <span className="px-3 text-gray-600">{title}</span>
      <div className="flex-1 border-t-2 border-gray-200"></div>
    </div>
  );
}

function Students() {
  let students = [
    {
      "name": "Julien Philip",
      "webpage": "https://www-sop.inria.fr/members/Julien.Philip/",
      "year": 2019,
    },
    {
      "name": "Dmitriy Smirnov",
      "webpage": "https://dsmirnov.me/",
      "year": 2019,
    },
    {
      "name": "Utkarsh Singhal",
      "webpage": "https://utkarsh.ai",
      "year": 2019,
    },
    {
      "name": "Tamar Rott Shaham",
      "webpage": "https://tamarott.github.io", 
      "year": 2019,
    },
    {
      "name": "Zhihao Xia",
      "webpage": "https://www.cse.wustl.edu/~zhihao.xia/",
      "year": 2019,
    },
    {
      "name": "Spandan Madan", 
      "webpage": "https://spandan-madan.github.io/about",
      "year": 2019,
    },
    {
      "name": "Ishit Mehta",
      "webpage": "https://scholar.google.co.in/citations?user=pUqhY-wAAAAJ&hl=en",
      "year": 2020,
    },
    {
      "name": "Mustafa Işık",
      "webpage": "https://www.mustafaisik.net/",
      "year": 2020,
    },
    {
      "name": "Pradyumna Reddy",
      "webpage": "https://preddy5.github.io/",
      "year": 2020,
    },
    {
      "name": "James Hong",
      "webpage": "https://jhong93.github.io/",
      "year": 2020,
    },
    {
      "name": "Karima Ma",
      "webpage": "https://people.csail.mit.edu/karima/home.html",
      "year": 2020,
    },
    {
      "name": "Thibaut Ehret",
      "webpage": "https://tehret.github.io/",
      "year": 2020,
    },
    {
      "name": "Holly Jackson",
      "webpage": "https://www.holly-jackson.com/about/",
      "year": 2020,
    },
    {
      "name": "Lucy Chai",
      "webpage": "https://people.csail.mit.edu/lrchai/",
      "year": 2021,
    },
    {
      "name": "Sai Praveen Bangaru",
      "webpage": "http://people.csail.mit.edu/sbangaru/",
      "year": 2021,
    },
    {
      "name": "Difan Liu",
      "webpage": "https://difanliu.github.io/",
      "year": 2021,
    },
    {
      "name": "Camille Biscarrat",
      "webpage": "https://www.csail.mit.edu/person/camille-biscarrat",
      "year": 2021,
    },
    {
      "name": "Jerry Hsu",
      "webpage": "https://chichenghsu.com/",
      "year": 2021,
    },
    {
      "name": "Dave Epstein",
      "webpage": "https://dave.ml/",
      "year": 2021,
    },
    {
      "name": "Yash Belhe",
      "webpage": "https://yashbelhe.github.io/",
      "year": 2022,
    },
    {
      "name": "Yotam Nitzan",
      "webpage": "https://yotamnitzan.github.io/",
      "year": 2022,
    },
    {
      "name": "Lucas Valença",
      "webpage": "https://valenca.io/",
      "year": 2022,
    },
    {
      "name": "Caroline Chan",
      "webpage": "https://people.csail.mit.edu/cmchan/",
      "year": 2022,
    },
    {
      "name": "Goutam Bhat",
      "webpage": "https://goutamgmb.github.io/",
      "year": 2022,
    },
    {
      "name": "Prafull Sharma",
      "webpage": "https://prafullsharma.net/",
      "year": 2022,
    },
    {
      "name": "Yinbo Chen",
      "webpage": "https://yinboc.github.io/",
      "year": 2022,
    },
    {
      "name": "Ke Wang",
      "webpage": "https://kewang0622.github.io/",
      "year": 2022,
    },
    {
      "name": "Jiteng Mu",
      "webpage": "https://jitengmu.github.io/",
      "year": 2023,
    },
    {
      "name": "Tianwei Yin",
      "webpage": "https://tianweiy.github.io/",
      "year": 2023,
    },
    {
      "name": "Hadi AlZayer",
      "webpage": "https://hadizayer.github.io/",
      "year": 2023,
    },
  ];
  return (
    <div>
      {
        students.map((student, index) => (
          <span key={index} className="inline after:content-[','] last:after:content-['.'] pe-1">
            <Link className="hover:text-sky-500" href={student.webpage}>{student.name}</Link> 
          </span>
        ))
      }
    </div>
  );
}

export default function Home() {
  return (
    <main className="p-4 sm:p-6 lg:px-12 md:px-6 sm:px-6 font-sans">
      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        <div className=" flex flex-col items-center">
          <div className="flex-none w-36 h-36">
          <Image
            src="/images/profile.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className="rounded-full"
          />
          </div>
          <SocialLinks/>
        </div>
        <div className="pt-2 pb-4 sm:pt-0 sm:px-4">
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-2xl">Michaël Gharbi</h1>
            <h3 className="text-gray-600">Co-Founder & Research Scientist</h3>
            <ul className="flex flex-col my-1 text-sm items-center sm:items-start">
              <li><a href="mailto:michael.yanis.gharbi@gmail.com" className="hover:text-sky-500">michael.yanis.gharbi@gmail.com</a></li>
              <li>+ 1 (857)-210-9559</li>
            </ul>
          </div>
          <p className="pt-4 text-sm text-justify">
            <span className="font-semibold">Bio. </span>
              I am a co-founder and research scientist at a stealth startup. I can hopefully share more details soon.
              Previously, I was a Research Scientist at <Link className="hover:text-sky-500 font-semibold" href="https://research.adobe.com/">Adobe Research</Link>.
              Before that, I was
              a PhD student at <Link className="hover:text-sky-500 font-semibold" href="https://www.csail.mit.edu/" target="_blank">MIT CSAIL</Link>,
              where I had the chance to work under the
              supervision of <Link className="hover:text-sky-500 font-semibold" href="http://people.csail.mit.edu/fredo/" target="_blank">Prof. Frédo Durand</Link>. My research
              interests include computational photography,
              computer vision and machine learning. Prior to
              joining MIT, I completed my undergraduate studies
              in France, at <Link className="hover:text-sky-500 font-semibold" href="https://www.polytechnique.edu/en" target="_blank">École Polytechnique</Link>, with a focus on
              Applied Mathematics.
          </p>
          <p className="pt-4 text-sm text-justify">
            If you are looking for the economist, that would be my sister <Link className="hover:text-sky-500" href="https://sarahgharbi.github.io/" target="_blank">Sarah</Link>.
          </p>
        </div>
      </div>
      <Divider title="Research"/>
      <div className="">
        <Projects/>
      </div>
      {/* <Divider title="Technology"/>
      <div className="">
      </div> */}
      <Divider title="Past students"/>
      <div className="">
        <p className="pt-2 text-sm text-justify">
          I have had the great privilege of mentoring and collaborating with wonderful students:
          <Students/>
        </p>
      </div>
    </main>
  );
}
