const fetch = require('node-fetch');

// Configure as variáveis
const SITE_ID = 'seu-site-id'; // Substitua pelo Site ID do Netlify
const ACCESS_TOKEN = 'sua-api-token'; // Substitua pela API Token gerada
const METADATA_URL = `https://api.netlify.com/api/v1/sites/${SITE_ID}/metadata`;

exports.handler = async () => {
  try {
    // Recuperar o contador atual
    const response = await fetch(`${METADATA_URL}/counter`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });

    let data = await response.json();

    // Se o contador não existir, inicialize com 0
    let currentCount = data.value || 0;

    // Incrementa o contador
    const newCount = currentCount + 1;

    // Atualiza o contador no Netlify Metadata
    await fetch(`${METADATA_URL}/counter`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value: newCount }),
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ count: newCount }),
    };
  } catch (error) {
    console.error('Error updating Netlify Metadata:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to update counter' }),
    };
  }
};
