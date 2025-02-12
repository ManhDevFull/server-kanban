import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { Types } from 'mongoose';
dotenv.config()
export const getAccesstoken = async (payload: {
  _id: Types.ObjectId;
  email: String;
  rule?: number;
}) => {
const token = jwt.sign(payload, process.env.SECRET_KEY as string,{
  expiresIn: 86400
})
return token
}
