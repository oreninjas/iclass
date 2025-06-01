import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const Home = () => {
  return (
    <div className="w-full h-screen flex">
      {/* Left */}
      <div className="w-16 h-full bg-[#E6E6E6]/33 flex flex-col items-center">
        <div className="w-14 h-14 flex items-center justify-center">
          <div className="w-10 h-10 bg-[#E8E8E8] flex items-center justify-center rounded-full">
            <UserButton />
          </div>
        </div>
        <div className="w-full h-full flex gap-3 flex-col items-center justify-center">
          {/* This just for the admin will work on this later */}
          {/* <div className="w-10 h-10 bg-[#D9D9D9] rounded-lg flex items-center justify-center cursor-pointer hover:scale-120 transition-transform duration-200">
            <svg
              aria-hidden="true"
              role="graphics-symbol"
              viewBox="0 0 16 16"
              className="plusSmall"
              style={{
                width: 32,
                height: 32,
                display: "block",
                fill: "rgba(0, 0, 0, 0.46)",
                flexShrink: 0,
              }}
            >
              <path d="M8 2.74a.66.66 0 0 1 .66.66v3.94h3.94a.66.66 0 0 1 0 1.32H8.66v3.94a.66.66 0 0 1-1.32 0V8.66H3.4a.66.66 0 0 1 0-1.32h3.94V3.4A.66.66 0 0 1 8 2.74"></path>
            </svg>
          </div> */}
          <div className="w-10 h-10 bg-[#D9D9D9] rounded-lg flex items-center justify-center cursor-pointer hover:scale-120 transition-transform duration-200">
            <svg
              aria-hidden="true"
              role="graphics-symbol"
              viewBox="0 0 16 16"
              className="block fill-neutral-500 shrink-0"
              style={{
                width: 24,
                height: 24,
                display: "block",
                flexShrink: 0,
              }}
            >
              <path d="M4.35645 15.4678H11.6367C13.0996 15.4678 13.8584 14.6953 13.8584 13.2256V7.02539C13.8584 6.0752 13.7354 5.6377 13.1406 5.03613L9.55176 1.38574C8.97754 0.804688 8.50586 0.667969 7.65137 0.667969H4.35645C2.89355 0.667969 2.13477 1.44043 2.13477 2.91016V13.2256C2.13477 14.7021 2.89355 15.4678 4.35645 15.4678ZM4.46582 14.1279C3.80273 14.1279 3.47461 13.7793 3.47461 13.1436V2.99219C3.47461 2.36328 3.80273 2.00781 4.46582 2.00781H7.37793V5.75391C7.37793 6.73145 7.86328 7.20312 8.83398 7.20312H12.5186V13.1436C12.5186 13.7793 12.1836 14.1279 11.5205 14.1279H4.46582ZM8.95703 6.02734C8.67676 6.02734 8.56055 5.9043 8.56055 5.62402V2.19238L12.334 6.02734H8.95703ZM10.4336 9.00098H5.42969C5.16992 9.00098 4.98535 9.19238 4.98535 9.43164C4.98535 9.67773 5.16992 9.86914 5.42969 9.86914H10.4336C10.6797 9.86914 10.8643 9.67773 10.8643 9.43164C10.8643 9.19238 10.6797 9.00098 10.4336 9.00098ZM10.4336 11.2979H5.42969C5.16992 11.2979 4.98535 11.4893 4.98535 11.7354C4.98535 11.9746 5.16992 12.1592 5.42969 12.1592H10.4336C10.6797 12.1592 10.8643 11.9746 10.8643 11.7354C10.8643 11.4893 10.6797 11.2979 10.4336 11.2979Z"></path>
            </svg>
          </div>
          <div className="w-10 h-10 bg-[#D9D9D9] rounded-lg flex items-center justify-center cursor-pointer hover:scale-120 transition-transform duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="block fill-neutral-500 shrink-0"
              style={{
              width: 24,
              height: 24,
              display: "block",
              flexShrink: 0,
              }}
            >
              <path
              d="m64,48h-12c0-5.1-1.4-9.44-3.91-12.76.92-.16,1.89-.24,2.91-.24,8.02,0,13,4.98,13,13ZM13,32c4.32,0,7-2.68,7-7s-2.68-7-7-7-7,2.68-7,7,2.68,7,7,7Zm38,0c4.32,0,7-2.68,7-7s-2.68-7-7-7-7,2.68-7,7,2.68,7,7,7Zm-19-4c4.94,0,8-3.06,8-8s-3.06-8-8-8-8,3.06-8,8,3.06,8,8,8Zm0,4c-9.87,0-16,6.13-16,16h32c0-9.87-6.13-16-16-16ZM0,48h12c0-5.1,1.4-9.44,3.91-12.76-.92-.16-1.89-.24-2.91-.24-8.02,0-13,4.98-13,13Z"
              fill="rgba(0, 0, 0, 0.46)"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="flex-1 h-full flex flex-col">
        {/* TOP */}
        <div className="w-full h-16 bg-[#E6E6E6]/33 flex items-center justify-center">
          <h2 className="text-neutral-600">
            This app is still under development. Thanks for your visit!
          </h2>
        </div>
        {/* MAIN */}
        <div className="flex-1 flex items-center justify-center">
          {/* TEMP BG SVG PATTERN :0 */}
          <svg
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="diagonal-pattern"
                width="16"
                height="16"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0,16 L16,0"
                  stroke="#E6E6E6"
                  strokeWidth="1"
                  strokeOpacity="0.33"
                />
              </pattern>
            </defs>
            <rect fill="url(#diagonal-pattern)" width="100%" height="100%" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
