const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: "../client/public/uploads",
    filename: (req, file, cb) => {
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});

const upload = multer({
    storage: storage,

    fileFilter: (req, file, cb) => {
        const fileTypes = /jpg|jpeg|png/i;
        const isValidType = fileTypes.test(file.mimetype);
        if (isValidType) {
            cb(null, true);
        } else {
            cb(null, false);
        }
    },
});
module.exports = upload;