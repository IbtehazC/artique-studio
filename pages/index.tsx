import Head from "next/head";
import Gallery from "../components/gallery/Gallery";
import { supabaseAdmin } from "../utils/supabase.utils";
import Banner from "../components/banner/Banner";
import Navbar from "../components/navbar/Navbar";


export async function getStaticProps() {
  const { data } = await supabaseAdmin.from("images").select("*").order("id");

  return {
    props: {
      images: data,
    },
  };
}

interface Image {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
}

const Home = ({ images }: { images: Image[] }) => {
  console.log(images);
  return (
    <>
      <Head>
        <title>Artique Studio BD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Gallery images={images} />
    </>
  );
};

export default Home;
