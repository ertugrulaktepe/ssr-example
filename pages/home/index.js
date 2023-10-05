import React from 'react';
export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const repo = await res.json();
  return { props: { repo } };
}
const Home = (props) => {
  const { repo } = props;
  return (
    <>
      {repo.map((x) => (
        <>
          <h1>{x.name}</h1>
          <h1>{x.address.street}</h1>
        </>
      ))}
    </>
  );
};

export default Home;
