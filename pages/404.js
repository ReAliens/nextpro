import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Notfound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);
  return (
    <div className="not-found">
      <h1>Oooops......</h1>
      <p>That page cann't be found</p>
      <p>
        Go back to the
        <Link href="/">
          <a> HomePage</a>
        </Link>
      </p>
    </div>
  );
};

export default Notfound;
