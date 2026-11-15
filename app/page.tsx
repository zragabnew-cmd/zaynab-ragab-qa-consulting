import Hero from "@/components/Hero";
import ProblemGrid from "@/components/ProblemGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import QAHealthCheck from "@/components/QAHealthCheck";
import ServicesGrid from "@/components/ServicesGrid";
import AIUseCases from "@/components/AIUseCases";
import Outcomes from "@/components/Outcomes";
import IdealClient from "@/components/IdealClient";
import AboutSection from "@/components/AboutSection";
import SpeakingSection from "@/components/SpeakingSection";
import ConsultationSection from "@/components/ConsultationSection";
import CTASection from "@/components/CTASection";
import { SITE } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.title,
  description: SITE.description,
  url: SITE.url,
  provider: { "@type": "Person", name: SITE.name, jobTitle: "Senior Software Testing Engineer & QA Consultant" },
  serviceType: "Software testing and QA consulting",
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <ProblemGrid />
      <ProcessTimeline />
      <QAHealthCheck />
      <ServicesGrid />
      <AIUseCases />
      <Outcomes />
      <IdealClient />
      <AboutSection />
      <SpeakingSection />
      <ConsultationSection />
      <CTASection />
    </>
  );
}
