export const logout = async (req, res) => {
    res.clearCookie("token");
    return res.json({
        data: [],
        error: "",
        messege: "User logged out",
    });
};
