interface headerProp {
    darkMode: boolean;
    iconMoon: any;
    iconsun: any;
    handleDarkModeToggle: () => void;
}

const Header = (props: headerProp) => {

    const {darkMode, iconMoon, iconsun, handleDarkModeToggle}=props
    return (
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
    );
}

export default Header;