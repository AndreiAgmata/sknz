import Faq from "@/components/faq/Faq";
import MoreLikeThis from "@/components/moreLikeThis/MoreLikeThis";
import SingleItem from "@/components/singleItem/SingleItem";

interface request {
  params: {
    id: string;
  };
}

function DesignsPage(req: request) {
  return (
    <section className="container mx-auto">
      <SingleItem />
      <MoreLikeThis id={req.params.id} />
      <div className="my-32 w-full">
        <Faq />
      </div>
    </section>
  );
}

export default DesignsPage;
