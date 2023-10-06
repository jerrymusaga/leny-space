import { MediaRenderer } from "@thirdweb-dev/react";
import Link from "next/link";
import React from "react";
import { ExplorePublicationsQuery } from "../../graphql/generated";
import PublicationLeftContent from "./PublicationLeftContent";
import PublicationRightContent from "./PublicationRIghtContent";
type Props = {
  publication: ExplorePublicationsQuery["explorePublications"]["items"][0];
};

export default function Publications({ publication }: Props) {
  console.log(publication);

  return (
    <div className="bg-white shadow-md rounded border border-slate-200 p-5">
      {/* Header */}
      <header className="flex justify-between items-start space-x-3 mb-3">
        {/* User */}
        <div className="flex items-start space-x-3">
          <MediaRenderer
            // @ts-ignore
            src={publication?.profile?.picture?.original?.url}
            alt={publication.profile.name || publication.profile.handle}
            className="rounded-full shrink-0"
            width="40"
            height="40"
          />

          <div>
            <div className="leading-tight">
              <Link
                href={`/profile/${publication.profile.handle}`}
                className="text-sm font-semibold text-slate-800"
              >
                {publication.profile.name || publication.profile.handle}
              </Link>
            </div>
            <div className="inline-flex items-center">
              <svg
                className="w-3 h-3 shrink-0 fill-yellow-500 mr-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.953 4.29a.5.5 0 0 0-.454-.29H6.14L6.984.62A.5.5 0 0 0 6.12.174l-6 7A.5.5 0 0 0 .499 8h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
              </svg>
              <div className="text-xs text-slate-500">Leny-Space</div>
            </div>
          </div>
        </div>
      </header>
      {/* Body */}
      <div className="text-sm text-slate-800 space-y-2 mb-5">
        <h4>{publication.metadata.name}</h4>
        <p>{publication.metadata.content}</p>
        <div className="relative !my-4">
          {/* Image / media of the post if there is one */}
          {(publication.metadata.image ||
            publication.metadata.media?.length > 0) && (
            <MediaRenderer
              src={
                publication.metadata.image ||
                publication.metadata.media[0].original.url
              }
              alt={publication.metadata.name || ""}
              className="block w-full"
              width="590"
              height="332"
            />
          )}
        </div>
      </div>
      {/* Footer */}
      <footer className="flex items-center space-x-4">
        {/* Collect button */}
        <button className="flex items-center text-slate-400 hover:text-indigo-500">
          <svg
            className="w-4 h-4 shrink-0 fill-current mr-1.5"
            viewBox="0 0 16 16"
          >
            <path d="M14.682 2.318A4.485 4.485 0 0011.5 1 4.377 4.377 0 008 2.707 4.383 4.383 0 004.5 1a4.5 4.5 0 00-3.182 7.682L8 15l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L8 12.247l-5.285-5A2.5 2.5 0 014.5 3c1.437 0 2.312.681 3.5 2.625C9.187 3.681 10.062 3 11.5 3a2.5 2.5 0 011.785 4.251h-.003z" />
          </svg>
          <div className="text-sm text-slate-500">
            {publication.stats.totalAmountOfCollects} Collects
          </div>
        </button>
        {/* Mirror button */}
        <button className="flex items-center text-slate-400 hover:text-indigo-500">
          <svg
            className="w-4 h-4 shrink-0 fill-current mr-1.5"
            viewBox="0 0 16 16"
          >
            <path d="M13 7h2v6a1 1 0 0 1-1 1H4v2l-4-3 4-3v2h9V7ZM3 9H1V3a1 1 0 0 1 1-1h10V0l4 3-4 3V4H3v5Z" />
          </svg>
          <div className="text-sm text-slate-500">
            {publication.stats.totalAmountOfMirrors} Mirrors
          </div>
        </button>
        {/* Comments button */}
        <button className="flex items-center text-slate-400 hover:text-indigo-500">
          <svg
            className="w-4 h-4 shrink-0 fill-current mr-1.5"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
          </svg>
          <div className="text-sm text-slate-500">
            {publication.stats.totalAmountOfComments} Comments
          </div>
        </button>
      </footer>
    </div>
  );
}
