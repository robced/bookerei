import Head from "next/head";
import { Inter } from "@next/font/google";
import { client } from "../lib/client";
import { HomeComponent } from "../interfaces/HomeComponent.interface";
import { Banner } from "../interfaces/Banner.interface";
import HomeSection from "../components/sections/HomeSection";
import ShopSection from "../components/sections/ShopSection";

const inter = Inter({ subsets: ["latin"] });

const Home = ({ banner, product }: HomeComponent) => {
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>Bookerei</title>
        <meta name="description" content="Online Book Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen w-screen">
        <HomeSection data={banner} />
        <ShopSection />
      </main>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products: Banner = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const banner = await client.fetch(bannerQuery);

  return {
    props: { products, banner },
  };
};

export default Home;
