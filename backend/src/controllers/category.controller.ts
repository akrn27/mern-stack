import categoryModel from "../models/category.model";

export const createCategory = async (req: any, res: any) => {
    try {
        const result = await categoryModel.create(req.body)
        res.status(201).json({
            data: result,
            message: "Create a category successfully"
        })
    } catch (error) {
        console.log(error)
    }
}

export const getAllCategories = async (req: any, res: any) => {
    try {
        const result = await categoryModel.find()
        res.status(201).json({
            data: result,
            message: "Get all categories successfully"
        })
    } catch (error) {
        console.log(error)
    }
}

export const getCategory = async (req: any, res: any) => {
    try {
        const result = await categoryModel.findOne({_id: req.params.id})
        res.status(200).json({
            data: result,
            message: "Get a category successfully"
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateCategory = async (req: any, res: any) => {
    try {
        const result = await categoryModel.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true}
        )
        res.status(200).json({
            data: result,
            message: "Update a category successfully"
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteCategory = async (req: any, res: any) => {
    try {
        const result = await categoryModel.findOneAndDelete({_id: req.params.id})
        res.status(200).json({
            data: result,
            message: "Delete a category successfully"
        })
    } catch (error) {
        console.log(error)
    }
}