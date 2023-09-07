import { createClient } from "@/prismicio";
import { SliceZone } from "@/slicesZone";

const HomePage = async () => {
  const client = createClient();

  const doc = await client.getSingle("home_page");
  // const docs = await client.getByType("kit", {
  // page: 2,
  // });
  // const docs = await client.getAllByType("sub_menu");

  return <SliceZone sliceZone={doc.data.slices} />;
  // return <pre>{JSON.stringify(docs.results.length, null, 1)}</pre>;
  // return <pre>{JSON.stringify(docs, null, 1)}</pre>;
};

export default HomePage;
