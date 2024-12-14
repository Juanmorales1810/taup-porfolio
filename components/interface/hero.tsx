import { useTranslation } from "@/utils/i18n";
import { Download } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero() {
    const { t } = useTranslation()

    return (
        <section className="w-full h-dvh bg-gradient-to-r from-neutral-50 via-orange-500 to-red-600 pt-16 px-4">
            <div className="flex justify-center items-center gap-11 h-[calc(100vh-64px)] w-full max-w-7xl mx-auto">
                <div className="relative flex flex-col md:w-2/3">
                    <h1 className="text-5xl font-bold mb-7 z-10">
                        {t('hero.title')}
                    </h1>
                    <p className="mb-7 z-10">
                        {t('hero.description')}
                    </p>
                    <div className="flex justify-start items-center gap-4 mb-20 z-10">
                        <Button className="bg-orange-600">
                            {t('hero.contact')}
                        </Button>
                        <Button variant={"ghost"}>
                            <div className="rounded-full bg-orange-500 p-1">
                                <Download stroke="#ffffff" />
                            </div>
                            {t('hero.download')}
                        </Button>
                    </div>
                    <div className="z-10">
                        <p className="mb-6">
                            {t('hero.clients')}
                        </p>
                        <div className="flex justify-between items-center">
                            <img src="/img/hero/oracle.png" alt="Oracle" />
                            <img src="/img/hero/intel.png" alt="Intel" />
                            <img src="/img/hero/logitech.png" alt="Logitech" />
                        </div>
                    </div>
                    <img src="/img/hero/Dotted Shape.png" alt="dots" className="absolute -top-10 left-0 z-0 md:hidden" />
                    <img src="/img/hero/Dotted Shape.png" alt="dots" className="absolute -bottom-10 right-0 z-0 opacity-50 md:hidden" />
                </div>
                <div className="relative w-full hidden md:block">
                    <img src="/img/hero/VOS RELAJATE (Post en Instagram) (1) 1.png" alt="Logo en dispositivos" className="relative z-10" />
                    <img src="/img/hero/Dotted Shape.png" alt="dots" className="absolute md:bottom-10 lg:bottom-32 left-24 z-0" />
                </div>
            </div>

        </section>
    )
}
