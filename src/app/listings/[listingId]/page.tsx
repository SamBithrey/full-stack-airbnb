import getCurrentUser from "@/actions/getCurrentUser";
import getListingById from "@/actions/getListingById";

import EmptyState from "@/components/EmptyState";
import ListingClient from "./ListingClient";

type Props = {
  listingId?: string;
};

async function ListingPage({ params }: { params: Props }) {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }

  return <ListingClient listing={listing} currentUser={currentUser} />;
}

export default ListingPage;
