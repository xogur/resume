import { Contact } from "@/components/resume/Contact";
import { Experience } from "@/components/resume/Experience";
import { Hero } from "@/components/resume/Hero";
import { Projects } from "@/components/resume/Projects";
import { Skills } from "@/components/resume/Skills";
import { Strengths } from "@/components/resume/Strengths";
import { resume } from "@/data/resume";

export default function Home() {
  return (
    <main className="page-shell">
      <Hero profile={resume.profile} contacts={resume.contacts} highlights={resume.highlights} />
      <Strengths strengths={resume.strengths} />
      <Experience items={resume.experience} />
      <Projects projects={resume.projects} />
      <Skills groups={resume.skills} />
      <Contact contacts={resume.contacts} />
    </main>
  );
}
