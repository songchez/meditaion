import Link from "next/link";

export default function BottomNavBar() {
  return (
    <div className="w-full fixed bottom-10 flex justify-center items-center">
      <ul className="container flex justify-evenly text-xl">
        <li>
          {/* 홈 */}
          <Link href="/">
            <svg
              className="w-7 h-7 hover:-translate-y-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 9L19 17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21L14 21L10 21L9 21C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17L5 9"
                stroke="#323232"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M3 11L7.5 7L10.6713 4.18109C11.429 3.50752 12.571 3.50752 13.3287 4.18109L16.5 7L21 11"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 21V17C10 15.8954 10.8954 15 12 15V15C13.1046 15 14 15.8954 14 17V21"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </li>
        <li>
          {/* 글쓰기 */}
          <Link href="/editor">
            <svg
              className="w-7 h-7 hover:-translate-y-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.186 2.09c.521.25 1.136.612 1.625 1.101.49.49.852 1.104 1.1 1.625.313.654.11 1.408-.401 1.92l-7.214 7.213c-.31.31-.688.541-1.105.675l-4.222 1.353a.75.75 0 0 1-.943-.944l1.353-4.221a2.75 2.75 0 0 1 .674-1.105l7.214-7.214c.512-.512 1.266-.714 1.92-.402zm.211 2.516a3.608 3.608 0 0 0-.828-.586l-6.994 6.994a1.002 1.002 0 0 0-.178.241L9.9 14.102l2.846-1.496c.09-.047.171-.107.242-.178l6.994-6.994a3.61 3.61 0 0 0-.586-.828zM4.999 5.5A.5.5 0 0 1 5.47 5l5.53.005a1 1 0 0 0 0-2L5.5 3A2.5 2.5 0 0 0 3 5.5v12.577c0 .76.082 1.185.319 1.627.224.419.558.754.977.978.442.236.866.318 1.627.318h12.154c.76 0 1.185-.082 1.627-.318.42-.224.754-.559.978-.978.236-.442.318-.866.318-1.627V13a1 1 0 1 0-2 0v5.077c0 .459-.021.571-.082.684a.364.364 0 0 1-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.57-.022-.684-.082a.363.363 0 0 1-.157-.157c-.06-.113-.082-.225-.082-.684V5.5z"
                fill="#000000"
              />
            </svg>
          </Link>
        </li>
        <li>
          {/* 묵상 */}
          <Link href="/meditations">
            <svg
              className="w-8 h-8 hover:-translate-y-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 8H16M8 12H16M10 16H14M3.5 12C3.5 5.5 5.5 3.5 12 3.5C18.5 3.5 20.5 5.5 20.5 12C20.5 18.5 18.5 20.5 12 20.5C5.5 20.5 3.5 18.5 3.5 12Z"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </li>
        <li>
          {/* 나무 */}
          <Link href="/tree">
            <svg
              fill="#000000"
              className="w-7 h-7 hover:-translate-y-1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8,17h3v4H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2H13V17h3a5,5,0,0,0,1-9.9V6A5,5,0,0,0,7,6V7.1A5,5,0,0,0,8,17ZM8,9A1,1,0,0,0,9,8V6a3,3,0,0,1,6,0V8a1,1,0,0,0,1,1,3,3,0,0,1,0,6H13v-.586l2.707-2.707a1,1,0,0,0-1.414-1.414L13,11.586V9a1,1,0,0,0-2,0v2.586L9.707,10.293a1,1,0,0,0-1.414,1.414L11,14.414V15H8A3,3,0,0,1,8,9Z" />
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
}
