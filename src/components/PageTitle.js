import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineNavigateNext } from "react-icons/md";

const PageTitle = ({ title, path, text }) => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className="mb-3 flex items-center justify-between">
      <h2 className="font-fontSecondary text-3xl font-black uppercase text-clrPrimary md:text-5xl">
        {title}
      </h2>
      {currentPath !== "/projects" && (
        <div>
          <Link href={path}>
            <a className="flex items-center rounded-md bg-clrAccent px-3 py-1 pl-4 font-fontSecondary font-bold text-white md:text-xl">
              {text}
              <div className="text-2xl text-white">
                <MdOutlineNavigateNext />
              </div>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PageTitle;
