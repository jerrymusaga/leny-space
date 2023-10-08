import {
  useExplorePublicationsQuery,
  PublicationSortCriteria,
  PublicationMainFocus,
} from "../graphql/generated";
import { Web3Button, useAddress } from "@thirdweb-dev/react";
import Publications from "../components/publications/Publications";
import { MediaRenderer } from "@thirdweb-dev/react";
import PublicationLeftContent from "../components/publications/PublicationLeftContent";
import PublicationRightContent from "../components/publications/PublicationRIghtContent";
import useLensUser from "../lib/auth/useLensUser";
import { LENS_CONTRACT_ABI, LENS_CONTRACT_ADDRESS } from "../const/contracts";
import { useCreatePost } from "../lib/useCreatePost";
import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const { mutateAsync: createPost } = useCreatePost();
  console.log("content:", {
    image,
    title,
    description,
    content,
  });

  const address = useAddress();

  const { profileQuery, isSignedInQuery } = useLensUser();

  const { isLoading, error, data } = useExplorePublicationsQuery(
    {
      request: {
        sortCriteria: PublicationSortCriteria.Latest,
        metadata: {
          mainContentFocus: PublicationMainFocus.Article,
        },
      },
    },
    {
      // Don't refetch the user comes back
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  console.log(data);

  if (error) {
    return <div className="">Error...</div>;
  }

  if (isLoading) {
    return <div className="">Loading...</div>;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 md:py-0 w-full max-w-9xl mx-auto">
            <div className="xl:flex">
              {/* Left + Middle content */}
              <div className="md:flex flex-1">
                {/* Left content */}
                <PublicationLeftContent />

                {/* Middle content */}

                <div className="flex-1 md:ml-8 xl:mx-4 2xl:mx-8">
                  <div className="md:py-8">
                    {/* Blocks */}
                    <div className="space-y-4">
                      {/* Post Block */}
                      {isSignedInQuery?.data ? (
                        <div className="bg-white shadow-md rounded border border-slate-200 p-5">
                          <div className="flex items-center space-x-3 mb-5">
                            {/* <MediaRenderer
                              // @ts-ignore
                              src={
                                profileQuery?.data?.defaultProfile?.picture ||
                                profileQuery?.data?.defaultProfile?.picture
                                  ?.original?.url
                              }
                              alt={
                                profileQuery?.data?.defaultProfile?.name ||
                                profileQuery?.data?.defaultProfile?.handle
                              }
                              className="rounded-full shrink-0"
                              width="40"
                              height="40"
                            /> */}
                            <div className="grow">
                              <label htmlFor="status-input" className="sr-only">
                                What{"'"}s up,{" "}
                                {profileQuery?.data?.defaultProfile?.name ||
                                  profileQuery?.data?.defaultProfile
                                    ?.handle}{" "}
                                ?
                              </label>
                              <input
                                id="status-input"
                                className="form-input w-full bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 placeholder-slate-500"
                                type="text"
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder={`What's happening, ${
                                  profileQuery?.data?.defaultProfile?.name ||
                                  profileQuery?.data?.defaultProfile?.handle
                                }`}
                              />
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="grow flex space-x-5">
                              <button className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-700">
                                <svg
                                  className="w-4 h-4 fill-indigo-400 mr-2"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M0 0h2v16H0V0Zm14 0h2v16h-2V0Zm-3 7H5c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1ZM6 5h4V2H6v3Zm5 11H5c-.6 0-1-.4-1-1v-5c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1Zm-5-2h4v-3H6v3Z" />
                                </svg>
                                <span>
                                  <input
                                    type="file"
                                    onChange={(e) => {
                                      if (e.target.files) {
                                        setImage(e.target.files[0]);
                                      }
                                    }}
                                  />
                                </span>
                              </button>
                              <button className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-700">
                                <svg
                                  className="w-4 h-4 fill-indigo-400 mr-2"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M6.974 14c-.3 0-.7-.2-.9-.5l-2.2-3.7-2.1 2.8c-.3.4-1 .5-1.4.2-.4-.3-.5-1-.2-1.4l3-4c.2-.3.5-.4.9-.4.3 0 .6.2.8.5l2 3.3 3.3-8.1c0-.4.4-.7.8-.7s.8.2.9.6l4 8c.2.5 0 1.1-.4 1.3-.5.2-1.1 0-1.3-.4l-3-6-3.2 7.9c-.2.4-.6.6-1 .6Z" />
                                </svg>
                                <span>
                                  <textarea
                                    placeholder="Description"
                                    onChange={(e) =>
                                      setDescription(e.target.value)
                                    }
                                  />
                                </span>
                              </button>
                              <button className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-700">
                                <svg
                                  className="w-4 h-4 fill-indigo-400 mr-2"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M9.793 10.002a.5.5 0 0 1 .353.853l-1.792 1.793a.5.5 0 0 1-.708 0l-1.792-1.793a.5.5 0 0 1 .353-.853h3.586Zm5.014-4.63c1.178 2.497 1.833 5.647.258 7.928-1.238 1.793-3.615 2.702-7.065 2.702S2.173 15.092.935 13.3c-1.575-2.28-.92-5.431.258-7.927A2.962 2.962 0 0 1 0 3.002a3 3 0 0 1 3-3c.787 0 1.496.309 2.029.806a5.866 5.866 0 0 1 5.942 0A2.96 2.96 0 0 1 13 .002a3 3 0 0 1 3 3c0 .974-.472 1.827-1.193 2.37Zm-1.387 6.79c1.05-1.522.417-3.835-.055-5.078C12.915 5.89 11.192 2.002 8 2.002s-4.914 3.89-5.365 5.082c-.472 1.243-1.106 3.556-.055 5.079.843 1.22 2.666 1.839 5.42 1.839s4.577-.62 5.42-1.84ZM6.67 6.62c.113.443.102.68-.433 1.442-.535.761-1.06 1.297-1.658 1.297-.597 0-1.08-.772-1.07-1.483.01-.71.916-2.306 1.997-2.306.784 0 1.05.607 1.163 1.05Zm3.824-1.05c1.08 0 1.987 1.596 1.997 2.306.01.71-.473 1.483-1.07 1.483-.598 0-1.123-.536-1.658-1.297-.535-.762-.546-1-.432-1.442.113-.443.38-1.05 1.163-1.05Z" />
                                </svg>
                                <span>
                                  <textarea
                                    placeholder="Content"
                                    onChange={(e) => setContent(e.target.value)}
                                  />
                                </span>
                              </button>
                            </div>
                            <div>
                              <Web3Button
                                contractAddress={LENS_CONTRACT_ADDRESS}
                                contractAbi={LENS_CONTRACT_ABI}
                                action={async () => {
                                  if (!image) return;

                                  return await createPost({
                                    image,
                                    title,
                                    description,
                                    content,
                                  });
                                }}
                              >
                                Create Post
                              </Web3Button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <h1>
                          👈Connect Wallet & Sign In With Lens To Participate In
                          Leny-Space 🛬{" "}
                        </h1>
                      )}

                      {data?.explorePublications.items.map((publication) => (
                        <div key={publication.id}>
                          <Publications
                            publication={publication}
                            key={publication.id}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right content */}
              <PublicationRightContent />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
