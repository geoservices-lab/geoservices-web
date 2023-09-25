import React, {useEffect, useState} from "react";
import Box from "reusables/Box";
import { Image, Text, Link } from "@nextui-org/react";
import { BsArrowRight } from "react-icons/bs";
import { NavMainMenuProps } from "reusables/types";
import TextLink from "reusables/TextLink";
import {
    selectedColor,
    defaultColor,
    optionsCoal,
    explorationOptions,
    laboratoryOptions,
    softwareOptions,
} from "./constants";
import { API_KEY, API_BASE_URL } from "../../pageConstant/general";

export const MainMenu = ({ onChange, selected }: NavMainMenuProps) => {
    const handleSelect = (selectedMenu: string) => () => {
        if (onChange) {
            onChange(selectedMenu);
        }
    };

    return (
        <>
            <Box
                css={{
                    margin: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Text
                    css={{
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "18px",
                        lineHeight: "22px",
                    }}
                >
                    Coal and Minerals
                </Text>
            </Box>
            {optionsCoal?.map((item) => (
                <a key={item?.name} href={item?.url} onMouseOver={handleSelect(item?.name)}>
                    <Box
                        css={{
                            margin: "10px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            css={{
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "18px",
                                lineHeight: "22px",
                                color: selected === item?.name ? selectedColor : defaultColor,
                                cursor: "pointer",
                            }}
                        >
                            {item?.label}
                        </Text>
                        <BsArrowRight color="#EC1C24" />
                    </Box>
                </a>
            ))}
        </>
    );
};

export const DefaultSubMenu = () => {
    const image1 = "/assets/bg-personlab1.png";
    const exploration = "/assets/bg-coal2.png";
    const laboratory = "/assets/bg-personlab2.png";
    const service = "/assets/bg-offshore1.png";

    return (
        <Box
            css={{
                display: "grid",
                gridAutoRows: "1fr",
                gridTemplateColumns: "1fr 1fr 1fr",
            }}
        >
            <Box css={{ mx: "20px" }}>
                <Image
                    src={exploration}
                    objectFit="cover"
                    height={250}
                    containerCss={{
                        borderRadius: "0",
                    }}
                />
                <Box
                    css={{
                        margin: "10px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text
                        css={{
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "18px",
                            lineHeight: "22px",
                        }}
                    >
                        Exploration
                    </Text>
                    <BsArrowRight color="#EC1C24" />
                </Box>
            </Box>
            <Box css={{ mx: "20px" }}>
                <Image
                    src={laboratory}
                    objectFit="fill"
                    height={250}
                    containerCss={{
                        borderRadius: "0",
                    }}
                />
                <Box
                    css={{
                        margin: "10px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text
                        css={{
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "18px",
                            lineHeight: "22px",
                        }}
                    >
                        Laboratory
                    </Text>
                    <BsArrowRight color="#EC1C24" />
                </Box>
            </Box>
            <Box css={{ mx: "20px" }}>
                <Image
                    src={service}
                    objectFit="cover"
                    height={250}
                    containerCss={{
                        borderRadius: "0",
                    }}
                />
                <Box
                    css={{
                        margin: "10px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text
                        css={{
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "18px",
                            lineHeight: "22px",
                        }}
                    >
                        Service
                    </Text>
                    <BsArrowRight color="#EC1C24" />
                </Box>
            </Box>
        </Box>
    );
};

export const TrainingSubMenu = () => {
    const image1 = "/assets/bg-machinery.png";

    const [product, setProductData] = useState([]);

    const callAPI = async (setProductData) => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "training"]`);
            const data = await res.json();

            const mappedData = data.result.map((item: any) => {
                return ({
                    label: item.title,
                    name: item.title,
                    href: `/oil_and_gas/training`,
                    isActive: true,
                })
            });
            setProductData(mappedData);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        callAPI(setProductData);
    }, [product]);

    return (
        <>
            <Box
                css={{
                    margin: "10px 10px 15px 10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Text
                    css={{
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "18px",
                        lineHeight: "22px",
                    }}
                >
                    Latest Training
                </Text>
            </Box>

            <Box css={{ display: "flex" }}>
                <Box
                    css={{
                        width: "70%",
                        display: "grid",
                        gridAutoRows: "min-content",
                        gridTemplateColumns: "1fr 1fr",
                    }}
                >
                    {product?.map((option) => {
                        return (
                            option?.isActive && <Box
                                key={option?.name}
                                css={{
                                    mx: "10px",
                                    mb: "15px",
                                }}
                            >
                                <TextLink
                                    textCSS={{
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "15px",
                                        lineHeight: "22px",
                                    }}
                                    href={option.href}
                                >
                                    {option.label}
                                </TextLink>
                            </Box>
                        )
                    })}
                </Box>
                <Box css={{ mx: "$14" }}>
                    <Image
                        src={image1}
                        objectFit="fill"
                        height={200}
                        containerCss={{
                            borderRadius: "0",
                        }}
                    />
                </Box>
            </Box>
        </>
    );
};

export const ExplorationSubMenu = () => {
    const image1 = "/assets/bg-machinery.png";

    const [product, setProductData] = useState([]);

    const callAPI = async (setProductData) => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "exploration"]`);
            const data = await res.json();

            const mappedData = data.result.map((item: any) => {
                return ({
                    label: item.service,
                    name: item.service,
                    href: `/exploration/${item.slug}`,
                    isActive: item.is_active,
                })
            });
            setProductData(mappedData);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        callAPI(setProductData);
    }, [product]);

    return (
        <>
            <Box
                css={{
                    margin: "10px 10px 15px 10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Text
                    css={{
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "18px",
                        lineHeight: "22px",
                    }}
                >
                    Exploration
                </Text>
            </Box>

            <Box css={{ display: "flex" }}>
                <Box
                    css={{
                        width: "70%",
                        display: "grid",
                        gridAutoRows: "min-content",
                        gridTemplateColumns: "1fr 1fr",
                    }}
                >
                    {product?.map((option) => {
                        return (
                            option?.isActive && <Box
                                key={option?.name}
                                css={{
                                    mx: "10px",
                                    mb: "15px",
                                }}
                            >
                                <TextLink
                                    textCSS={{
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "15px",
                                        lineHeight: "22px",
                                    }}
                                    href={option.href}
                                >
                                    {option.label}
                                </TextLink>
                            </Box>
                        )
                    })}
                </Box>
                <Box css={{ mx: "$14" }}>
                    <Image
                        src={image1}
                        objectFit="fill"
                        height={200}
                        containerCss={{
                            borderRadius: "0",
                        }}
                    />
                </Box>
            </Box>
        </>
    );
};

export const LaboratorySubMenu = () => {
    const image1 = "/assets/bg-machinery.png";
    const [coalLab, setCoalLab] = useState([]);
    const [mineralLab, setMineralLab] = useState([]);

    const callAPI = async () => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "geolab"]`);
            const data = await res.json();
            const coalData = data.result.filter((item: any) => item.type === 'coal');
            const mineralData = data.result.filter((item: any) => item.type === 'mineral');

            const mappedCoal = coalData.map((item: any) => {
                return ({
                    label: item.division,
                    name: item.division,
                    href: `/coal/laboratory/${item.slug}`,
                    isActive: item.is_active,
                })
            });

            const mappedMineral = mineralData.map((item: any) => {
                return ({
                    label: item.division,
                    name: item.division,
                    href: `/mineral/laboratory/${item.slug}`,
                    isActive: item.is_active,
                })
            });
            setCoalLab(mappedCoal);
            setMineralLab(mappedMineral);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        callAPI();
    }, [coalLab]);

    return (
        <div className={'flex'}>
            <Box>
                <Text className={'font-bold'} style={{ fontSize: 18, padding: 20 }}>
                    Coal
                </Text>
                {coalLab?.map((option) => (
                    option?.isActive && <Box
                        key={option?.name}
                        css={{
                            mx: "10px",
                            mb: "15px",
                        }}
                    >
                        <TextLink
                            textCSS={{
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "15px",
                                lineHeight: "22px",
                            }}
                            href={option.href}
                        >
                            {option.label}
                        </TextLink>
                    </Box>
                ))}
            </Box>

            <Box>
                <Text className={'font-bold'} style={{ fontSize: 18, padding: 20 }}>
                    Mineral
                </Text>
                {mineralLab?.map((option) => (
                    option?.isActive && <Box
                        key={option?.name}
                        css={{
                            mx: "10px",
                            mb: "15px",
                        }}
                    >
                        <TextLink
                            textCSS={{
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "15px",
                                lineHeight: "22px",
                            }}
                            href={option.href}
                        >
                            {option.label}
                        </TextLink>
                    </Box>
                ))}
            </Box>

            <Box css={{ display: "flex" }}>
                <Box css={{ mx: "$14" }}>
                    <Image
                        src={image1}
                        objectFit="fill"
                        height={200}
                        containerCss={{
                            borderRadius: "0",
                        }}
                    />
                </Box>
            </Box>
        </div>
    );
};

// export const SoftwareSubMenu = () => {
//   const image1 = "/assets/bg-machinery.png";
//
//   return (
//     <>
//       <Box
//         css={{
//           margin: "10px 10px 15px 10px",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <Link
//           css={{
//             fontStyle: "normal",
//             fontWeight: "700",
//             fontSize: "18px",
//             lineHeight: "22px",
//               color: 'black',
//               padding: '20px',
//           }}
//           href={'/oil_and_gas/software'}
//         >
//           Software
//         </Link>
//       </Box>
//
//       <Box css={{ display: "flex" }}>
//         <Box
//           css={{
//             width: "70%",
//             display: "grid",
//             gridAutoRows: "min-content",
//             gridTemplateColumns: "1fr 1fr",
//           }}
//         >
//           {softwareOptions?.map((option) => (
//             <Box
//               key={option?.name}
//               css={{
//                 mx: "10px",
//                 mb: "15px",
//               }}
//             >
//               <TextLink
//                 textCSS={{
//                   fontStyle: "normal",
//                   fontWeight: "400",
//                   fontSize: "18px",
//                   lineHeight: "22px",
//                 }}
//                 href={option.href}
//               >
//                 {option.label}
//               </TextLink>
//             </Box>
//           ))}
//         </Box>
//         <Box css={{ mx: "$14" }}>
//           <Image
//             src={image1}
//             objectFit="fill"
//             height={250}
//             containerCss={{
//               borderRadius: "0",
//             }}
//           />
//         </Box>
//       </Box>
//     </>
//   );
// };

export const SoftwareSubMenu = () => {
    const image1 = "/assets/logo-paradigm.png";
    const image2 = "/assets/logo-petrosys.png";
    const image3 = "/assets/logo-kappa.png";

    return (
        <Box
            css={{
                display: "grid",
                gridAutoRows: "1fr",
                gridTemplateColumns: "1fr 1fr 1fr",
            }}
        >
            <Box css={{ mx: "20px" }}>
                <Image
                    src={image1}
                    objectFit="cover"
                    height={200}
                    containerCss={{
                        borderRadius: "0",
                        marginTop: 40
                    }}
                />
                <Box
                    css={{
                        marginTop: "10px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text
                        css={{
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "15px",
                            lineHeight: "22px",
                        }}
                    >
                        Paradigm
                    </Text>
                    <BsArrowRight color="#EC1C24" />
                </Box>
            </Box>
            <Box css={{ mx: "20px" }}>
                <Image
                    src={image2}
                    objectFit="contain"
                    height={200}
                    containerCss={{
                        borderRadius: "0",
                        marginTop: 40
                    }}
                />
                <Box
                    css={{
                        marginTop: "10px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text
                        css={{
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "15px",
                            lineHeight: "22px",
                        }}
                    >
                        Petrosys Data Management
                    </Text>
                    <BsArrowRight color="#EC1C24" />
                </Box>
            </Box>
            <Box css={{ mx: "20px" }}>
                <Image
                    src={image3}
                    objectFit="contain"
                    height={200}
                    containerCss={{
                        borderRadius: "0",
                        marginTop: 40
                    }}
                />
                <Box
                    css={{
                        marginTop: "10px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text
                        css={{
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "15px",
                            lineHeight: "22px",
                        }}
                    >
                        Kappa
                    </Text>
                    <BsArrowRight color="#EC1C24" />
                </Box>
            </Box>
        </Box>
    );
};

const subMenu: { [x: string]: () => JSX.Element } = {
    default: DefaultSubMenu,
    exploration: ExplorationSubMenu,
    laboratory: LaboratorySubMenu,
    software: SoftwareSubMenu,
    training: TrainingSubMenu,
    wellAndServices: () => <>wellAndServices</>,
};

export const getSubMenu = (selected: string) => {
    return subMenu[selected] ?? subMenu["default"];
};

export default {
    MainMenu,
    getSubMenu,
};