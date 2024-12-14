import { useTranslation } from '@/utils/i18n'
import { MessageCircle } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function Cta() {
    const { t } = useTranslation()
    return (
        <section className='flex flex-col-reverse justify-center items-center py-20 px-4 max-w-5xl mx-auto md:flex-row'>
            <div className='md:w-1/2'>
                <img src="/es/img/cta/mascota.png" alt="" />
            </div>
            <div className='space-y-2 md:w-1/2'>
                <h2 className='text-orange-500 font-semibold'>
                    {t('cta.title')}
                </h2>
                <h3 className='text-4xl font-bold text-balance pb-8'>
                    {t('cta.subtitle')}
                </h3>
                <p className='text-balance'>
                    {t('cta.description')}
                </p>
                <p className='text-balance pb-4'>
                    {t('cta.description2')}
                </p>
                <Button className='bg-orange-500'>
                    <MessageCircle />
                    <Link href="#">
                        {t('cta.contact')}
                    </Link>
                </Button>
            </div>

        </section>
    )
}
