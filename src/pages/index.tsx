import {
  useExplorePublicationsQuery,
  PublicationSortCriteria,
} from "../graphql/generated";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import useLogin from "../lib/auth/useLogin";
import WalletConnect from "../components/WalletConnect";
import Publications from "../components/publications/Publications";

export default function Home() {
  const address = useAddress();
  const { mutate: requestLogin } = useLogin();

  const { isLoading, error, data } = useExplorePublicationsQuery(
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

  console.log(data);

  if (error) {
    return <div className="">Error...</div>;
  }

  if (isLoading) {
    return <div className="">Loading...</div>;
  }

  return (
    <div className="">
      {data?.explorePublications.items.map((publication) => (
        <div key={publication.id}>
          <Publications publication={publication} key={publication.id} />
        </div>
      ))}
    </div>
  );
}
