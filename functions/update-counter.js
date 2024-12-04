const fetch = require('node-fetch');

const SITE_ID = '606f0351-8a08-4232-8904-cde452ca29ed'; // Substitua pelo seu Site ID
const ACCESS_TOKEN = 'nfp_qp6FZJyJ7UfsYYb3y4B8Z52p3aannEhqf2b9'; // Substitua pela API Token
const METADATA_URL = `https://api.netlify.com/api/v1/sites/${SITE_ID}/metadata`;

exports.handler = async () => {
    try {
        console.log('Iniciando função...');

        // Log da URL e Headers
        console.log('METADATA_URL:', METADATA_URL);
        
        const response = await fetch(`${METADATA_URL}/counter`, {
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
        });

        console.log('Resposta recebida da API:', response.status);

        if (!response.ok) {
            throw new Error(`Erro ao buscar contador: ${response.statusText}`);
        }

        let data = await response.json();
        console.log('Dados recebidos:', data);

        let currentCount = data.value || 0;
        const newCount = currentCount + 1;

        console.log('Atualizando contador para:', newCount);

        const updateResponse = await fetch(`${METADATA_URL}/counter`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value: newCount }),
        });

        console.log('Resposta da atualização:', updateResponse.status);

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
            body: JSON.stringify({ error: 'Failed to update counter' }),
        };
    }
};
