import { Hero } from '@/components/sections/hero';
import { ForumsStrip } from '@/components/sections/forums-strip';
import { PracticeGrid } from '@/components/sections/practice-grid';
import { Clients } from '@/components/sections/clients';
import { Stats } from '@/components/sections/stats';
import { Team } from '@/components/sections/team';
import { Insights } from '@/components/sections/insights';
import { Offices } from '@/components/sections/offices';
import { Faq } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ForumsStrip />
      <PracticeGrid />
      <Clients />
      <Stats />
      <Team />
      <Insights />
      <Offices />
      <Faq />
      <Contact />
    </>
  );
}
