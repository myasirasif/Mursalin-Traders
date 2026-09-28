export const BUSINESS = {
  name: 'Mursalin Traders',
  tagline: 'Growth Through Trust',
  address: 'Gahri Risaldar, Hangu Road, Kohat',
  email: 'muhammadyasirasif@gmail.com',
  whatsapp: '923328611757',
  phone: '+92 332 8611757',
  since: 2020,
  mapEmbed: 'https://maps.google.com/maps?q=33.5942917,71.4153686&z=16&output=embed',
}

export const FORM_ENDPOINT = `https://formsubmit.co/ajax/${BUSINESS.email}`

export const waLink = (text = '') =>
  `https://wa.me/${BUSINESS.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const rs = (n) => `Rs ${Number(n).toLocaleString('en-PK')}`

export async function sendForm(data) {
  const res = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Failed to send')
  return res.json()
}
