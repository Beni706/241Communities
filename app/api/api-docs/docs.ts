// pages/api/docs.ts
import { NextApiRequest, NextApiResponse } from 'next'
import swaggerSpec from '../../../swagger/swaggerConfig';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(swaggerSpec); // Retourne la spécification Swagger en JSON
};

export default handler;