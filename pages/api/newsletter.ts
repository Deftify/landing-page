import axios from 'axios'

const subscribeReq = async (req: any, res: any) => {
  const { email } = req.body
  try {
    if (!email || !email.length) {
      return res.status(400).json({ error: 'Oh my, We do need an email' })
    }

    const API_KEY = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY
    //   const API_SERVER = process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER
    const AUDIENCE_ID = process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID
    const DATACENTER = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY?.split('-')[1]

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

    const data = {
      email_address: email,
      status: 'subscribed',
    }

    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `api_key ${API_KEY}`,
      },
    }

    const response = await axios.post(url, data, options)
    return res.status(201).json({ message: 'success' })
  } catch (error: any) {
    const data = error.response.data
    console.log(data.message)

    return data.status == 400
      ? res.status(400).json({
          error: {
            message: data.title === 'Member Exists' ? 'Email already subscribed' : data.detail,
          },
        })
      : res
          .status(500)
          .json({ error: { message: 'There was an error subscribing to the newsletter. Please try again.' } })
  }
}

export default subscribeReq

// function getRequestParams(email: any) {
//   // get env variables
//   const API_KEY = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY
//   const LIST_ID = process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID
//   const DATACENTER = process.env.MAILCHIMP_API_KEY?.split('-')[1]

//   const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`

//   const data = {
//     email_address: email,
//     status: 'subscribed',
//   }

//   const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString('base64')
//   const headers = {
//     'Content-Type': 'application/json',
//     Authorization: `Basic ${base64ApiKey}`,
//   }

//   return {
//     url,
//     data,
//     headers,
//   }
// }

// export const subScribe = async (req: any, res: any) => {
//   const { email } = req.body

//   if (!email || !email.length) {
//     return res.status(400).json({
//       error: 'Forgot to add your email?',
//     })
//   }

//   try {
//     const { url, data, headers } = getRequestParams(email)

//     const response = await axios.post(url, data, { headers })

//     // Success
//     return res.status(201).json({ error: null })
//   } catch (error) {
//     return res.status(400).json({
//       error: `Oops, something went wrong... Send me an email at uriklar@gmail.com and I'll add you to the list.`,
//     })
//   }
// }
