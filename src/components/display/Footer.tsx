import { UserData } from "../UserData";

const Footer = (props: {
  userData: UserData | null | undefined;
  iconWebsite: any;
  iconTwitter: any;
  iconLocation: any;
  iconCompany: any;
}) => {
  const { userData, iconWebsite, iconTwitter, iconLocation, iconCompany } =
    props;

  const convertDate = (value: string) => {
    let date = new Date(value);

    let day = date.toLocaleString("default", { day: "2-digit" });
    let month = date.toLocaleString("default", { month: "short" });
    let year = date.toLocaleString("default", { year: "numeric" });
    return day + " " + month + " " + year;
  };

  return (
    <>
      {userData && (
        <div className="flex flex-col">
          <div className="flex flex-row gap-5 tablet:gap-[41px] desktop:gap-[37px] text-[13px]">
            <a href={userData.html_url}>
              <img
                src={userData.avatar_url}
                alt="oval pic"
                className="w-[70px] rounded-full tablet:w-[117px]"
              />
            </a>
            <div className="text-left gap-[2px] desktop:grid desktop:grid-rows-2 desktop:grid-flow-col desktop:w-[480px]">
              <p className="text-base tablet:text-[26px] text-custom-light-black dark:text-white font-bold">
                {userData.name}
              </p>
              <a href={userData.html_url}>
                <p className="text-[#0079FF] tablet:text-base desktop:-mt-7">
                  @{userData.login}
                </p>
              </a>
              <p className="text-custom-light-gray dark:text-white tablet:text-[15px] desktop:text-right">
                Joined {convertDate(userData.created_at)}
              </p>
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
              <p className="text-base tablet:text-[22px] font-bold">
                {userData.public_repos}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>Followers</p>
              <p className="text-base tablet:text-[22px] font-bold">
                {userData.followers}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>Following</p>
              <p className="text-base tablet:text-[22px] font-bold">
                {userData.following}
              </p>
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
              <a href={`https://twitter.com/${userData.login}`}>
                <p>{userData.twitter_username}</p>
              </a>
            </div>
            <div className="flex gap-5">
              <img src={iconCompany} alt="iconCompany" />
              {userData.company && <p>@{userData.company}</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Footer;
