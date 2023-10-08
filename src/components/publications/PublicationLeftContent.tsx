import React, { useContext } from "react";
import { UserContext } from "../../lib/magic/UserContext";
import { magic } from "../../lib/magic/magic";
import WalletConnect from "../WalletConnect";
import { useRouter } from "next/router";

function PublicationLeftContent() {
  const [user, setUser] = useContext(UserContext);
  const router = useRouter();

  const logout = () => {
    // Call Magic's logout method, reset the user state, and route to the login page
    magic.user.logout().then(() => {
      setUser({ user: null });
      router.push("/welcome");
    });
  };
  return (
    <div className="w-full md:w-60 mb-8 md:mb-0">
      <div className="md:sticky md:top-16 md:h-[calc(100vh-64px)] md:overflow-x-hidden md:overflow-y-auto no-scrollbar">
        <div className="md:py-8">
          {/* Title */}
          <header className="mb-6">
            <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
              Leny-Space ✨
            </h1>
          </header>

          {/* Search form */}
          <div className="xl:hidden mb-6">
            <form className="relative">
              <label htmlFor="feed-search-mobile" className="sr-only">
                Search
              </label>
              <input
                id="feed-search-mobile"
                className="form-input w-full pl-9 focus:border-slate-300"
                type="search"
                placeholder="Search…"
              />
              <button
                className="absolute inset-0 right-auto group"
                type="submit"
                aria-label="Search"
              >
                <svg
                  className="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                  <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                </svg>
              </button>
            </form>
          </div>

          {/* Links */}
          <div className="flex flex-nowrap overflow-x-scroll no-scrollbar md:block md:overflow-auto px-4 md:space-y-3 -mx-4">
            {/* Group 1 */}
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase mb-3 md:sr-only">
                Menu
              </div>
              <ul className="flex flex-nowrap md:block mr-3 md:mr-0">
                <li className="mr-0.5 md:mr-0 md:mb-0.5">
                  <a
                    className="flex items-center px-2.5 py-2 rounded whitespace-nowrap bg-white"
                    href=""
                  >
                    <svg
                      className="w-4 h-4 shrink-0 fill-current text-indigo-500 mr-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10 16h4c.6 0 1-.4 1-.998V6.016c0-.3-.1-.6-.4-.8L8.6.226c-.4-.3-.9-.3-1.3 0l-6 4.992c-.2.2-.3.5-.3.799v8.986C1 15.6 1.4 16 2 16h4c.6 0 1-.4 1-.998v-2.996h2v2.996c0 .599.4.998 1 .998Zm-4-5.99c-.6 0-1 .399-1 .998v2.995H3V6.515L8 2.32l5 4.194v7.488h-2v-2.995c0-.6-.4-.999-1-.999H6Z" />
                    </svg>
                    <span className="text-sm font-medium text-indigo-500">
                      Home
                    </span>
                  </a>
                </li>
                <li className="mr-0.5 md:mr-0 md:mb-0.5">
                  <a
                    className="flex items-center px-2.5 py-2 rounded whitespace-nowrap"
                    href=""
                  >
                    <svg
                      className="w-4 h-4 shrink-0 fill-current text-slate-400 mr-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14.14 9.585h-.002a2.5 2.5 0 0 1-2 4.547 6.91 6.91 0 0 1-6.9 1.165 4.436 4.436 0 0 0 1.343-1.682c.365.087.738.132 1.113.135a4.906 4.906 0 0 0 2.924-.971 2.5 2.5 0 0 1 3.522-3.194Zm-4.015-7.397a7.023 7.023 0 0 1 4.47 5.396 4.5 4.5 0 0 0-1.7-.334c-.15.002-.299.012-.447.03a5.027 5.027 0 0 0-2.723-3.078 2.5 2.5 0 1 1 .4-2.014ZM4.663 10.5a2.5 2.5 0 1 1-3.859-.584 6.888 6.888 0 0 1-.11-1.166c0-2.095.94-4.08 2.56-5.407.093.727.364 1.419.788 2.016A4.97 4.97 0 0 0 2.694 8.75c.003.173.015.345.037.516A2.49 2.49 0 0 1 4.663 10.5Z" />
                    </svg>
                    <span className="text-sm font-medium text-slate-600">
                      Explore
                    </span>
                  </a>
                </li>
                <li className="mr-0.5 md:mr-0 md:mb-0.5">
                  <a
                    className="flex items-center px-2.5 py-2  whitespace-nowrap"
                    href=""
                  >
                    <svg
                      className="w-4 h-4 shrink-0 fill-current text-slate-400 mr-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5 9h11v2H5V9zM0 9h3v2H0V9zm5 4h6v2H5v-2zm-5 0h3v2H0v-2zm5-8h7v2H5V5zM0 5h3v2H0V5zm5-4h11v2H5V1zM0 1h3v2H0V1z" />
                    </svg>
                    <span className="text-sm font-medium text-slate-600">
                      Notifications
                    </span>
                  </a>
                </li>

                <li className="mr-0.5 md:mr-0 md:mb-0.5">
                  <a
                    className="flex items-center px-2.5 py-2 rounded whitespace-nowrap"
                    href=""
                  >
                    <svg
                      className="w-4 h-4 shrink-0 fill-current text-slate-400 mr-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.311 9.527c-1.161-.393-1.85-.825-2.143-1.175A3.991 3.991 0 0012 5V4c0-2.206-1.794-4-4-4S4 1.794 4 4v1c0 1.406.732 2.639 1.832 3.352-.292.35-.981.782-2.142 1.175A3.942 3.942 0 001 13.26V16h14v-2.74c0-1.69-1.081-3.19-2.689-3.733zM6 4c0-1.103.897-2 2-2s2 .897 2 2v1c0 1.103-.897 2-2 2s-2-.897-2-2V4zm7 10H3v-.74c0-.831.534-1.569 1.33-1.838 1.845-.624 3-1.436 3.452-2.422h.436c.452.986 1.607 1.798 3.453 2.422A1.943 1.943 0 0113 13.26V14z" />
                    </svg>
                    <span className="text-sm font-medium text-slate-600">
                      <WalletConnect />
                    </span>
                  </a>
                </li>
                <li className="mr-0.5 md:mr-0 md:mb-0.5">
                  <a
                    className="flex items-center px-2.5 py-2 rounded whitespace-nowrap"
                    href=""
                  >
                    <svg
                      className="w-4 h-4 shrink-0 fill-current text-slate-400 mr-2"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      id="email"
                    >
                      <g fill="#134563">
                        <path d="m55.5 18.8-1.9-1.9L36 34.5c-2.2 2.2-5.9 2.2-8.1 0L10.3 17l-1.9 1.9L21.5 32 8.4 45.1l1.9 1.9 13.1-13.1 2.6 2.6c1.6 1.6 3.7 2.5 5.9 2.5s4.3-.9 5.9-2.5l2.6-2.6L53.5 47l1.9-1.9L42.3 32l13.2-13.2"></path>
                        <path d="M51.8 50.4H12.3c-2.3 0-4.2-1.9-4.2-4.2V18c0-2.3 1.9-4.2 4.2-4.2h39.5c2.3 0 4.2 1.9 4.2 4.2v28.2c0 2.3-1.9 4.2-4.2 4.2zM12.2 16.5c-.8 0-1.4.6-1.4 1.4v28.2c0 .8.6 1.4 1.4 1.4h39.5c.8 0 1.4-.6 1.4-1.4V17.9c0-.8-.6-1.4-1.4-1.4H12.2z"></path>
                      </g>
                    </svg>
                    <span className="text-sm font-medium text-slate-600">
                      {user?.issuer && <>user.email</>}
                    </span>
                  </a>
                </li>
                <button
                  className="shadow-xl shadow-black text-white bg-[#ff0000] hover:bg-[#19012c] rounded-full p-2"
                  onClick={logout}
                >
                  Log Out
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicationLeftContent;
