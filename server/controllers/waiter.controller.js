const waiterService = require('../services/waiterService');

const waiterController = {
   getAllWaiters: async (req, res) => {
      try {
         const waiters = await waiterService.getAllWaiters();
         res.status(200).json({
            success: true,
            data: waiters
         });
      } catch (error) {
         console.log(error);
         res.status(500).json({
            success: false,
            message: "Failed to retrieve waiters"
         });
      }
   },

   getSingleWaiter: async (req, res) => {
      try {
         const id = req.params.id.substring(1);
         const waiter = await waiterService.getSingleWaiter(id);
         if (!waiter) {
            return res.status(404).json({
               success: false,
               message: "Waiter not found"
            });
         }
         res.status(200).json({
            success: true,
            data: waiter
         });
      } catch (error) {
         console.log(error);
         res.status(500).json({
            success: false,
            message: "Failed to retrieve waiter"
         });
      }
   },

   deleteWaiter: async (req, res) => {
      try {
         const id = req.params.id.substring(1);
         console.log(id);
         const isDeleted = await waiterService.deleteSingleWaiter(id);
         if (!isDeleted) {
            return res.status(500).json({
               success: false,
               message: "Failed to delete waiter"
            });
         }
         res.status(200).json({
            success: true,
            message: "Waiter deleted successfully"
         });
      } catch (error) {
         console.log(error);
         res.status(500).json({
            success: false,
            message: "Failed to delete waiter"
         });
      }
   },

   updateWaiter: async (req, res) => {
      try {
         const id = req.params.id.substring(1);
         const { fullName } = req.body;
         // console.log(fullName);
         // console.log(id);

         if (!fullName || !id) {
            return res.status(400).json({
               success: false,
               message: "All fields are required"
            });
         }

         const updatedWaiter = await waiterService.updateSingleWaiter({ fullName, waiterId: id });

         if (!updatedWaiter) {
            return res.status(500).json({
               success: false,
               message: "Failed to update waiter"
            });
         }

         res.status(200).json({
            success: true,
            message: "Waiter updated successfully"
         });
      } catch (error) {
         console.log(error);
         res.status(500).json({
            success: false,
            message: "Failed to update waiter"
         });
      }
   },

   createWaiter: async (req, res) => {
      try {
      
         const { fullName } = req.body;
         console.log(fullName);
         if (!fullName) {
            return res.status(400).json({
               success: false,
               message: "All fields are required"
            });
         }

         const createdWaiter = await waiterService.createSingleWaiter({ fullName });

         if (!createdWaiter) {
            return res.status(500).json({
               success: false,
               message: "Failed to create waiter"
            });
         }

         res.status(200).json({
            success: true,
            message: "Waiter created successfully"
         });
      } catch (error) {
         console.log(error);
         res.status(500).json({
            success: false,
            message: "Failed to create waiter"
         });
      }
   },
};

module.exports = waiterController;