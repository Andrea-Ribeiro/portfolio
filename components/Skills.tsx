import {
  LucideIcon,
  SquareTerminal,
  Cog,
  Palette,
  HeartHandshake,
} from "lucide-react";

interface TabLayoutProps {
  title: string;
  icon: LucideIcon;
  iconColor: string;
  content: React.ReactNode;
}

function TabLayout({
  title,
  icon: Icon,
  iconColor,
  content,
}: Readonly<TabLayoutProps>) {
  return (
    <fieldset className="border border-muted p-4">
      <legend className="flex items-center gap-2 px-2">
        <Icon className={iconColor} />
        <span className="text-muted font-semibold text-xl">{title}</span>
      </legend>
      {content}
    </fieldset>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col gap-8 pt-24 md:pt-34 px-6 mx-auto max-w-6xl"
    >
      <header className="flex justify-between items-center border-b pb-4 md:max-w-md max-w-xl">
        <div className="flex items-center gap-2">
          <SquareTerminal className="text-muted" />
          <h3 className="text-muted font-semibold text-2xl">SKILLS.EXE</h3>
        </div>

        <span className="text-[#50C878]">STATUS: ONLINE</span>
      </header>

      <div className="flex flex-col gap-2 mb-4">
        <p className="text-[#969696] text-xs font-thin">
          &gt;&gt; INITIATING SKILLS_MATRIX.SH
        </p>

        <p className="text-muted typing">Executing directory scan... [OK]</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <TabLayout
          title="Engineering"
          icon={Cog}
          iconColor="text-[#DA70D6]"
          content="Frontend"
        />
        <TabLayout
          title="UX & Product"
          icon={Palette}
          iconColor="text-[#FF8A8A]"
          content="Frontend"
        />
        <TabLayout
          title="Collaboration"
          icon={HeartHandshake}
          iconColor="text-[#FFA500]"
          content="Frontend"
        />
      </div>
    </section>
  );
}
