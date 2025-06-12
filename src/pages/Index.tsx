import { useEffect, useState } from 'react';
import Head from 'next/head';

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
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tadeu Ochoa</title>
        <style>{`
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 20%;
            color: #333;
          }
          h1 {
            font-size: 2em;
          }
          p {
            font-size: 1.2em;
          }
          a {
            text-decoration: none;
            color: #007bff;
            font-weight: bold;
          }
          a:hover {
            text-decoration: underline;
          }
        `}</style>
      </Head>
      <main>
        <h1>
          Você foi o <span>{contador !== null ? contador : '...'}</span>° curioso a entrar.
        </h1>
        <p>
          Já que tá aqui, entra no Instagram:{' '}
          <a href="https://www.instagram.com/musicochoa/" target="_blank" rel="noopener noreferrer">
            @musicochoa
          </a>
        </p>
      </main>
    </>
  );
};

export default Index;
