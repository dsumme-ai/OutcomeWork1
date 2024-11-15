import React from 'react';
import { getSession } from 'next-auth/react';

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

const Dashboard = ({ session }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome, {session.user.name}</h2>
    </div>
  );
};

export default Dashboard;
