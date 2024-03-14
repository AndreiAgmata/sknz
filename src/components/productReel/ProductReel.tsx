import { Product } from "@/lib/types";
import ItemCard from "../itemCard/ItemCard";

interface productReelProps {
  products: Product[];
}

async function ProductReel({ products }: productReelProps) {
  return (
    <div className="items-wrapper w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {products.map((product, index) => (
        <ItemCard key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductReel;
