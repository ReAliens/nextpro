export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data?.map((alien) => {
    return {
      params: { id: alien?.id?.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context?.params?.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: {
      alien: data,
    },
  };
};

const Detailed = ({ alien }) => {
  return (
    <div>
      <h1>{alien?.name}</h1>
      <p>{alien?.email}</p>
      <p>{alien?.website}</p>
      <p>{alien?.address?.city}</p>
    </div>
  );
};

export default Detailed;
