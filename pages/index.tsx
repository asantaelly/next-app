import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import ProfilePic from '../public/images/profile.jpg'

export default function Home({ 
    allPostsData 
  }: {
    allPostsData: {
      date: string
      title: string
      id: string
    }[]
  }){
  return (
    <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className=''>
            <p className="text-xl">
              I'm still writing this, wait for it!
            </p>
            <br />
            <p className='text-xl'>
              (This is a sample website - you’ll be building a site like this on{' '}
              <a href="https://nextjs.org/learn" className='text-green-600'>our Next.js tutorial</a>.)
            </p>
        </section>
        <section>

            <h2 className='text-2xl font-medium pt-5'>Blog</h2>
            <ul className='py-3'>
              {allPostsData.map(({id, date, title}) => (
                <li key={id}>
                  <Link href={`/posts/${id}`}>
                    <a className='text-2xl font-semibold'>{title}</a>
                  </Link>
                  <br />
                  <small className='text-lg font-light'>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
        </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
}