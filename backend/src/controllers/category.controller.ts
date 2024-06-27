import categoryModel from "../models/category.model";

export const createCategory = async (req: any, res: any) => {
    try {
        const result = categoryModel.create(req.body)
        res.status(201).json({
            data: result,
            msg: "Create a category successfully"
        })
    } catch (error) {
        console.log(error)
    }
}

export const getAllCategories = async (req: any, res: any) => {
    try {
        const result = categoryModel.find();
        res.status(200).json({
            data: result,
            msg: "Get all categories successfully"
        })
    } catch (error) {
        console.log(error)
    }
}

export const getCategory = async (req: any, res: any) => {
    try {
        const result = categoryModel.findOne({_id: req.params.id})
        res.status(200).json({
            data: result,
            msg: "Get a category successfully"
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateCategory = async (req: any, res: any) => {
    try {
        const result = categoryModel.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        res.status(200).json({
            data: result,
            msg: "Update a category successfully"
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteCategory = async (req: any, res: any) => {
    try {
        const result = categoryModel.findOneAndDelete({_id: req.params.id})
        res.status(200).json({
            data: result,
            msg: "Delete a category successfully"
        })
    } catch (error) {
        console.log(error)
    }
}