export const profile = async (req, res) => {
    return res.json({
        data: [req.user],
        error: "",
        messege: "User Profile",
    });
};
