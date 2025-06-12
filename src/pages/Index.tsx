import { useEffect, useState } from 'react';

const Index = () => {
  const [contador, setContador] = useState<number | null>(null);

  useEffect(() => {
    const fetchCounter = async () => {
      try {
        await fetch('https://contador-backend-1mia.vercel.app/increment', {
          method: 'POST',
        });

        const response = await fetch('https://contador-backend-1mia.vercel.app/counter');
        const data = await response.json();

        setContador(data.value);
      } catch (error) {
        console.error('Erro ao atualizar o contador:', error);
      }
    };

    fetchCounter();
  }, []);

  return (
    <>
      <main style={{
        backgroundColor: '#ffffff',
        color: '#000000',
        fontFamily: 'Arial, sans-serif',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Você foi o <span>{contador !== null ? contador : '...'}</span>° curioso a entrar.
        </h1>
        <p style={{ fontSize: '1.5rem' }}>
          Já que tá aqui, entra no Instagram:{' '}
          <a
            href="https://www.instagram.com/musicochoa/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#0000ff', textDecoration: 'none', fontWeight: 'bold' }}
          >
            @musicochoa
          </a>
        </p>
      </main>
    </>
  );
};

export default Index;
