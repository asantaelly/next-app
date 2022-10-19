import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const name = 'Kelvin Shoo'
export const siteTitle = 'Odogwu | Website'

const Layout = ({
    children, 
    home
    }: {
        children: React.ReactNode
        home?: boolean
    }) => {

    return (
        <div className="">
            <Head>
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta name="og:title" content={siteTitle} />
            </Head>
            <header className="text-center py-5">
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profile.jpg"
                            height={144}
                            width={144}
                            className="rounded-full py-3"
                            alt={name}
                        />
                        <h4 className="text-4xl font-black">{name}</h4>
                    </>
                ): (
                    <>
                        <Link href="/">
                            <a>
                            <Image
                                priority
                                src="/images/profile.jpg"
                                height={108}
                                width={108}
                                className="rounded-full py-3"
                                alt={name}
                            />
                            </a>
                        </Link>

                        <h4 className="text-2xl font-black">
                            <Link href="/">
                                <a>{name}</a>
                            </Link>
                        </h4>
                    </>
                )}
            </header>
            <main className="grid xs:grid-cols-1 md:grid-cols-4 md:place-content-center">
                <div></div>
                <div className="xs:px-10 md:col-span-2">{children}</div>
                <div></div>
            </main>
            <div className="grid xs:grid-cols-1 md:grid-cols-4 py-10">
                <div></div>
                <div className="xs:px-12 xs:py-2 md:col-span-2">
                    {!home && (
                        <div>
                            <Link href="/">
                                <a className="text-green-600">
                                    {`← Back to Home`}
                                </a>
                            </Link>
                        </div>
                    )}
                </div>
                <div></div>
            </div>
            
        </div>
    )
}

export default Layout;