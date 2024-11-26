const getProducts = async (req: any, res: any) => {
  try {
    res.status(200).json({
        message: 'Get products successfully',
        data:[],
    })
  } catch (error: any) {
    res.status(404).json({
        message: error.message,
        data: [],
    })
  }
};
export { getProducts };
