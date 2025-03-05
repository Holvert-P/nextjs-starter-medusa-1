import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"
export default async function ProductRail({
  collection,
  region,
  category,
}: {
  collection?: HttpTypes.StoreCollection
  category?: HttpTypes.StoreProductCategory
  region: HttpTypes.StoreRegion
}) {
  const {
    response: { products: pricedProducts },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      collection_id: collection?.id,
      category_id: category?.id,
      fields: "*variants.calculated_price",
    },
  })

  console.log("pricedProducts")
  console.log(pricedProducts.length)
  if (!pricedProducts || pricedProducts.length == 0) {
    return null
  }
  return (
    <div className="content-container py-4">
      {(collection || category) && (
        <div>
          <div className="flex justify-between mb-8">
            <Text className="txt-xlarge">
              {collection?.title || category?.name}
            </Text>
            <InteractiveLink
              href={`/${collection ? "collections" : "categories"}/${
                collection?.handle ?? category?.handle
              }`}
            >
              View all
            </InteractiveLink>
          </div>
          <ul className="grid grid-cols-2 small:grid-cols-6 gap-x-6 gap-y-6 small:gap-y-10">
            {pricedProducts &&
              pricedProducts.map((product) => (
                <li key={product.id}>
                  <ProductPreview
                    product={product}
                    region={region}
                    isFeatured
                  />
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  )
}
