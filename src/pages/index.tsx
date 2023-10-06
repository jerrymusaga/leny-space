import {
  useExplorePublicationsQuery,
  PublicationSortCriteria,
} from "../graphql/generated";
export default function Home() {
  const { data, isLoading, error } = useExplorePublicationsQuery(
    {
      endpoint: "https://api.lens.dev",
      fetchParams: {
        headers: {
          "Content-Type": "application/json",
        },
      },
    },
    {
      request: {
        sortCriteria: PublicationSortCriteria.Latest,
      },
    },
    {
      // Don't refetch the user comes back
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  console.log({ data, isLoading, error });

  return <>Hello world</>;
}
