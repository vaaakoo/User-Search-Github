import React, { useState } from "react";
import { UserData } from "./components/UserData";
import axios from "axios";
import Footer from "./components/display/Footer";
import DefaultFooter from "./components/display/DefaultFooter";
import Main from "./components/display/Main";

import iconSearch from "./assets/iconSearch.svg";
import iconMoon from "./assets/iconMoon.svg";
import iconsun from "./assets/iconsun.svg";
import iconWebsite from "./assets/iconWebsite.svg";
import iconTwitter from "./assets/iconTwitter.svg";
import oval from "./assets/oval.svg";
import iconLocation from "./assets/iconLocation.svg";
import iconCompany from "./assets/iconCompany.svg";
import Header from "./components/display/Header";

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={`${darkMode && "dark"} box-border `}>
      <div className="bg-custom-gray-cover-light dark:bg-custom-dark-black-darker dark:text-white duration-500  items-center min-h-screen max-w-screen mb-6">
        <div className="mx-auto tablet:py-36 py-[31px] desktop:w-[730px] tablet:w-[573px] mobile:w-[327px]">
          {/*dark mode - Header  */}

          <Header
            darkMode={darkMode}
            handleDarkModeToggle={handleDarkModeToggle}
            iconsun={iconsun}
            iconMoon={iconMoon}
          />

          {/* Input panel - main */}

          <Main
            iconSearch={iconSearch}
            searchTerm={searchTerm}
            handleSearch={handleSearch}
            handleChange={handleChange}
            error={error}
          />

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
