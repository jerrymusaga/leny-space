import React from "react";
import { useProfileQuery, usePublicationsQuery } from "../../graphql/generated";
import { useRouter } from "next/router";
import { MediaRenderer, Web3Button } from "@thirdweb-dev/react";
import Link from "next/link";
// import {
//   LENS_CONTRACT_ABI,
//   LENS_CONTRACT_ADDRESS,
// } from "../../const/contracts";
// import { useFollow } from "../../lib/useFollow";

type Props = {};

export default function ProfilePage({}: Props) {
  const router = useRouter();
  // Grab the path / [id] field from the URL
  const { id } = router.query;

  //   const { mutateAsync: followUser } = useFollow();

  const {
    isLoading: loadingProfile,
    data: profileData,
    error,
  } = useProfileQuery(
    {
      request: {
        handle: id,
      },
    },
    {
      enabled: !!id,
    }
  );
  console.log(profileData, loadingProfile, error);

  const {
    isLoading: isLoadingPublications,
    data: publicationsData,
    error: publicationsError,
  } = usePublicationsQuery(
    {
      request: {
        profileId: profileData?.profile?.id,
      },
    },
    {
      enabled: !!profileData?.profile?.id,
    }
  );

  if (publicationsError || error) {
    return <div>Could not find this profile.</div>;
  }

  if (loadingProfile) {
    return <div>Loading profile...</div>;
  }

  return (
    <div className="grow flex flex-col md:translate-x-0 transform transition-transform duration-300 ease-in-out">
      {/* Profile background */}
      <div className="relative h-56 bg-slate-200">
        {/* @ts-ignore */}
        {profileData?.profile?.coverPicture && (
          <MediaRenderer
            // @ts-ignore
            src={profileData?.profile?.coverPicture?.original?.url || ""}
            alt={
              profileData?.profile?.name || profileData?.profile?.handle || ""
            }
            className="object-cover h-full w-full"
            width="979"
            height="220"
          />
        )}
      </div>

      {/* Content */}
      <div className="relative px-4 sm:px-6 pb-8">
        {/* Pre-header */}
        <div className="-mt-16 mb-6 sm:mb-3">
          <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-end">
            {/* Avatar */}
            <div className="inline-flex -ml-1 -mt-1 mb-4 sm:mb-0">
              {/* @ts-ignore */}
              {profileData?.profile?.picture?.original?.url && (
                <MediaRenderer
                  // @ts-ignore
                  src={profileData.profile.picture.original.url}
                  alt={
                    profileData.profile.name || profileData.profile.handle || ""
                  }
                  className="rounded-full border-4 border-white"
                  width="128"
                  height="128"
                />
              )}
            </div>

            {/* Actions */}
            <div className="flex space-x-2 sm:mb-2">
              <Link
                href="/"
                className=" absolute top-4 left-4 sm:left-6 text-white opacity-80 hover:opacity-100"
              >
                <span className="sr-only">Close sidebar</span>
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                </svg>
              </Link>
              <button className="p-1.5 shrink-0 rounded border border-slate-200 hover:border-slate-300 shadow-sm">
                {profileData?.profile?.stats?.totalFollowing}
                <span className="ml-2">Following</span>
              </button>
              <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">
                {profileData?.profile?.stats?.totalFollowers}
                <span className="ml-2">Followers</span>
              </button>
            </div>
          </div>
        </div>

        {/* Header */}
        <header className="text-center sm:text-left mb-6">
          {/* Name */}
          <div className="inline-flex items-start mb-2">
            <h1 className="text-2xl text-slate-800 font-bold">
              @{profileData?.profile?.handle || "Anonymous User"}
            </h1>
            <svg
              className="w-4 h-4 fill-current shrink-0 text-amber-500 ml-2"
              viewBox="0 0 16 16"
            >
              <path d="M13 6a.75.75 0 0 1-.75-.75 1.5 1.5 0 0 0-1.5-1.5.75.75 0 1 1 0-1.5 1.5 1.5 0 0 0 1.5-1.5.75.75 0 1 1 1.5 0 1.5 1.5 0 0 0 1.5 1.5.75.75 0 1 1 0 1.5 1.5 1.5 0 0 0-1.5 1.5A.75.75 0 0 1 13 6ZM6 16a1 1 0 0 1-1-1 4 4 0 0 0-4-4 1 1 0 0 1 0-2 4 4 0 0 0 4-4 1 1 0 1 1 2 0 4 4 0 0 0 4 4 1 1 0 0 1 0 2 4 4 0 0 0-4 4 1 1 0 0 1-1 1Z" />
            </svg>
          </div>
          {/* Bio */}
          <div className="text-sm mb-3">{profileData?.profile?.bio}</div>
          {/* Meta */}
          <div className="flex flex-wrap justify-center sm:justify-start space-x-4">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 fill-current shrink-0 text-slate-400"
                viewBox="0 0 16 16"
              >
                <path d="M8 8.992a2 2 0 1 1-.002-3.998A2 2 0 0 1 8 8.992Zm-.7 6.694c-.1-.1-4.2-3.696-4.2-3.796C1.7 10.69 1 8.892 1 6.994 1 3.097 4.1 0 8 0s7 3.097 7 6.994c0 1.898-.7 3.697-2.1 4.996-.1.1-4.1 3.696-4.2 3.796-.4.3-1 .3-1.4-.1Zm-2.7-4.995L8 13.688l3.4-2.997c1-1 1.6-2.198 1.6-3.597 0-2.798-2.2-4.996-5-4.996S3 4.196 3 6.994c0 1.399.6 2.698 1.6 3.697 0-.1 0-.1 0 0Z" />
              </svg>
              <span className="text-sm font-medium whitespace-nowrap text-slate-500 ml-2">
                {profileData?.profile?.name || "Anonymous User"}
              </span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 fill-current shrink-0 text-slate-400"
                viewBox="0 0 16 16"
              >
                <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z" />
              </svg>
              <a
                className="text-sm font-medium whitespace-nowrap text-indigo-500 hover:text-indigo-600 ml-2"
                href="#0"
              >
                carolinmcneail.com
              </a>
            </div>
          </div>
        </header>

        {/* Tabs */}
        <div className="relative mb-6">
          <div
            className="absolute bottom-0 w-full h-px bg-slate-200"
            aria-hidden="true"
          ></div>
          <ul className="relative text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar">
            <li className="mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
              <a
                className="block pb-3 text-indigo-500 whitespace-nowrap border-b-2 border-indigo-500"
                href="#0"
              >
                General
              </a>
            </li>
            <li className="mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
              <a
                className="block pb-3 text-slate-500 hover:text-slate-600 whitespace-nowrap"
                href="#0"
              >
                NFTS
              </a>
            </li>
            <li className="mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
              <a
                className="block pb-3 text-slate-500 hover:text-slate-600 whitespace-nowrap"
                href="#0"
              >
                Mirrors
              </a>
            </li>
          </ul>
        </div>

        {/* Profile content */}
        <div className="flex flex-col xl:flex-row xl:space-x-16">
          {/* Main content */}
          <div className="space-y-5 mb-8 xl:mb-0">
            {/* Departments */}
            <div>
              <h2 className="text-slate-800 font-semibold mb-2">
                Publications
              </h2>
              {/* Cards */}
              {publicationsData?.publications.items.map((pub) => (
                <div className="grid xl:grid-cols-2 gap-4" key={pub.id}>
                  <div className="bg-white p-4 border border-slate-200 rounded-sm shadow-sm">
                    <div className="grow flex items-center truncate mb-2">
                      <div className="w-8 h-8 shrink-0 flex items-center justify-center bg-slate-700 rounded-full mr-2">
                        <MediaRenderer
                          className="ml-1"
                          src={
                            pub?.metadata?.image ||
                            pub?.metadata?.media[0]?.original?.url
                          }
                          alt={pub?.metadata?.name || ""}
                        />
                      </div>
                      <div className="truncate">
                        <span className="text-sm font-medium text-slate-800">
                          {pub?.metadata?.name || pub?.metadata?.content}
                        </span>
                      </div>
                      <div className="text-sm mb-3">
                        {pub?.metadata?.description || ""}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
