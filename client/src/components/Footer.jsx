import React from "react";
import { Footer } from "flowbite-react";
import {Link} from 'react-router-dom'
import {BsFacebook, BsInstagram, BsTwitch, BsTwitter} from 'react-icons/bs'

const FooterComponent = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="">
            <Link to="/" className="font-bold dark:text-white text-4xl">
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Mern
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
            <Footer.Title title="About" />
            <Footer.LinkGroup col>
                <Footer.Link href='#'>
                    Projects
                </Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div>
            <Footer.Title title="Follow us" />
            <Footer.LinkGroup col>
                <Footer.Link href='#'>
                    Github
                </Footer.Link>
                <Footer.Link href='#'>
                    Discord
                </Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div>
            <Footer.Title title="Follow us" />
            <Footer.LinkGroup col>
                <Footer.Link href='#'>
                    Privacy Policy
                </Footer.Link>
                <Footer.Link href='#'>
                    Terms & condition
                </Footer.Link>
            </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider  />
        <div >
            <Footer.Copyright href='#' year={new Date().getFullYear()} />
            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                <Footer.Icon href="#" icon={BsFacebook} />
                <Footer.Icon href="#" icon={BsInstagram} />
                <Footer.Icon href="#" icon={BsTwitch} />
                <Footer.Icon href="#" icon={BsTwitter} />
            </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
