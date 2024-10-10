import Image from "next/image";
import Lethal_Company from "../assets/lethal_company.png"

export default function AboutMe() {
  return (
    <div className="p-3">
      <div>
        <p className="font-semibold">Hi! I&apos;m Jin Kai and welcome to my site!</p>
      </div>
      <div>
        <p>Interests: Gaming, Frisbee</p>
      </div>
      <div>
        <p>School: Singapore Management University</p>
      </div>
      <div>
        <p>Major: Computer Science</p>
      </div>
      <Image className="py-2" src={Lethal_Company} width={700} alt="Lethal Company" />
      <div>
        <p className="text-sm italic text-gray-400">Shake that booty boy</p>
      </div>
    </div>
  );
}