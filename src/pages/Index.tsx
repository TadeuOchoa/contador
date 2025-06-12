import { useEffect, useState } from 'react';

const Index = () => {
  const [contador, setContador] = useState<number | null>(null);

  useEffect(() => {
    const fetchCounter = async () => {
      try {
        await fetch('https://contador-backend-1mia.vercel.app/increment', { method: 'POST' });

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
    <div>
      <h1>
        Você foi o <span>{contador !== null ? contador : '...'}</span>° curioso a entrar.
      </h1>
      <p>
        Já que tá aqui, entra no Instagram:{' '}
        <a href="https://www.instagram.com/musicochoa/" target="_blank" rel="noopener noreferrer">
          @musicochoa
        </a>
      </p>
    </div>
  );
};

export default Index;
