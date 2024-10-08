import Image from "next/image";
import Lethal_Company from "../assets/test.png"

export default function AboutMe() {
  return (
    <div>
      <div>I am Jin Kai</div>
      <Image src={Lethal_Company} width={1000} height={1000} alt="Lethal Company" />
    </div>
  );
}