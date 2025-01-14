const getInventory = async (_req: any, res: any)=> {
    try {
        res.status(200).json({
            message: 'Get inventory successfully',
            data: []
        })
    } catch (error: any) {
        res.status(404).json({
            message: error.mesgase,
            data:[]
        })
        
    }
}
export {getInventory}