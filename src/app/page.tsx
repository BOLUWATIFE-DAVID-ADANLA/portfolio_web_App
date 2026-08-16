import Hero from "@/components/hero";
import NowPlaying from "@/components/now-playing";
import Projects from "@/components/projects";
import Stack from "@/components/stack";
import Posts from "@/components/posts";
import FindMe from "@/components/find-me";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 md:px-10 py-6 md:py-10 flex flex-col gap-14">
      <NowPlaying />
      <Hero />
      <Projects />
      <Stack />
      <Posts />
      <FindMe />
    </div>
  );
}
