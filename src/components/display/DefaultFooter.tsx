const DefaultFooter = (props: {
  iconWebsite: any;
  iconTwitter: any;
  oval: any;
  iconLocation: any;
  iconCompany: any;
}) => {
  const { iconWebsite, iconTwitter, oval, iconLocation, iconCompany } = props;
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-5 tablet:gap-[41px] desktop:gap-[37px] text-[13px]">
        <img
          src={oval}
          alt="oval pic"
          className="w-[70] rounded-full tablet:w-[117px]"
        />
        <div className="text-left gap-[2px] desktop:grid desktop:grid-rows-2 desktop:grid-flow-col">
          <p className="text-base tablet:text-[26px] text-custom-light-black dark:text-white font-bold">
            The Ococat
          </p>
          <p className="text-[#0079FF] tablet:text-base desktop:-mt-7">
            @octocat
          </p>
          <p className="text-custom-light-gray dark:text-white tablet:text-[15px] desktop:ml-[100px]">
            Joined 25 jan 2011
          </p>
        </div>
      </div>
      <div className="mt-[33px] tablet:mt-6 tablet:text-[15px] text-[13px] desktop:pl-[154px] desktop:-mt-12">
        <p className="text-justify text-custom-light-blue dark:text-white">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
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
  );
};

export default DefaultFooter;
