function UsersList({ users }) {
  return (
    <>
      <h1>Users List</h1>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default UsersList;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      users: data,
    },
  };
}
