export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.ACCESS_KEY,
        name,
        email,
        message,
      }),
    });

    const data = await response.json();
    return res.status(200).json(data);
  }

  res.status(405).json({ error: 'Method not allowed' });
}
