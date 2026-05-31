import cloudinary from "../config/cloudinary.js";
import catchAsync from "./catchAsync.js";

const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: false,
    resource_type: "image",
    quality: "auto",
    format: "webp",
    teansformation: [
        { width: 500, height: 500, crop: "fit", gravity: "center"}
    ]
};

export const imageUpload = (async (folder, files) => {
    const uploadedPromises = files.map(file => cloudinary.v2.uploader.upload(file, {...options, folder}));
    const results = await Promise.all(uploadedPromises);

    return results 
})

export const deleteImage = catchAsync(async public_id => {
    const result = await cloudinary.v2.uploader.destroy(public_id);
    return result;
});