import React, { useState, useEffect } from "react";
// css
import "./css/componentsCSS.css";
// react-icons
import { RiMenuFill, RiCloseFill } from "react-icons/ri";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [isMobile, setIsMobile] = useState(false);

  const checkAndToggleTheme = () => {
    if (window.scrollY > 100) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkAndToggleTheme);
  }, [theme]);

  return (
    <>
      <header className="c-header z-50" data-theme={`${theme}`}>
        <div className="max-w-7xl px-20 mx-auto max-lg:px-8">
          <nav className="flex flex-row items-center z-10 max-lg:border-b">
            {/* left */}
            <div className="flex justify-start flex-1 max-lg:hidden">
              <div>
                <ul className="flex flex-row flex-1 gap-6">
                  <li>企業方案</li>
                  <li>關於我們</li>
                  <li>關於食物浪費</li>
                </ul>
              </div>
            </div>

            {/* center */}
            <div className="font-bold text-4xl h-20">center</div>

            {/* right */}
            <div className="flex justify-end flex-1 max-lg:justify-center">
              <div className="flex flex-row gap-8">
                <div className="btn">
                  <a>使用者登入</a>
                </div>
                <div className="btn max-lg:hidden">
                  <a>企業註冊</a>
                </div>
              </div>
            </div>

            <button
              className="max-lg:block hidden"
              onClick={() => {
                setIsMobileNavOpen(!isMobileNavOpen);
              }}
            >
              {isMobileNavOpen ? (
                <RiCloseFill className="text-4xl" />
              ) : (
                <RiMenuFill className="text-4xl" />
              )}
            </button>
          </nav>
        </div>

        {/* mobile menu */}
        <div
          className={`c-mobileNav_container  md:max-w-[70vw] ${
            isMobileNavOpen ? "translate-x-0" : "translate-x-full"
          }`}
        ></div>
      </header>
    </>
  );
};

export default Header;
