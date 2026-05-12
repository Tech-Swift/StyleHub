import {
    createContact,
    getAllContacts,
    getContactById,
    updateContactStatus,
    deleteContact
} from "../services/contactService.js";

export const postContact = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if(!name || !email || !subject || !message ){
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }
         
        const contact = await createContact({
            name,
            email,
            subject,
            message,
        });

        res.status(201).json({
            success: true,
            message: "Message sent successfully",
            data: contact
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
        });
    }
};

export const readAllContact = async (req, res) => {
    try {
        const contacts = await getAllContacts();

        res.status(200).json({
            success: true,
            count: contacts.length,
            data: contacts,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const readSingleContact = async (req, res) => {
    try {
        const contact = await getContactById(req.params.id);

        if(!contacts) {
            return res.status(404).json({
                success: false,
                message: "Contact not found",
            });
        }

        res.status(200).json({
            success: true,
            data: contact,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }    
};

export const putContactStatus = async (req,res) => {
    try {
        const { status } = req.body;

        const updateContact = await updateContactStatus(
            req.params.id,
            status
        );

        if(!updateContact){
            return res.status(404).json({
                success: false,
                message: "Contact not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Contact status updated"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const removeContact = async (req, res) => {
    try {
        const removeContact = await deleteContact(req.params.id);

        if (!removeContact) {
            return res.status(404).json({
                success: false,
                message: "contact not found",
            });
        }

        res.status(200).json ({
            success: true,
            message: "Contact deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
