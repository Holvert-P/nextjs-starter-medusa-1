import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"
import Divider from "@modules/common/components/divider"
import ProductRail from "@modules/home/components/featured-products/product-rail"
export default async function FeaturedProducts({
  collections,
  region,
  categories,
}: {
  collections?: HttpTypes.StoreCollection[]
  categories?: HttpTypes.StoreProductCategory[]
  region: HttpTypes.StoreRegion
}) {
  return (
    <>
      {collections && (
        <div className="content-container">
          <Text className="txt-xlarge font-bold">Colecciones</Text>
          <Divider />
        </div>
      )}

      {collections?.map((collection) => (
        <li key={collection.id}>
          <ProductRail collection={collection} region={region} />
        </li>
      ))}
      {categories && (
        <div className="content-container">
          <Text className="txt-xlarge font-bold">Categorías</Text>
          <Divider />
        </div>
      )}
      {categories?.map((category) => (
        <li key={category.id}>
          <ProductRail category={category} region={region} />
        </li>
      ))}
    </>
  )
}
