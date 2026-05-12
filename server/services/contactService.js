import Contact from "../models/Contact.js";

export const createContact = async (contactData) => {
    const contact = await Contact.create(contactData);
    return contact;
};

export const getAllContacts = async () => {
    const contacts = await Contact.find().sort({ createdAt: -1});
    return contacts;
};

export const getContactById = async (contactId) => {
    const contact = await Contact.findById(contactId);
    return contact;
};

export const updateContactStatus = async (contactId, contactStatus) => {
    const updatedContact = await Contact.findByIdAndUpdate(contactId, { contactStatus }, { new: true });
    return updateContactStatus;
};
export const deleteContact = async (contactId) => {
    const contact = await Contact.findByIdAndDelete(contactId);
    return contact;
};
