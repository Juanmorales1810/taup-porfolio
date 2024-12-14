import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslation } from "@/utils/i18n"
import CardProject from "../card-project"

export default function Projects() {
    const { t } = useTranslation()
    return (
        <section className="relative w-full">
            <div className="bg-amber-500">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="drop-shadow-lg absolute top-0 left-0 z-10">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="#ffffff"></path>
                </svg>
                <div className="relative max-w-5xl mx-auto py-40 px-4 z-20 space-y-5">
                    <h2 className="text-xl font-bold text-orange-600 text-center">
                        {t('projects.title')}
                    </h2>
                    <h3 className="text-4xl font-bold text-zinc-900 text-center">
                        {t('projects.subtitle')}
                    </h3>
                    <p className="text-pretty text-center max-w-lg mx-auto font-medium">
                        {t('projects.description')}
                    </p>
                    <Tabs defaultValue="allProject" className="flex flex-col justify-center items-center w-full mx-auto">
                        <TabsList>
                            <TabsTrigger value="allProject" >
                                {t('projects.menu.all')}
                            </TabsTrigger>
                            <TabsTrigger value="design">
                                {t('projects.menu.design')}
                            </TabsTrigger>
                            <TabsTrigger value="programming">
                                {t('projects.menu.programming')}
                            </TabsTrigger>
                            <TabsTrigger value="marketing">
                                {t('projects.menu.marketing')}
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="allProject">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                                <CardProject
                                    src="/es/img/project/Rectangle 4504.png"
                                    title="Proyecto 1"
                                    subtitle="algo"
                                    href="#"
                                />
                            </div>
                        </TabsContent>
                        <TabsContent value="design">Change your password here.</TabsContent>
                        <TabsContent value="programming">Change your password here.</TabsContent>
                        <TabsContent value="marketing">Change your password here.</TabsContent>
                    </Tabs>

                </div>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="rotate-180 drop-shadow-lg absolute bottom-0 left-0 z-10">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="#ffffff"></path>
                </svg>
            </div>
        </section>
    )
}
