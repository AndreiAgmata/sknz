import Faq from "@/components/faq/Faq";
import MoreLikeThis from "@/components/moreLikeThis/MoreLikeThis";
import SingleItem from "@/components/singleItem/SingleItem";
import prisma from "@/lib/prisma";

interface request {
  params: {
    id: string;
  };
}

const getProductById = async (id: string) => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const product = await prisma.product.findUnique({
    where: { id: id },
  });

  return product;
};

async function DesignsPage(req: request) {
  const product = await getProductById(req.params.id);

  return (
    <section className="container mx-auto">
      <SingleItem product={product} />
      <MoreLikeThis id={req.params.id} />
      <Faq />
    </section>
  );
}

export default DesignsPage;
