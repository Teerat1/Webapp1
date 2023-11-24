import Head from "next/head";
import Script from "next/script";
import "../styles/globals.scss";
function Webapp1({ Component, pageProps }) {


    return (
        <>
            <Head>
                <title>Parallel Studio</title>
                <meta name="description" content="Parallel Studio" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta
                    property="og:description"
                    content="Parallel Studio"
                />
                
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            
            <Component {...pageProps} />


        </>
    );
}
export default Webapp1;
