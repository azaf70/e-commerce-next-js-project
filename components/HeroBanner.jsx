import React from 'react';
import Link from 'next/link'
import {urlFor} from "../lib/client";

const HeroBanner = ({banner}) => {
    return (
        <>
            <div className="hero-banner-container">
                <div>
                    <p className="beats-solo">{banner.smallText}</p>
                    <h3>{banner.midText}</h3>
                    <h1>{banner.largeText}</h1>
                    {/*<img src={urlFor(banner.image)} alt="headphones" className="hero-banner-image"/>*/}
                    <div>
                        <Link href="/product/{id}">
                            <button type="button">Button</button>
                        </Link>
                        <div className="description">
                            <h5>description</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroBanner