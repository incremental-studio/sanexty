import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import { SITE_NAME } from '../lib/constants'

export default function Index({ preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{SITE_NAME}</title>
        </Head>
        <Container>
          {/* Hero */}
          <section class="hero">
            <div class="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="208"
                height="24"
                fill="none"
              >
                <path
                  fill="#191919"
                  d="M5.1 8.6L13.8.3h7l-8.7 8.2 9.4 11.4H15l-6.5-8L5 15V20H0V.3h5.1v8.3zM62.5 4.9v15h-5.1v-15h-8V.3h21V5h-8zM97.2 19.9h-4.6L81.8 7.2v12.7h-5V.3h5l10.4 12V.4h5V20zM34.7 0c-5.8 0-10.5 4.5-10.5 10.1S29 20.2 34.7 20.2 45 15.7 45 10.2C45.1 4.4 40.5 0 34.7 0zm0 15.6a5.4 5.4 0 110-11 5.4 5.4 0 010 11zM115.3 14.6c1.6 3 5.4 4.9 9.7 4.9 4.7 0 8.2-2.2 8.2-5.8 0-3.8-3-4.4-8.4-5-4.5-.5-6.1-1-6.1-2.9 0-1.7 1.8-3.1 5.3-3.1 3.4 0 5.9 1.3 7 3.4l1.8-1.5c-1.4-2.4-4.7-4-8.7-4-4.6 0-7.6 2.3-7.6 5.5 0 3.5 3 4.2 7.6 4.7 5.2.6 6.9 1 6.9 3.1 0 2-2.5 3.4-6 3.4-3 0-6.3-1.2-8-4.3l-1.7 1.6zM148.7 5.8h-2.1v6.9c0 2.8-1.8 4.6-4.3 4.6-2.6 0-3.8-1.7-3.8-4.2V5.8h-2.2v7.5c0 3.7 2 6.2 5.4 6.2 2.4 0 4-1.3 4.9-2.6v2.3h2.1V5.8zM155 16.8c1 1.5 2.8 2.7 5.3 2.7 4.3 0 7-3.1 7-7s-2.7-7-7-7a6.2 6.2 0 00-5.3 2.7V5.8H153v18h2.1v-7zm0-4.4c0-3 2.4-5 5-5 2.9 0 5.1 2 5.1 5.1 0 3-2.2 5-5 5-2.7 0-5.2-1.9-5.2-5v-.1zM172.7 16.8c1 1.5 2.8 2.7 5.3 2.7 4.2 0 6.9-3.1 6.9-7s-2.7-7-6.9-7a6.2 6.2 0 00-5.3 2.7V5.8h-2.2v18h2.2v-7zm-.1-4.4c0-3 2.5-5 5.1-5 2.9 0 5.1 2 5.1 5.1 0 3-2.2 5-5 5-2.7 0-5.2-1.9-5.2-5v-.1zM190.4.8h-2.2v18.4h2.2V.8zM200.9 20.7L208 5.8h-2.4l-5.1 10.9-5.2-10.9h-2.4l6.5 13.2-.4.9c-.7 1.6-1.8 2.1-3 2.1-.6 0-1.1-.1-1.7-.4l-.5 2c.5.2 1.5.4 2.3.4 2.2 0 3.6-.8 4.8-3.3zM109.5 1h2l-7 19.2h-2l7-19.1z"
                />
              </svg>
            </div>
            <h1 class="hero-heading">
              <span>
                You’ve got everything it takes to build a lasting&nbsp;brand:
              </span>
              <span>Creativity, Community, and&nbsp;Us.</span>
            </h1>
            <p class="hero-byline">
              Premium custom apparel, ethically made.
              <br />
              We take creators from designed to delivered.
            </p>
          </section>
          {/*  */}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  return {
    props: { preview },
  }
}
