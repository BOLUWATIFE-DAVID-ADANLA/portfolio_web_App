import Hero from "@/components/hero";
import Posts from "@/components/posts";
import Projects from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Hero />
     <Projects/> 
     <Posts/>
    </div>
  );
}
