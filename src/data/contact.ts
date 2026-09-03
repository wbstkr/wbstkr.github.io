export interface ContactLink {
    simple: string;
    verbose: string;
    href: string;
}

export const contactInfo = {
    name: "Omar Faruque",
    citizenship: "U.S. Citizen",
    location: "NYC",
    email: "ofaruque245@gmail.com",
    phone: "646-707-6700",
    links: [
        {
            simple: "GitHub",
            verbose: "github.com/wbstkr",
            href: "https://github.com/wbstkr"
        },
        {
            simple: "LinkedIn",
            verbose: "linkedin.com/in/wbstkr",
            href: "https://linkedin.com/in/wbstkr"
        }
    ] as ContactLink[]
};

export const cleanPhone = contactInfo.phone.replace(/[^0-9+]/g, "");