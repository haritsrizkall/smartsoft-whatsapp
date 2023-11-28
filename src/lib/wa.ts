import axios from "axios"

export const sendWa = async (no_wa: string, message: string) => {
  const resp = await axios.post(
    `https://graph.facebook.com/v17.0/${process.env.FB_NO_ID}/messages`,
    {
      "messaging_product": 'whatsapp',
      "recipient_type": 'individual',
      "to": no_wa,
      "type": 'text',
      "text": {
        "preview_url": false,
        "body": message
      }
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.FB_API_KEY}`
      }
    }
  )
  return resp
}