// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req, res) => {
  res.status(200).json({
    message : "hello world!"
  })
}

export default handler