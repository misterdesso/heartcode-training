import Image from "next/image";
import Lethal_Company from "../assets/lethal_company.png"

export default function AboutMe() {
  return (
    <div className="p-3">
      <div>
        <p className="font-semibold">I am Jin Kai and welcome to my site!</p>
      </div>
      <div>
        <p>Interests: Gaming</p>
      </div>
      <Image className="py-2" src={Lethal_Company} width={700} alt="Lethal Company" />
      <div>
        <p>School: Singapore Management University</p>
      </div>
      <Image className="py-2" src={Lethal_Company} width={700} alt="Lethal Company" />
      <div>
        <p>Major: Computer Science</p>
      </div>
      <Image className="py-2" src={Lethal_Company} width={700} alt="Lethal Company" />
    </div>
  );
}