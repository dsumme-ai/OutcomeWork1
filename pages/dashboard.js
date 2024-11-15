import React from 'react';
import { useSession } from 'next-auth/react';

const Dashboard = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Please log in to view your dashboard.</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome, {session.user.name}</h2>
    </div>
  );
};

export default Dashboard;
