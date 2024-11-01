// Copyright (c) 2024, Almarie Bullo and contributors
// For license information, please see license.txt

frappe.ui.form.on('Student', {
    refresh(frm) {
        if (!frm.doc.student_id) {
            frm.set_value("student_id", generateRandomID());
        }
    },
    before_insert(frm) {
        setFullName(frm);
    },
    first_name(frm) {
        setFullName(frm);
    },
    last_name(frm) {
        setFullName(frm);
    },
    middle_name(frm) {
        setFullName(frm);
    }
});

function generateRandomID() {
    const year = new Date().getFullYear().toString();
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    return year + randomNumber;
}

function setFullName(frm) {
    const fullName = `${frm.doc.last_name || ''}, ${frm.doc.first_name || ''} ${frm.doc.middle_name || ''}`;
    frm.set_value("full_name", fullName.trim());
}

