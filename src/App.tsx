import React, { useState } from "react";
import { UserData } from "./components/UserData";
import axios from "axios";


import oval from "./assets/oval.svg";
import iconSearch from "./assets/iconSearch.svg";
import iconMoon from "./assets/iconMoon.svg";
import iconsun from "./assets/iconsun.svg";
import iconLocation from  "./assets/iconLocation.svg"
import  iconCompany  from "./assets/iconCompany.svg"
import  iconTwitter  from "./assets/iconTwitter.svg"
import  iconWebsite  from "./assets/iconWebsite.svg"



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


    // const time = new Date(userData?.created_at)
    //    const newTime = time.toLocaleDateString();

    const convertDate = (value:string) => {
        let date = new Date(value);

        let day = date.toLocaleString('default', { day: '2-digit' });
        let month = date.toLocaleString('default', { month: 'short' });
        let year = date.toLocaleString('default', { year: 'numeric' });
        return day + ' ' + month + ' ' + year;
    }
    



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
            <div className="flex flex-col">
              <div className="flex flex-row gap-5 tablet:gap-[41px] desktop:gap-[37px] text-[13px]">
                <img src={oval} alt="oval pic" className="w-[70] rounded-full tablet:w-[117px]"/>
                <div className="text-left gap-[2px] desktop:grid desktop:grid-rows-2 desktop:grid-flow-col">
                  <p className="text-base tablet:text-[26px] text-custom-light-black dark:text-white font-bold">The Ococat</p>
                  <p className="text-[#0079FF] tablet:text-base desktop:-mt-7">@octocat</p>
                  <p className="text-custom-light-gray dark:text-white tablet:text-[15px] desktop:ml-[100px]">Joined 25 jan 2011</p>
                </div>
              </div>
              <div className="mt-[33px] tablet:mt-6 tablet:text-[15px] text-[13px] desktop:pl-[154px] desktop:-mt-12">
                <p className="text-justify text-custom-light-blue dark:text-white">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros.
                </p>
              </div>
              <div className="mt-[23px] tablet:mt-8 rounded-[10px] justify-between bg-custom-gray-cover-light dark:bg-custom-dark-black-darker text-[11px] flex px-[15px] py-[18px] tablet:py-[15px] desktop:ml-[154px] tablet:px-8">
                <div className="flex flex-col gap-2">
                  <p>Repos</p>
                  <p className="text-base tablet:text-[22px] font-bold">8</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p>Followers</p>
                  <p className="text-base tablet:text-[22px] font-bold">8</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p>Following</p>
                  <p className="text-base tablet:text-[22px] font-bold">8</p>
                </div>
              </div>
              <div className="flex flex-col tablet:grid tablet:grid-cols-2 tablet:justify-between mt-5 tablet:mt-8 gap-[17px] text-[13px] text-custom-light-blue tablet:dark:text-white font-normal desktop:ml-[154px]">
                <div className="flex gap-5 ">
                  <img src={iconLocation} alt="iconLocation" />
                  <p>San Francisco</p>
                </div>
                <div className="flex gap-5">
                  <img src={iconWebsite} alt="iconWebsite" />
                  <p>https://github.blog</p>
                </div>
                <div className="flex gap-5">
                  <img src={iconTwitter} alt="iconTwitter" />
                  <p>Not Available</p>
                </div>
                <div className="flex gap-5">
                  <img src={iconCompany} alt="iconCompany" />
                  <p>@github</p>
                </div>
              </div>
            </div>
            ) : (
              userData && (<div className="flex flex-col">
              <div className="flex flex-row gap-5 tablet:gap-[41px] desktop:gap-[37px] text-[13px]">
                <img src={userData.avatar_url} alt="oval pic" className="w-[70px] rounded-full tablet:w-[117px]"/>
                <div className="text-left gap-[2px] desktop:grid desktop:grid-rows-2 desktop:grid-flow-col desktop:w-[480px]">
                  <p className="text-base tablet:text-[26px] text-custom-light-black dark:text-white font-bold">{userData.name}</p>
                  <p className="text-[#0079FF] tablet:text-base desktop:-mt-7">@{userData.login}</p>
                  <p className="text-custom-light-gray dark:text-white tablet:text-[15px] desktop:text-right">Joined {convertDate(userData.created_at)}</p>
                </div>
              </div>
              <div className="mt-[33px] tablet:mt-6 tablet:text-[15px] text-[13px] desktop:pl-[154px] desktop:-mt-10">
                <p className="text-justify text-custom-light-blue dark:text-white">
                  {userData.bio}
                </p>
              </div>
              <div className="mt-[23px] tablet:mt-8 rounded-[10px] justify-between bg-custom-gray-cover-light dark:bg-custom-dark-black-darker text-[11px] flex px-[15px] py-[18px] tablet:py-[15px] desktop:ml-[154px] desktop:w-[480px] tablet:px-8">
                <div className="flex flex-col gap-2">
                  <p>Repos</p>
                  <p className="text-base tablet:text-[22px] font-bold">{userData.public_repos}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p>Followers</p>
                  <p className="text-base tablet:text-[22px] font-bold">{userData.followers}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p>Following</p>
                  <p className="text-base tablet:text-[22px] font-bold">{userData.following}</p>
                </div>
              </div>
              <div className="flex flex-col tablet:grid tablet:grid-cols-2 tablet:justify-between mt-5 tablet:mt-8 gap-[17px] text-[13px] text-custom-light-blue tablet:dark:text-white font-normal desktop:ml-[154px] ">
                <div className="flex gap-5 ">
                  <img src={iconLocation} alt="iconLocation" />
                  <p>{userData.location}</p>
                </div>
                <div className="flex gap-5">
                  <img src={iconWebsite} alt="iconWebsite" />
                  <p className="hover:underline cursor-pointer">{userData.blog}</p>
                </div>
                <div className="flex gap-5">
                  <img src={iconTwitter} alt="iconTwitter" />
                  <p>{userData.twitter_username}</p>
                </div>
                <div className="flex gap-5">
                  <img src={iconCompany} alt="iconCompany" />
                  {userData.company && <p>@{userData.company}</p>}
                </div>
              </div>
            </div>)
            )}
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default App;
