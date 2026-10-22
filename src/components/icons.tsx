import {
  Banknote, Briefcase, ClipboardCheck, Clock, FileText, Globe, Landmark, Receipt, Scale, ShieldCheck, Zap,
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
  zap: Zap,
  banknote: Banknote,
  globe: Globe,
} as const;

export type IconName = keyof typeof map;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const C = map[name];
  return <C strokeWidth={1.6} aria-hidden="true" {...props} />;
}
