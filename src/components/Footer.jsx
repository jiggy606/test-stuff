import React from 'react'

import img1 from '../assets/banner.jpg'

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function Footerr() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className=' items-center'>
            <img src={img1} alt='' className=' rounded-xl h-60' />
          </div>
          <div className="grid grid-cols-2 gap-2 sm:mt-4 sm:grid-cols-3 sm:gap-20">
            <div>
              <Footer.Title title="socials" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">IG</Footer.Link>
                <Footer.Link href="#">WA Business</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="follows" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">fufu</Footer.Link>
                <Footer.Link href="#">semo</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="tems" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">wait 4 u</Footer.Link>
                <Footer.Link href="#">terms &amp; tems</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default Footerr