import { Link } from "react-router-dom";
import {BsGlobe} from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="flex justify-between p-5  border-b border-gray-400">
        <div className="flex flex-col">
          <p className="font-bold text-lg">Teach the world online</p>
          <p className="font-medium">
            Create an online video course,reach students across the globe , and
            earn money
          </p>
        </div>
        <button className="border bg-transparent font-bold p-2 border-white ">
          Teach on Udemy
        </button>
      </div>

      <div className="text-lg font-bold text-white p-5 border-b border-gray-400 flex justify-between items-center">
        <p>
          Top companies choose{" "}
          <span className="text-indigo-400">Udemy Business</span> to build
          in-demand career skills.
        </p>
        <div className=" items-center hidden lg:flex">
          <img
            className="mx-2"
            src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
            alt="Nasdaq"
          ></img>
          <img
            className="mx-2"
            src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
            alt="Volkswagen"
          ></img>
          <img
            className="mx-2"
            src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
            alt="Box"
          ></img>
          <img
            className="mx-2"
            src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
            alt="NetApp"
          ></img>
          <img
            className="mx-2"
            src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
            alt="Eventbrite"
          ></img>
        </div>
      </div>

      <div className="flex justify-between p-5">
        <div className=" flex justify-between ">
          <div className="flex flex-col mr-10">
            <Link>Udemy Business</Link>
            <Link>Teach on Udemy</Link>
            <Link>Get the app</Link>
            <Link>About us </Link>
            <Link>Contact us</Link>
          </div>
          <div className="flex flex-col mx-10 ">
            <Link>Careers</Link>
            <Link>Blog</Link>
            <Link>Help and Support</Link>
            <Link>Affilate</Link>
            <Link>Investors</Link>
          </div>
          <div className="flex flex-col mx-10">
            <Link>Terms</Link>
            <Link>Privacy policy</Link>
            <Link>Cookie settings</Link>
            <Link>SiteMap</Link>
            <Link>Accessibility statement</Link>
          </div>
        </div>
        <button className="border border-white h-10 w-28 flex items-center justify-center"><BsGlobe className="mr-2"/>English</button>
      </div>
      <div className="p-10 flex justify-between items-center">
        <img className="w-20" src="https://companieslogo.com/img/orig/UDMY_BIG.D-125629a7.png?t=1635531363" alt="Logo" />
        <p>@ 2023 Udemy,Inc.</p>
      </div>
    </footer>
  );
};
