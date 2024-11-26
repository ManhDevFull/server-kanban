import jwt from 'jsonwebtoken'
export const veryfyToken = async (req: any, res: any, next: any) => {
  const headers = req.headers.authorization;
  const accessToken = headers ? headers.split(" ")[1] : "";
  try {
    if(!accessToken){
        throw new Error("Tài khoản không có quyền")
    }
    const veryfy: any = jwt.verify(accessToken, process.env.SECRET_KEY as string)
    
    if(!veryfy){
        throw new Error('Invalid token')
    }
        req._id = veryfy._id
    next()
  } catch (error: any) {
    res.status(401).json({error: error.message})
  }
};
