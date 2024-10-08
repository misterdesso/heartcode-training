import Image from "next/image";
import Test from "../assets/test.png"

export default function AboutMe() {
    return (
      <div>
        <div>Im Jin Kai</div>
        <Image src={Test} width={1000} alt="test" />
      </div>
    );
  }