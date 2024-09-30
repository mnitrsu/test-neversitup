import Link from "next/link";

const IndexPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-4">
      <h1 className="text-5xl">test-neversitup</h1>
      <div className="flex gap-4">
        <Link href="/register">
          <p>register</p>
        </Link>
        <p>|</p>
        <Link href="/login">
          <p>login</p>
        </Link>
        <p>|</p>
        <Link href="/todo">
          <p>todo</p>
        </Link>
      </div>
    </div>
  );
};

export default IndexPage;
