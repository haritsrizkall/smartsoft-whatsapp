import axios from "axios"

export const sendWa = async (no_wa: string, message: string) => {
  const resp = await axios.post(
    `https://graph.facebook.com/v17.0/112300485084181/messages`,
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
        'Authorization': 'Bearer EAAQY6kxUz74BO6pWHeWMON1USyi1R1U2zL3Du1fY3YB5jGJSLuERjeJ7yC09wlUcsNpz28p9lStR5VZBYAPYHStFtaVCgBcaFZCdiamoilyh38P1EoplFZACClPVtK5I6nfuiUwNCadrYGx1gDStoz0ZA3wYZCXorCynGHME1MyGEf8184kC86Wm1c9DgPlSFu5d3D1jAuyLFDKHTrqBWqQGAJZCkZD'
      }
    }
  )
  return resp
}