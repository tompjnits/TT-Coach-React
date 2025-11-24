import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: any) => {
    e.preventDefault();
    if (username === 'admin') router.push('/dashboard?role=admin');
    else router.push('/dashboard?role=user');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <br /><br />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
