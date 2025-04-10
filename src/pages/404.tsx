
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '4rem', color: '#FF6F61' }}>404</h1>
      <p style={{ fontSize: '1.5rem' }}>Page not found</p>
      <Link href="/" style={{ color: '#0070f3', textDecoration: 'underline' }}>
       Acceuil
      </Link>
    </div>
  );
};

export default Custom404;
