import Link from "next/link";
import { getBrandByName } from "@/lib/content/brands";

type BrandNameListProps = {
  brands: string[];
  linkClassName?: string;
};

export function BrandNameList({ brands, linkClassName }: BrandNameListProps) {
  return (
    <>
      {brands.map((name, index) => {
        const brand = getBrandByName(name);

        return (
          <span key={name}>
            {index > 0 && ", "}
            {brand ? (
              <Link
                href={`/marcas/${brand.slug}`}
                className={linkClassName ?? "font-semibold text-brand-orange hover:underline"}
              >
                {name}
              </Link>
            ) : (
              name
            )}
          </span>
        );
      })}
    </>
  );
}
