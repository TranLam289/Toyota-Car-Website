import React, { Component } from 'react';
import CustomButton from '../share-components/CustomButton';
import Image from 'next/image';
import CarCard from './CarCard';
import Link from 'next/link';
import ShareImageProps from '../share-components/share-props';

class Hero extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      isScrolled: false,
    };
  }

  handleScroll = () => {};

  render() {
    return (
      <div className='hero'>
        <div className='flex-1 pt-24'>
          <div className='hero__image'>
            {/* <Image
              src='/images/homepage/top-section/top-page-mobile.png'
              alt='hero'
              width={500}
              height={500}
              className='object-fit w-full h-full lg:hidden'
            /> */}
            <ShareImageProps
              src='/images/homepage/top-section/top-page-mobile.png'
              alt='hero'
              width={500}
              height={500}
              className='object-fit w-full h-full lg:hidden'
            />
            {/* <Image
              src='/images/homepage/top-section/top-page-desktop.png'
              alt='hero'
              width={500}
              height={500}
              className='object-fit w-full h-full hidden lg:block'
            /> */}
            <ShareImageProps
              src='/images/homepage/top-section/top-page-desktop.png'
              alt='hero'
              width={500}
              height={500}
              className='object-fit w-full h-full hidden lg:block'
            />
          </div>
          <div className='px-4 py-4 lg:px-8'>
            <h1 className='hero__title text-[25px] font-bold py-4 xl:text-[28px]'>
              ヤリス - トヨタ自動車
            </h1>
            <p className='hero__subtitle text-[16px] lg:text-[18px] xl:text-[22px]'>
              ヤリスはトヨタ自動車が製造するコンパクトカーです。この車は、優れた燃費効率とスムーズな走行を提供することで知られています。ヤリスは都市部での運転に最適であり、コンパクトなボディサイズにもかかわらず、快適で広々とした室内空間を提供します。また、安全性能にも優れており、最新の安全技術を搭載しています。ヤリスはスタイリッシュで洗練された外観と、使いやすいインテリアデザインが特徴です。
            </p>

            <Link href='/car-detail-pages'>
              <CustomButton
                title='もっと車を探索する'
                containerStyles='bg-stone-700 text-white mt-10 hover:text-white hover:bg-blue-500 duration-300 text-[16px] lg:text-[25px] rounded-xl'
                handleClick={this.handleScroll}
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
