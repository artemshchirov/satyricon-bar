import Link from 'next/link';
import * as React from 'react';
import '@/lib/env';

import Arrow from '~/svg/Arrow.svg';
import Facebook from '~/svg/Facebook.svg';
import Instagram from '~/svg/Instagram.svg';
import Logo from '~/svg/Logo.svg';
import Whatsapp from '~/svg/Whatsapp.svg';

export default function HomePage() {
  return (
    <main className='text-[#1A1A1A]'>
      <section className='bg-white flex flex-col items-center pt-[20px] md:pt-[50px] px-[15px]  md:px-[78px] pb-[24px]  md:p-[30px]'>
        <Link href='/'>
          <Logo className='w-[87px] h-[68px] md:w-[143px] md:h-[111px]' />
        </Link>

        <h1 className='mt-[120px] md:mt-[150px] text-[34px] leading-[34px] font-medium whitespace-nowrap md:text-[64px] md:leading-[64px]'>
          Cooking Our Website.
        </h1>

        <Link
          href='https://example.com'
          target='_blank'
          className='relative flex items-center justify-center mt-[110px] md:mt-[140px] w-[330px] md:w-[345px] h-[80px] md:h-[102px] border border-black rounded-[28px] hover:opacity-80 active:opacity-70 transition-opacity duration-100 ease-in-out'
        >
          <div className='absolute w-[calc(100%_+_4px)] bg-white h-[39px] md:h-[50px] z-1' />
          <div className='absolute w-[280px] md:w-[293px] bg-white h-[calc(100%_+_4px)] z-1' />
          <div className='relative z-2 flex items-start gap-x-[9px] md:gap-x-[14px] text-[20px] md:text-[30px] leading-[20px] md:leading-[30px]'>
            RESERVE A TABLE
            <Arrow className='w-[9px] md:w-[14px] h-[9px] md:h-[14px]' />
          </div>
        </Link>

        <div className='mt-[110px] md:mt-[150px] flex flex-col items-center gap-y-[18px]'>
          <h2 className='text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal'>
            CONTACT US
          </h2>
          <ul className='flex gap-x-[10px]'>
            <li className='hover:opacity-80 active:opacity-70 transition-opacity duration-100 ease-in-out'>
              <Link href='https://example.com' target='_blank'>
                <Whatsapp className='w-[48px] h-[48px]' />
              </Link>
            </li>
            <li className='hover:opacity-80 active:opacity-70 transition-opacity duration-100 ease-in-out'>
              <Link href='https://example.com' target='_blank'>
                <Instagram className='w-[48px] h-[48px]' />
              </Link>
            </li>
            <li className='hover:opacity-80 active:opacity-70 transition-opacity duration-100 ease-in-out'>
              <Link href='https://example.com' target='_blank'>
                <Facebook className='w-[48px] h-[48px]' />
              </Link>
            </li>
          </ul>
        </div>

        <footer className='mt-[60px] md:mt-[80px] flex flex-col items-center gap-y-[10px] text-[12px] leading-[12px]'>
          <p>8:00-02:00</p>
          <Link
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              'HATIB 8, HAIFA, ISRAEL'
            )}`}
            target='_blank'
            className='hover:opacity-80 active:opacity-70 transition-opacity duration-100 ease-in-out'
          >
            HATIB 8, HAIFA, ISRAEL
          </Link>
        </footer>
      </section>
    </main>
  );
}
