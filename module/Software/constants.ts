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
    name: "aspentech",
    logo: "/assets/logo-aspentech.png",
    url: "https://www.google.com/",
    email: {
      body: "Saya ingin request quotation Aspentech",
    },
    desc: "Uniquely positioned to address the dual challenge of meeting rising demand for resources from a growing population while delivering on the expectations of a more sustainable world.",
  },
  {
    name: "kappa",
    logo: "/assets/logo-kappa-alt.png",
    url: "https://www.google.com/",
    email: {
      body: "Saya ingin request quotation Kappa",
    },
    desc: "KAPPA is a petroleum engineering software\n" +
        "company. Founded in 1987, KAPPA has over 6000 active commercial software\n" +
        "licenses used by more than 600 companies worldwide.",
  },
  {
    name: "ikon",
    logo: "/assets/logo-ikon.webp",
    url: "https://www.google.com/",
    email: {
      body: "Saya ingin request quotation Kappa",
    },
    desc: "For over 20 years, Ikon’s have applied deep scientific expertise and technology\n" +
        "innovation to help customers extract more actionable knowledge from\n" +
        "sophisticated subsurface data.",
  },
  {
    name: "petrosys",
    logo: "/assets/logo-petrosys.png",
    url: "https://www.google.com/",
    email: {
      body: "Saya ingin request quotation Petrosys",
    },
    desc: "Petrosys software enables geoscientists, engineers,\n" +
        "and data managers to gain valuable insight by\n" +
        "effortlessly combining data from multiple disciplines\n" +
        "and datasets.",
  },
  {
    name: "Ellis",
    logo: "/assets/logo-eliis.png",
    url: "https://www.google.com/",
    email: {
      body: "Saya ingin request quotation Petroleum Experts",
    },
    desc: "Founded in 2007, our mission is to combine artificial and human intelligences, bringing\n" +
        "together the automation provided by a modern software and the expertise of\n" +
        "geoscientists.",
  },
  {
    name: "igi",
    logo: "/assets/logo-igi.png",
    url: "https://www.google.com/",
    email: {
      body: "Saya ingin request quotation Petroleum Experts",
    },
    desc: "IGI is continually innovating within geochemistry expertise in order to provide the best services for oil and gas industry. Established in 1983, IGI Ltd is Operating worldwide, offering variety of services to the\n" +
        "petroleum industry.",
  },
  {
    name: "tesseral",
    logo: "/assets/logo-tesseral.png",
    url: "https://www.google.com/",
    email: {
      body: "Saya ingin request quotation Petroleum Experts",
    },
    desc: "Tesseral Technologies Inc. was founded in Canada (Calgary) in 1997 and since 2009 it\n" +
        "has been a part of TETRALE Technologies Group, a Holding Company for Tesseral\n" +
        "Technologies and TetraSeis.",
  },
  {
    name: "etech",
    logo: "/assets/logo-etech.png",
    url: "https://www.google.com/",
    email: {
      body: "Saya ingin request quotation Emerson",
    },
    desc: "Etech upstream product range includes applications for real-time drilling monitoring\n" +
        "and visualization, real-time completion monitoring, economic monitoring of the\n" +
        "drilling operations and, simple ‘out-of-the-box’ engineering software tools.",
  },
  {
    name: "tecplot",
    logo: "/assets/logo-tecplot.png",
    url: "https://www.google.com/",
    email: {
      body: "Saya ingin request quotation Technical Alliance",
    },
    desc: "Tecplot has been working closely with engineers in the oil and gas industry for more\n" +
        "than 20 years. Our tools are compatible with the growing list of simulation tools, and\n" +
        "we provide custom solutions for customers who are writing internal formats.",
  },
  {
    name: "neuralog",
    logo: "/assets/logo-neuralog.png",
    url: "https://www.google.com/",
    email: {
      body: "Saya ingin request quotation Neuralog",
    },
    desc: "Neuralog offers low-cost solutions to capture, organize, and analyze Oil and Gas data.\n" +
        "Take control of your projects and budget and see why Neuralog products have been\n" +
        "the trusted choice for countless businesses for nearly 30 years",
  },
  {
    name: "petroleumExpert",
    logo: "/assets/logo-petroleum-experts.png",
    url: "https://www.google.com/",
    email: {
      body: "Saya ingin request quotation Ikon",
    },
    desc: "Petroleum Experts (Petex) is a petroleum engineering and structural geology\n" +
        "company, developing a wide range of software tools. We are a team of highly skilled\n" +
        "professionals with extensive experience in petroleum engineering, structural geology\n" +
        "and engineering software.",
  },
];

export const products = [
  {
    name: "PaleoScan by Eliis",
    desc: "",
    logo: "/assets/software-paleoscan.png",
    url: "https://www.google.com/",
    email: {
      body: "Saya ingin request quotation Petroleum Experts",
    },
  },
  {
    name: "Tecplot RS by Tecplot",
    desc: "",
    logo: "/assets/software-rs.png",
    url: "https://www.google.com/",
    email: {
      body: "Saya ingin request quotation Emerson",
    },
  },
  {
    name: "SeisEarth by Aspentech",
    desc: "",
    logo: "/assets/software-seisearth.png",
    url: "https://www.google.com/",
    email: {
      body: "Saya ingin request quotation Kappa",
    },
  },
  {
    name: "DBMap by Petrosys",
    desc: "",
    logo: "/assets/software-dbmap.png",
    url: "https://www.google.com/",
    email: {
      body: "Saya ingin request quotation Petroleum Experts",
    },
  },
  {
    name: "Neuralog Printer by Neuralog",
    desc: "",
    logo: "/assets/neuralog-1.png",
    url: "https://www.google.com/",
    email: {
      body: "Saya ingin request quotation Emerson",
    },
  },
  {
    name: "Saphir by Kappa",
    desc: "",
    logo: "/assets/software-saphir.png",
    url: "https://www.google.com/",
    email: {
      body: "Saya ingin request quotation Kappa",
    },
  },
  {
    name: "Curate by Ikon Science",
    desc: "",
    logo: "/assets/software-curate.png",
    url: "https://www.google.com/",
    email: {
      body: "Saya ingin request quotation Kappa",
    },
  },
  {
    name: "SKUA - GOCAD by Aspentech",
    desc: "",
    logo: "/assets/software-gocad.png",
    url: "https://www.google.com/",
    email: {
      body: "Saya ingin request quotation Kappa",
    },
  },
  {
    name: "Vumax by Etech",
    desc: "",
    logo: "/assets/software-vumax.png",
    url: "https://www.google.com/",
    email: {
      body: "Saya ingin request quotation Kappa",
    },
  },
];
