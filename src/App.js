import { useState } from 'react';
import Loading from './components/Loding';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  function login() {
    setLoading(true);

    const data = {
      email,
      password,
    };

    fetch('https://kenziehub.herokuapp.com/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <form onSubmit={login}>
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="senha"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default App;
