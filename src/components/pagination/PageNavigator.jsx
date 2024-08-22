import styles from './PageNavigator.module.css';

const PageNavigator = () => {

  // Render pagination items for mobile view
  const renderPaginationItems = (pages) => {
    return pages.map((page) => (
      <p
        key={`pagin-item-${page}`}
        className="px-[12px] py-[5px] rounded-[4px] bg-[#E0E0E0] mx-[5px]"
      >
        {page}
      </p>
    ));
  };

  return (
    <>
      {/* Pagination for larger screens */}
      <div className="hidden bg-white fixed bottom-0 pt-[10px] left-0 sm:block">
        <div className="w-[100vw] flex justify-between items-center py-[10px] px-[50px]">
          <p>Previous</p>
          <div className="flex">{renderPaginationItems([1, 2, 3])}</div>
          <p>Next</p>
        </div>

        <div className="w-[100%] flex justify-between pt-[10px] pb-0 items-center px-[20px]">
          {/* Navigation icons */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="25"
              viewBox="0 0 30 25"
              fill="none"
            >
              <g clipPath="url(#clip0_230_8833)">
                <path
                  d="M25 20.5859C25 20.8315 24.8829 21.067 24.6746 21.2406C24.4662 21.4143 24.1836 21.5118 23.8889 21.5118H6.11111C5.81643 21.5118 5.53381 21.4143 5.32544 21.2406C5.11706 21.067 5 20.8315 5 20.5859V10.8544C4.99988 10.7133 5.03846 10.5741 5.1128 10.4473C5.18713 10.3205 5.29524 10.2096 5.42889 10.1229L14.3178 4.36183C14.5128 4.2354 14.7529 4.16675 15 4.16675C15.2471 4.16675 15.4872 4.2354 15.6822 4.36183L24.5711 10.1229C24.7048 10.2096 24.8129 10.3205 24.8872 10.4473C24.9615 10.5741 25.0001 10.7133 25 10.8544V20.5859ZM22.7778 19.66V11.3063L15 6.26554L7.22222 11.3063V19.66H22.7778ZM9.44445 15.9563H20.5556V17.8081H9.44445V15.9563Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_230_8833">
                  <rect width="30" height="25" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 20.8995L7.05022 15.9497C6.07127 14.9707 5.40459 13.7235 5.1345 12.3656C4.86441 11.0077 5.00304 9.60027 5.53285 8.32119C6.06267 7.04212 6.95988 5.94887 8.11102 5.17971C9.26216 4.41054 10.6155 4 12 4C13.3845 4 14.7378 4.41054 15.889 5.17971C17.0401 5.94887 17.9373 7.04212 18.4671 8.32119C18.997 9.60027 19.1356 11.0077 18.8655 12.3656C18.5954 13.7235 17.9287 14.9707 16.9498 15.9497L12 20.8995ZM15.85 14.8499C16.6114 14.0885 17.1298 13.1184 17.3399 12.0623C17.5499 11.0062 17.442 9.91151 17.03 8.9167C16.6179 7.92189 15.92 7.07162 15.0247 6.4734C14.1294 5.87518 13.0768 5.55589 12 5.55589C10.9232 5.55589 9.87061 5.87518 8.97529 6.4734C8.07997 7.07162 7.38214 7.92189 6.97004 8.9167C6.55795 9.91151 6.4501 11.0062 6.66013 12.0623C6.87016 13.1184 7.38864 14.0885 8.15 14.8499L12 18.6999L15.85 14.8499ZM12 12.5555C11.5874 12.5555 11.1918 12.3916 10.9001 12.0999C10.6083 11.8082 10.4444 11.4125 10.4444 10.9999C10.4444 10.5874 10.6083 10.1917 10.9001 9.89999C11.1918 9.60827 11.5874 9.44438 12 9.44438C12.4126 9.44438 12.8082 9.60827 13.0999 9.89999C13.3917 10.1917 13.5556 10.5874 13.5556 10.9999C13.5556 11.4125 13.3917 11.8082 13.0999 12.0999C12.8082 12.3916 12.4126 12.5555 12 12.5555Z"
                fill="black"
              />
            </svg>
          </div>

          <div>
            <img src="/images/fly1.png" alt="Fly" />
          </div>

          <div>
            <img src="/images/weather1.png" alt="Weather" />
          </div>
        </div>
      </div>

      {/* Pagination for smaller screens */}
      <div
        className={`${styles.Container} sm:hidden flex items-center py-[15px] border border-x-0 b px-[15px]`}
      >
        <p className="mr-auto">Showing 1 to 10 of 50 entries</p>
        <p className="mr-[15px]">Display</p>
        <input
          type="number"
          defaultValue={10}
          className="border mr-[15px] outline-0 w-[70px]"
        />
        <div className="bg-[#DFDFDF] px-[10px] mr-[10px] py-[5px] rounded-[4px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="16"
            viewBox="0 0 23 16"
            fill="none"
          >
            <path
              d="M13.9867 12L8.60657 8L13.9867 4"
              stroke="#343A40"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex">{renderPaginationItems([1, 2, 3, 4])}</div>
        <div className="bg-[#DFDFDF] px-[10px] py-[5px] rounded-[4px] ml-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="16"
            viewBox="0 0 23 16"
            fill="none"
          >
            <path
              d="M8.0133 4L13.3934 8L8.0133 12"
              stroke="#343A40"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default PageNavigator;
