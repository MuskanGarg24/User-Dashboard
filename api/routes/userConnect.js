const router = require("express").Router();
const Connection = require("../models/connections");

// POST route to add a user to the database
router.post("/add-user", async (req, res) => {
    try {
        const { username, role, company, isConnected } = req.body;
        const newConnection = new Connection({
            username,
            role,
            company,
            isConnected
        });
        await newConnection.save();
        res.status(201).json({ message: "User added successfully", user: newConnection });
    } catch (error) {
        res.status(500).json({ message: "An error occurred while adding user" });
    }
});

// GET route to retrieve all users from the database
router.get("/get-users", async (req, res) => {
    try {
        const users = await Connection.find(); // Retrieve all users from the database
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "An error occurred while retrieving users" });
    }
});

// POST route to update connection status
router.post("/update-connection/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { isConnected } = req.body;
        const user = await Connection.findByIdAndUpdate(
            id,
            { isConnected },
            { new: true }
        );
        res.status(200).json({ isConnected: user.isConnected });
    } catch (error) {
        res.status(500).json({ message: "An error occurred while updating connection" });
    }
});

module.exports = router;