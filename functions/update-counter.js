const fetch = require('node-fetch');

// Substitua pelo Site ID do seu projeto no Netlify
const SITE_ID = '606f0351-8a08-4232-8904-cde452ca29ed';
// Gere uma API Token no Netlify e substitua aqui
const ACCESS_TOKEN = 'nfp_qp6FZJyJ7UfsYYb3y4B8Z52p3aannEhqf2b9';
// URL para o Netlify Metadata
const METADATA_URL = `https://api.netlify.com/api/v1/sites/${SITE_ID}/metadata`;

exports.handler = async () => {
    try {
        console.log('Buscando contador no Netlify Metadata...');

        // Busca o valor atual do contador
        const response = await fetch(`${METADATA_URL}/counter`, {
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Erro ao buscar contador: ${response.statusText}`);
        }

        const data = await response.json();
        let currentCount = data.value || 0;

        console.log(`Valor atual do contador: ${currentCount}`);

        // Incrementa o contador
        const newCount = currentCount + 1;

        console.log(`Atualizando contador para: ${newCount}`);

        // Atualiza o valor no Netlify Metadata
        const updateResponse = await fetch(`${METADATA_URL}/counter`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value: newCount }),
        });

        if (!updateResponse.ok) {
            throw new Error(`Erro ao atualizar contador: ${updateResponse.statusText}`);
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ count: newCount }),
        };
    } catch (error) {
        console.error('Erro na função:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
