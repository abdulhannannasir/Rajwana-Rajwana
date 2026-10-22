import { FadeInItem, FadeInStagger } from '@/components/fade-in-stagger';
import { Reveal } from '@/components/reveal';
import { about } from '@/content/site';

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="pb-20 lg:pb-26">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14 lg:px-10">
        <Reveal>
          <span className="eyebrow">{about.eyebrow}</span>
          <h2 id="about-heading" className="mt-3 max-w-[16ch] text-[clamp(1.9rem,4.4vw,3rem)] leading-[1.1]">
            {about.heading}
          </h2>
          <p className="mt-5 max-w-[48ch] text-muted">{about.lead}</p>
        </Reveal>
        <FadeInStagger className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {about.principles.map((p) => (
            <FadeInItem key={p.title} className="flex">
              <div className="flex w-full flex-col gap-2 rounded-[24px] bg-card p-6 shadow-[0_0_0_1px_var(--line)]">
                <h3 className="font-display text-[22px] leading-tight">{p.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted">{p.text}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
