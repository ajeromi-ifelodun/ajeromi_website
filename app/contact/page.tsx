import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import Formsect from "./_page/formsect";
import Mapsect from "./_page/mapsect";

export default function ContactUs() {
   const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div>
        <Formsect />
        <Mapsect />
      </div>
    </HydrationBoundary>
  );
}
