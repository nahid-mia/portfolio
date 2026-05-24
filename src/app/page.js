import CardBody from "@/components/CardBody";
import HeroSection from "@/components/HeroSection";
import ProjectBody from "@/components/ProjectBody";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <h3 className="text-xl font-semibold text-gray-300 text-center mt-15 mb-5">What I DO</h3>
      <div className="w-10/12 mx-auto">
        <CardBody></CardBody>
      </div>
      <h3 className="text-xl font-semibold text-gray-300 text-center mt-15 mb-5">Some of my earliest Projects</h3>
      <div className="w-10/12 mx-auto">
        <ProjectBody></ProjectBody>
      </div>
    </div>
  );
}
