const fs = require('fs');
const path = require('path');

const COUNTER_FILE = path.resolve(__dirname, 'counter.json');

exports.handler = async () => {
  try {
    // Verifica se o arquivo existe, caso contrário cria com valor inicial 0
    if (!fs.existsSync(COUNTER_FILE)) {
      fs.writeFileSync(COUNTER_FILE, JSON.stringify({ count: 0 }));
    }

    // Lê o valor atual
    const data = JSON.parse(fs.readFileSync(COUNTER_FILE, 'utf-8'));
    const newCount = data.count + 1;

    // Atualiza o valor
    fs.writeFileSync(COUNTER_FILE, JSON.stringify({ count: newCount }));

    // Retorna o novo valor
    return {
      statusCode: 200,
      body: JSON.stringify({ count: newCount }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to update counter' }),
    };
  }
};
