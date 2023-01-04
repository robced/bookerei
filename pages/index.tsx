import Head from "next/head";
import { Inter } from "@next/font/google";
import { client } from "../lib/client";
import HomeSection from "../components/sections/HomeSection";
import ShopSection from "../components/sections/ShopSection";
import { AppComponent } from "../interfaces/AppComponent.interface";
import { useStateContext } from "../context/StateContext";
import { useEffect } from "react";
import LoadingSpinner from "../components/elements/LoadingSpinner";

const inter = Inter({ subsets: ["latin"] });

const Home = ({ services, products }: AppComponent) => {
  const {
    loading,
    setLoading,
    setProductsData,
    setServicesData,
    productsData,
    servicesData,
  } = useStateContext();

  useEffect(() => {
    setProductsData(products);
    setServicesData(services);
    setLoading(false);
  }, [products, services, setProductsData, setServicesData, setLoading]);

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="h-screen w-screen">
      <Head>
        <title>Bookerei</title>
        <meta name="description" content="Online Book Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen w-screen">
        <HomeSection />
        <ShopSection />
      </main>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const serviceQuery = '*[_type == "service"]';
  const services = await client.fetch(serviceQuery);

  return {
    props: { products, services },
  };
};

export default Home;
