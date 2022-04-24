import React from 'react'
import {Product, FooterBanner, HeroBanner} from "../components";
import {client} from "../lib/client";

const Home = ({products, banner}) => {
    return (
        <>
            <HeroBanner banner={banner.length > 0 & banner[0] }/>
            <div className="products-heading">
                <h2>Best Selling</h2>
                <p>variations</p>
            </div>

            <div className="products-container">
                {products?.map(
                    (product) => product.name
                )}
            </div>

            <FooterBanner/>
        </>
    )
}

export const getServerSideProps = async () => {
    const productQuery = '*[_type == "product"]';
    const products = await client.fetch(productQuery)

    const bannerQuery = '*[_type == "banner"]';
    const banner = await client.fetch(bannerQuery)

    return {
        props: {
            products, banner
        }
    }
}

export default Home