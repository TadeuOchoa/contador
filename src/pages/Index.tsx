const Index = () => {
  return (
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
      textAlign: 'center',
      gap: '2rem'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        Bem-vindo! 🎉🎉
      </h1>
      
      <a
        href="https://www.instagram.com/musicochoa/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ 
          fontSize: '1.5rem',
          color: '#E1306C',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        📱 @musicochoa no Instagram
      </a>

      <button
        onClick={() => window.open('https://www.sympla.com.br/evento/carnalove-by-lovezinho---major-lock--1402/3267054?token=5d970c55bd1bd235180778d7418eff1d', '_blank')}
        style={{
          backgroundColor: '#FF6B35',
          color: '#ffffff',
          fontSize: '1.3rem',
          fontWeight: 'bold',
          padding: '1rem 2rem',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        🎫 Clica aqui!
      </button>
    </main>
  );
};

export default Index;
