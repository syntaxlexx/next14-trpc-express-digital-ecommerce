"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
exports.Users = {
    slug: "users",
    auth: {
        verify: {
            generateEmailHTML: function (_a) {
                var token = _a.token;
                return "<p>Hello pls verify. <a href=\"".concat(process.env.NEXT_PUBLIC_SERVER_URL, "/verify-email?token=").concat(token, "\">Verify Email</a></p>");
            }
        }
    },
    access: {
        read: function () { return true; },
        create: function () { return true; },
    },
    fields: [
        {
            name: 'role',
            required: true,
            defaultValue: 'user',
            admin: {
                condition: function () { return true; },
            },
            type: "select",
            options: [
                { label: "Admin", value: 'admin' },
                { label: "User", value: 'user' },
            ]
        }
    ]
};
