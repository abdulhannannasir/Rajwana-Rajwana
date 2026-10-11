import {
  Briefcase, ClipboardCheck, Clock, FileText, Landmark, Receipt, Scale, ShieldCheck,
  type LucideProps,
} from 'lucide-react';

const map = {
  scale: Scale,
  receipt: Receipt,
  landmark: Landmark,
  briefcase: Briefcase,
  clipboard: ClipboardCheck,
  shield: ShieldCheck,
  clock: Clock,
  file: FileText,
} as const;

export type IconName = keyof typeof map;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const C = map[name];
  return <C strokeWidth={1.6} aria-hidden="true" {...props} />;
}
