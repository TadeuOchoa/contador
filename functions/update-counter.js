const fetch = require('node-fetch');

const SITE_ID = '606f0351-8a08-4232-8904-cde452ca29ed'; // Substitua pelo seu Site ID
const ACCESS_TOKEN = 'nfp_qp6FZJyJ7UfsYYb3y4B8Z52p3aannEhqf2b9'; // Substitua pela API Token
const METADATA_URL = `https://api.netlify.com/api/v1/sites/${SITE_ID}/metadata`;

exports.handler = async () => {
    try {
        const response = await fetch(`${METADATA_URL}/counter`, {
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
        });

        let data = await response.json();
        let currentCount = data.value || 0;

        const newCount = currentCount + 1;

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
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to update counter' }),
        };
    }
};
