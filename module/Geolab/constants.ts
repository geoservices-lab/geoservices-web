export interface emailProps {
    to?: string;
    subject?: string;
    body?: string;
}
export const composeEmailLink = ({ to, subject, body }: emailProps) => {
    const defaultTo = "geoservice@email.com";
    const defaultSubject = "Quotation";
    const defaultBody = "Saya ingin request quotation xxxx";
    return `mailto:${to || defaultTo}?subject=${subject || defaultSubject}&body=${
        body || defaultBody
    }`;
};

export const companies = [
    {
        name: "petroleumExperts",
        logo: "/assets/logo-petroleum-experts.png",
        url: "https://www.google.com/",
        email: {
            body: "Saya ingin request quotation Petroleum Experts",
        },
        desc: "Practical, intuitive and cost-minded solutions to the oil and gas industry",
    },
    {
        name: "emerson",
        logo: "/assets/logo-emerson.png",
        url: "https://www.google.com/",
        email: {
            body: "Saya ingin request quotation Emerson",
        },
        desc: "Practical, intuitive and cost-minded solutions to the oil and gas industry",
    },
    {
        name: "kappa",
        logo: "/assets/logo-kappa.png",
        url: "https://www.google.com/",
        email: {
            body: "Saya ingin request quotation Kappa",
        },
        desc: "Practical, intuitive and cost-minded solutions to the oil and gas industry",
    },
    {
        name: "technicalAlliance",
        logo: "/assets/logo-technical-alliance.png",
        url: "https://www.google.com/",
        email: {
            body: "Saya ingin request quotation Technical Alliance",
        },
        desc: "Practical, intuitive and cost-minded solutions to the oil and gas industry",
    },
    {
        name: "ikon",
        logo: "/assets/logo-ikon.png",
        url: "https://www.google.com/",
        email: {
            body: "Saya ingin request quotation Ikon",
        },
        desc: "Practical, intuitive and cost-minded solutions to the oil and gas industry",
    },
    {
        name: "petrosys",
        logo: "/assets/logo-petrosys.png",
        url: "https://www.google.com/",
        email: {
            body: "Saya ingin request quotation Petrosys",
        },
        desc: "Practical, intuitive and cost-minded solutions to the oil and gas industry",
    },
    {
        name: "ids",
        logo: "/assets/logo-ids.png",
        url: "https://www.google.com/",
        email: {
            body: "Saya ingin request quotation IDS",
        },
        desc: "Practical, intuitive and cost-minded solutions to the oil and gas industry",
    },
    {
        name: "neuralog",
        logo: "/assets/logo-neuralog.png",
        url: "https://www.google.com/",
        email: {
            body: "Saya ingin request quotation Neuralog",
        },
        desc: "Practical, intuitive and cost-minded solutions to the oil and gas industry",
    },
    {
        name: "aspentech",
        logo: "/assets/logo-aspentech.png",
        url: "https://www.google.com/",
        email: {
            body: "Saya ingin request quotation Aspentech",
        },
        desc: "Practical, intuitive and cost-minded solutions to the oil and gas industry",
    },
];

export const products = [
    {
        name: "Neuralog Printer by Neuralog",
        logo: "/assets/neuralog-1.png",
        url: "https://www.google.com/",
        email: {
            body: "Saya ingin request quotation Petroleum Experts",
        },
    },
    {
        name: "Neuralog Printer by Neuralog",
        logo: "/assets/neuralog-2.png",
        url: "https://www.google.com/",
        email: {
            body: "Saya ingin request quotation Emerson",
        },
    },
    {
        name: "Neuralog Printer by Neuralog",
        logo: "/assets/neuralog-1.png",
        url: "https://www.google.com/",
        email: {
            body: "Saya ingin request quotation Kappa",
        },
    },
    {
        name: "Neuralog Printer by Neuralog",
        logo: "/assets/neuralog-2.png",
        url: "https://www.google.com/",
        email: {
            body: "Saya ingin request quotation Petroleum Experts",
        },
    },
    {
        name: "Neuralog Printer by Neuralog",
        logo: "/assets/neuralog-1.png",
        url: "https://www.google.com/",
        email: {
            body: "Saya ingin request quotation Emerson",
        },
    },
    {
        name: "Neuralog Printer by Neuralog",
        logo: "/assets/neuralog-2.png",
        url: "https://www.google.com/",
        email: {
            body: "Saya ingin request quotation Kappa",
        },
    },
];
