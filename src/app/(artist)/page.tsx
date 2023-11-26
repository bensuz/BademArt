import Biography from "@/components/Biography";
import LogoDraw from "@/components/LogoDraw";
import MainHero from "@/components/MainHero";

export default async function Home() {
    return (
        <div className="max-w-screen z-0 flex h-[500rem] flex-col items-center gap-20 bg-white">
            <MainHero />
            <Biography />
        </div>
    );
}
