import Head from 'next/head'
const OpenGraphHead = () => (
  <Head>
    <title>Jesse Holwell | Software Engineer</title>
    <meta name="description" content="Personal software portfolio" />
    <meta property="og:title" content="Jesse Holwell | Software Engineer" />
    <meta property="og:site_name" content="Jesse Holwell" />
    <meta property="og:url" content="https://www.jesseholwell.com/" />
    <meta
      property="og:description"
      content="Hey! I am Jesse Holwell, Software Engineer"
    />
    <meta property="og:type" content="profile" />
    <meta
      property="og:image"
      content="https://www.jesseholwell.com/me-circle.png"
    ></meta>
  </Head>
)
export default OpenGraphHead
