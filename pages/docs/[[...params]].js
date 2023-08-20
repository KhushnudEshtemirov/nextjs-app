import { useRouter } from "next/router";

const Docs = () => {
  const router = useRouter();

  const { params = [] } = router.query;

  if (params.length === 3) {
    return (
      <h1>
        Viewing docs for feature {params[1]} and concept {params[2]}
      </h1>
    );
  } else if (params.length === 2) {
    return <h1>Viewing docs for feature {params[1]}</h1>;
  }

  return <h1>Docs page</h1>;
};

export default Docs;
