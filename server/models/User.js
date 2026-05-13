import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['customer', 'stylist', 'admin', 'superadmin'],
        default: 'customer'
    },
    roleRequest: {
        requestedRole: {
            type: String,
            enum: ['stylist', 'admin'],
            default: null
        },
        requestedDate: {
            type: Date,
            default: null
        },
        status: {
            type: String,
            enum: ['pending', 'approved', 'rejected'],
            default: null
        },
        adminNotes: {
            type: String,
            default: null
        }
    },

},
{
    timestamps: true
} 
);

const User = mongoose.model(
    "User",
    userSchema
);

export default User;