import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const router = useRouter();
  const { role } = router.query;
  const [roleName, setRoleName] = useState('');

  useEffect(() => {
    if (role) setRoleName(role as string);
  }, [role]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Dashboard</h1>
      <h2>Rolle: {roleName}</h2>
      <p>Hier kommt dein TT Coach Dashboard Inhalt.</p>
    </div>
  );
}
