
export const responseMapper =(user) => {    
    return {
      
            email: user.email,
            firstName: user.firstName,
            middleName: user.middleName,
            lastName: user.middleName,
            password: user.password,
            confirmPassword: user.confirmPassword,
            gst: user.gst,
            companyContact: user.companyContact,
            companyName: user.companyName,
            addresses : [{
                city: user.city,
                state: user.state,
                country: user.country,
                addressLine: user.addressLine,
                zipCode: user.zipCode,
                label: "Office",
            }
            ]
    }
}
