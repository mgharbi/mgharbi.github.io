import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogleScholar, faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCamera, faHouse, faFilePdf, faCodeBranch } from '@fortawesome/free-solid-svg-icons'


function Project({project}) {
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
    <div className="flex bg-cyan-400">
      <div className="flex-none bg-yellow-300 w-36 h-36">
        Photo
      </div>
      <div className="ps-2 text-sm sm:px-4">
        <h3 className="font-semibold">{project.title}</h3>
        <p className="italic">{authorList}</p>
        <p>{project.venue} {project.year}</p>
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

function Projects() {
  let projects = [
    {
      "title": "project 1",
      "authors": ["Michaël Gharbi", "Frédo Durand"],
      "venue": "CVPR",
      "year": "2024",
      "homepage": "http",
      "code": "http",
      "pdf": "http",
    }
  ];
  return (
    <ul>
      {
        projects.map((project, index) => (
          <li key={index}>
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
            <Link href={link} className="hover:text-sky-500">
              <FontAwesomeIcon icon={icon} fixedWidth listItem/> 
            </Link>
          </li>
      ))
      }
    </ul>
  );
}

function Divider({title}) {
  return (
    <div className="flex items-center">
      <div className="flex-1 border-t-2 border-gray-200"></div>
        <span className="px-3 text-gray-600">{title}</span>
      <div className="flex-1 border-t-2 border-gray-200"></div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="p-2 sm:p-6 lg:px-12 md:px-6 sm:px-6 font-sans">
      <div className="flex flex-col sm:flex-row items-center sm:items-start bg-cyan-400">
        <div className="bg-purple-300 flex flex-col items-center">
          <div className="flex-none bg-yellow-300 w-36 h-36 rounded-full">
            Photo
          </div>
          <SocialLinks/>
        </div>
        <div className="bg-purple-200 pt-2 pb-4 sm:pt-0 sm:px-4">
          <h1 className="text-2xl">Michaël Gharbi</h1>
          <h3 className="text-gray-600">Research Scientist - Adobe</h3>
          <ul className="flex flex-col my-1 text-sm items-start ">
            <li><a href="mailto:mgharbi@adobe.com" className="hover:text-sky-500">mgharbi@adobe.com</a></li>
            <li>+ 1 (857)-210-9559</li>
            <li><Link href="https://goo.gl/maps/Dpp2mXCJHjpRxwHL9" className="hover:text-sky-500">Adobe, 601 Townsend St, CA 94103</Link></li>
          </ul>
          <p className="pt-2 text-sm text-justify">
            <span className="font-semibold">Bio. </span>
            I am currently a Research Scientist at Adobe. I was previously a PhD
            student at MIT CSAIL, where I had the chance to work under the
            supervision of Prof. Frédo Durand. My research interests include
            computational photography, computer vision and machine learning. Prior
            to joining MIT, I completed my undergraduate studies in France, at
            École Polytechnique, with a focus on Applied Mathematics.
          </p>
          <p className="pt-2 text-sm text-justify">
            <span className="font-semibold">Internships. </span>
            I am always happy to host and mentor PhD and motivated MSc students
            at Adobe, San Francisco (typically over the summer). If you would
            like to work with me, please send me an email describing your past
            experience and current research interests. Make sure to include your
            CV, 1 or 2 references and a paragraph about specific topics you
            would like to explore during your internship.
          </p>
        </div>
      </div>
      <Divider title="Research"/>
      <div className="bg-red-400">
        <Projects/>
      </div>
      <Divider title="Internships"/>
      <div className="bg-red-300">
        <h3>Internships</h3>
        <p>
            In the past, I have had the pleasure to collaborate with the following
            students: Julien Philip, Dmitriy Smirnov, Utkarsh Singhal, Tamar Rott Shaham,
            Zhihao Xia, Spandan Madan, Ishit Mehta, Mustafa Işık, Pradyumna Reddy, James
            Hong, Karima Ma, Thibaut Ehret, Holly Jackson, Lucy Chai, Sai Praveen Bangaru,
            Difan Liu, Yash Belhe, Yotam Nitzan, Lucas Valença, Caroline Chan, Goutam
            Bhat, Prafull Sharma, Yinbo Chen, Ke Wang, Jiteng Mu, Tianwei Yin, Hadi
            AlZayer.
        </p>
      </div>
    </main>
  );
}
