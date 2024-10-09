import Image from "next/image";
import Lethal_Company from "../assets/lethal_company.png"

export default function AboutMe() {
  return (
    <div className="p-3">
      <div>I am Jin Kai and I love coding frfr</div>
      <Image src={Lethal_Company} width={1000} height={1000} alt="Lethal Company" />
    </div>
  );
}