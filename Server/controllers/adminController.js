const admins = require("../models/adminSchema");

exports.adminregister = async (req, res) => {
    const { name, phone, email, birth, gender } = req.body;
    if (!name || !phone || !email || !password || !birth || !gender) {
        return res.status(401).json({ message: "Fill all fields" })
    }
    try {
        const preadmin = await admins.findOne({ phone: phone });

        if (preadmin) {
            return res.status(200).json("Admin already exist")
        }
        else {
            const newadmin = new admins({
                name,
                phone,
                email,
                password,
                birth,
                gender
            });
            const storeData = await newadmin.save();
            res.status(200).json(storeData);
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error });
    }
};


exports.adminlogin = async(req, res) => {
    const {email, pass} = req.body;
    const admin = await admins.findOne({ email: email, password: password });

    try {
        if(!admin) {
            return res.send("Admin not found")
        }

        else {
            res.status(200).json({exist: true, admin})
            console.log("Admin Match")
        }
    }

    catch (error) {
        console.log("Internal server",error)
    }
}