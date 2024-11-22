import { Company } from "../models/company.model.js";
import cloudinary from "../utils/cloudinary.js";
import getDataUri from "../utils/dataUri.js";

export const registerCompany = async (req, res) => {
    try {
        const { companyName } = req.body;
        if (!companyName) {
            return res.status(400).json({
                message: "Company name is required.",
                success: false
            });
        }
        let company = await Company.findOne({ name: companyName });
        if (company) {
            return res.status(400).json({
                message: "You can't register same company.",
                success: false
            })
        };
        company = await Company.create({
            name: companyName,
            userId: req.id
        });

        return res.status(201).json({
            message: "Company registered successfully.",
            company,
            success: true
        })
    } catch (error) {
        console.log(error);
    } 
}


export const getCompany = async (req, res) => {

    try {
        const userId = req.id; // logged in user id
        const companies = await Company.find({ userId });
        if (!companies) {
            return res.status(404).json({
                message: "Companies not found.",
                success: false
            })
        }
        return res.status(200).json({
            companies,
            success:true
        })
    } catch (error) {
        console.log(error);
    }

}

// getby emlementbyID

export const getCompanyByID = async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId);

        if (!company) {
            return res.status(400).json({
                message: "Company not found",
                success: false
            });
        }
        return res.status(200).json({
            company,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server error",
            success: false
        });
    }
};

// Update company

export const updateCompany = async(req,res) =>{
    try {
        const {name,description,website,location} = req.body;
        const file = req.file;
        const fileUri = getDataUri(file);
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
        const logo = cloudResponse.secure_url;

        // cloud ordinalry aayega yaha par
        const updatedata = {name,description,website,location,logo};
        const company = await Company.findByIdAndUpdate(req.params.id, updatedata, { new: true });
        // new = true beacuse fot the update data find over here

        if(!company){
            return res.status(400).json({
                message:"404 company not found",
                success:false
            })
        }

        return res.status(200).json({
            message:"Company infromation is true.. ",
            success:true
        })
    } catch (error) {
         console.log(error);
    }
}