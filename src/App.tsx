import React, { useState } from "react";
import { UserData } from "./components/UserData";
import axios from "axios";
import Footer from "./components/display/Footer";
import DefaultFooter from "./components/display/DefaultFooter";

import iconSearch from "./assets/iconSearch.svg";
import iconMoon from "./assets/iconMoon.svg";
import iconsun from "./assets/iconsun.svg";
import iconWebsite from "./assets/iconWebsite.svg";
import iconTwitter from "./assets/iconTwitter.svg";
import oval from "./assets/oval.svg";
import iconLocation from "./assets/iconLocation.svg";
import iconCompany from "./assets/iconCompany.svg";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState<UserData | null | undefined>(null);
  const [error, setError] = useState<boolean>(false);

  const handleSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${searchTerm}`
      );
      setUserData(data);
      setError(false);
      setSearchTerm("");
      console.log(data);
    } catch (err) {
      setError(true);
      setSearchTerm("");
    }
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && "dark"} box-border `}>
      <div className="bg-custom-gray-cover-light dark:bg-custom-dark-black-darker dark:text-white duration-500  items-center min-h-screen max-w-screen mb-6">
        {/*dark mode - Header  */}
        <div className="mx-auto tablet:py-36 py-[31px] desktop:w-[730px] tablet:w-[573px] mobile:w-[327px]">
          <header className="flex items-center justify-between">
            <p className="font-bold text-[26px] text-[#222731 dark:text-white]">
              devfinder
            </p>
            <div className="flex justify-between my-[9px] gap-4 text-custom-light-gray dark:text-white">
              {!darkMode ? <p> DARK</p> : <p>LIGHT</p>}
              <button
                onClick={handleDarkModeToggle}
                className="focus:outline-none cursor-pointer"
              >
                {darkMode ? (
                  <img
                    src={iconsun}
                    alt="iconsun"
                    className="h-6 w-6 fill-custom-light-gray dark:fill-white"
                  />
                ) : (
                  <img
                    src={iconMoon}
                    alt="iconMoon"
                    className="h-6 w-6 fill-custom-light-gray dark:fill-white"
                  />
                )}
              </button>
            </div>
          </header>

          {/* Input panel - main */}
          <main className="flex flex-row bg-custom-white-cover-light dark:bg-custom-dark-blue-darker justify-between mt-[35px] rounded-2xl shadow-[0_16px_30px_-10px_rgba(70,96,187,0.198567)]">
            {/* icon-search.svg */}
            <div className="flex gap-[11px] tablet:gap-[26px]">
              <img
                src={iconSearch}
                alt="iconSearch"
                className="ml-4 my-[22px] tablet:w-[21px] w-4"
              />

              <input
                className={`bg-custom-white-cover-light dark:bg-custom-dark-blue-darker outline-none w-[184px] tablet:w-[256px] desktop:w-[400px] my-[22px] text-xs tablet:text-lg font-normal  dark:placeholder:text-white tablet:placeholder:text-custom-light-blue ${
                  error
                    ? "placeholder:text-red-500"
                    : "placeholder:text-custom-light-blue"
                } dark:text-white text-[#222731] leading-6 `}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search GitHub username..."
              />
            </div>
            {/* if error */}
            {error ? (
              <p className=" text-red-600 hidden tablet:block tablet:py-6 text-right text-lg">
                No result
              </p>
            ) : null}

            <button
              onClick={handleSearch}
              className="tablet:w-[106px] w-[84px] my-[9.5px] mr-[10px] bg-custom-blue hover:bg-custom-blue-hov text-white rounded-md focus:outline-none text-sm tablet:text-base font-bold"
            >
              Search
            </button>
          </main>

          {/* footer */}
          <div className="mt-6 py-8 px-6 tablet:p-10 desktop:py-11 desktop:px-12 flex bg-custom-white-cover-light dark:bg-custom-dark-blue-darker rounded-2xl desktop:min-h-[444px] tablet:min-h-[481px] min-h-[517px] mb-8 shadow-[0_16px_30px_-10px_rgba(70,96,187,0.198567)]">
            {!userData ? (
              <DefaultFooter
                iconWebsite={iconWebsite}
                iconTwitter={iconTwitter}
                oval={oval}
                iconLocation={iconLocation}
                iconCompany={iconCompany}
              />
            ) : (
              <Footer
                userData={userData}
                iconLocation={iconLocation}
                iconCompany={iconCompany}
                iconWebsite={iconWebsite}
                iconTwitter={iconTwitter}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
