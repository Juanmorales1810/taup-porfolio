"use client";

import { Form as HookForm, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Home, LoaderIcon, Mail, PhoneCall } from 'lucide-react'
import { formSchema } from '@/validations/form-schema';
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from '@/utils/i18n';
import { Textarea } from '../ui/textarea';
import { useForm } from 'react-hook-form'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { z } from 'zod';


export default function Form() {
    const [isLoading, setIsLoading] = useState(false)
    const { t } = useTranslation()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: undefined,
            message: '',
        },
    })
    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)

        try {
            // Aquí iría la lógica de autenticación
            console.log(values)

            // Simulamos una espera de 2 segundos
            await new Promise(resolve => setTimeout(resolve, 2000))


        } catch (error) {
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <section className='flex flex-col items-center justify-center max-w-7xl mx-auto py-8 space-y-8 md:flex-row md:space-x-8 md:space-y-0 px-2'>
            <div className='w-full md:w-2/3'>
                <h2 className='text-lg font-bold text-orange-600 mb-2'>
                    {t('form.subtitle')}
                </h2>
                <h3 className='text-4xl font-bold mb-3'>
                    {t('form.title')}
                </h3>
                <p className='text-zinc-500 text-balance mb-4'>
                    {t('form.description')}
                </p>
                <div className='flex flex-col items-center md:flex-row md:justify-between md:items-start md:gap-10 md:space-x-8 md:space-y-0 md:mr-20'>
                    <ul className='space-y-5 max-w-md my-10'>
                        <li>
                            <div className='flex items-center space-x-4'>
                                <div className='flex items-center justify-center size-16 bg-red-200 rounded-md'>
                                    <Home size={32} stroke='red' />
                                </div>
                                <div className='space-y-2'>
                                    <h4 className='font-bold'>
                                        {t('form.li1.title')}
                                    </h4>
                                    <p className='text-zinc-500'>
                                        {t('form.li1.description')}
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='flex items-center space-x-4'>
                                <div className='flex items-center justify-center size-16 bg-red-200 rounded-md'>
                                    <PhoneCall size={32} stroke='red' />
                                </div>
                                <div className='space-y-2'>
                                    <h4 className='font-bold'>
                                        {t('form.li2.title')}
                                    </h4>
                                    <p className='text-zinc-500'>
                                        {t('form.li2.description')}
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='flex items-center space-x-4'>
                                <div className='flex items-center justify-center size-16 bg-red-200 rounded-md'>
                                    <Mail size={32} stroke='red' />
                                </div>
                                <div className='space-y-2'>
                                    <h4 className='font-bold'>
                                        {t('form.li3.title')}
                                    </h4>
                                    <p className='text-zinc-500'>
                                        {t('form.li3.description')}
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <img src="/img/form/image 2.png" alt="Mascota" />
                </div>

            </div>
            <div className='relative w-full md:w-1/3'>
                <HookForm {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="relative space-y-8 w-full bg-zinc-50 px-12 py-8 rounded-md shadow-lg z-10">

                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>

                                    <FormControl>
                                        <Input placeholder={
                                            t('form.name')
                                        } {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>

                                    <FormControl>
                                        <Input placeholder={
                                            t('form.email')
                                        } {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder={
                                                t('form.phone')
                                            }
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Textarea
                                            placeholder={
                                                t('form.message')
                                            }
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" disabled={isLoading} className='w-full bg-orange-600'>
                            {
                                isLoading &&
                                <LoaderIcon size={16} className='mr-2 animate-spin' />
                            }
                            {isLoading ? t('form.submitLoading') : t('form.submit')}
                        </Button>
                    </form>
                </HookForm>
                <img src="/img/form/Oval.png" alt="" className='absolute -top-12 -right-10 z-0' />
                <img src="/img/form/Dotted Shape.png" alt="" className='absolute top-16 -right-10' />
                <img src="/img/form/Dotted Shape.png" alt="" className='absolute -bottom-10 -left-10' />
            </div>
        </section>
    )
}
