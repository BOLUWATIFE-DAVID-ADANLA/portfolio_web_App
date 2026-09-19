import Hero from "@/components/hero";
import NowPlaying from "@/components/now-playing";
import Projects from "@/components/projects";
import Posts from "@/components/posts";
import FindMe from "@/components/find-me";
import Reveal from "@/components/reveal";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 md:px-10 py-6 md:py-10 flex flex-col gap-14">
      <Reveal>
        <NowPlaying />
      </Reveal>
      <Hero />
      <Projects />
      <Posts />
      <Reveal>
        <FindMe />
      </Reveal>
    </div>
  );
}
