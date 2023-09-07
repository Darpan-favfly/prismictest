import { createClient } from "@/prismicio";
import Link from "next/link";

const Header = async () => {
  const client = createClient();

  const doc = await client.getSingle("layout", {
    fetchLinks: "sub_menu.slices",
  });

  const { logo, cta_label, cta_link, slices1 } = doc.data;

  return (
    <header className="bg-light mb-3">
      <div className="container py-4">
        <img width={100} src={logo?.url} alt="" />

        <ul>
          {slices1?.map((item, index) => (
            <li key={index}>
              <Link
                href={
                  item?.primary?.link?.url ||
                  item?.primary?.link?.[0]?.text ||
                  ""
                }>
                {item?.primary?.label?.[0]?.text}
              </Link>
              <ul>
                {item?.primary?.submenu?.data?.slices?.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={
                        item?.primary?.link?.url ||
                        item?.primary?.link?.[0]?.text ||
                        ""
                      }>
                      {item?.primary?.label?.[0]?.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <Link href={cta_link?.url}>{cta_label?.[0]?.text}</Link>
      </div>
    </header>
  );
};

export default Header;
