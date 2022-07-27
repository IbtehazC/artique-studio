import React from "react";
import UpdateImage from "../../components/updateImage/UpdateImage";
import UploadImage from "../../components/uploadImage/UploadImage";
import { supabaseAdmin } from "../../utils/supabase.utils";

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

export default function index({ images }: { images: Image[] }) {
  return (
    <>
      <UploadImage />
      <UpdateImage images={images} />
    </>
  );
}
