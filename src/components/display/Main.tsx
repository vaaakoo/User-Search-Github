interface MainProp {
    iconSearch: any;
    searchTerm: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSearch: () => Promise<void>;
    error: boolean
}

const Main = (props: MainProp) => {

    const {iconSearch, searchTerm, handleChange, handleSearch, error} = props
    

    return (
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
                onChange={handleChange}
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
    );
}

export default Main;