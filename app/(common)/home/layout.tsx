import NavbarV2 from "@/components/NavBarV2"

export default function Layout({
    children,
    banner,
    top_products,
    new_products,
    hot,
    trending,
    popular,
    offers_and_news,
    category,
    wallet_purse,
    discounted,
    footer

  }: {
    children: React.ReactNode
    banner: React.ReactNode
    top_products: React.ReactNode
    new_products: React.ReactNode
    hot: React.ReactNode
    trending: React.ReactNode
    popular: React.ReactNode
    offers_and_news: React.ReactNode
    category: React.ReactNode
    wallet_purse: React.ReactNode
    discounted: React.ReactNode
    footer: React.ReactNode
  }) {
    return (
      <div className="">
        {banner} 
        {new_products}
        {top_products}
        {hot}
        {popular}
        {offers_and_news}
        {category}
        {wallet_purse}
        {discounted}
        {footer}
        {children}
      </div>
    )
  }