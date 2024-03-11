import { Box, Typography } from '@mui/material'
import React from 'react'
import findInsurance from "../assets/images/findInsurance.png"


export default function SuitInsurance() {
    return (
        <Box sx={{
            backgroundColor: "#f4f4f4",
            display: "flex",
            justifyContent: "center",
            width: "100%"
            // marginTop: "-90px"

        }}>

            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "90%",
                flexDirection: {
                    xs: "column",
                    md: "row",

                },
                mt: "80px"


            }}>

                <img src={findInsurance} style={{
                    maxWidth: "370px",
                    maxHeight: "340px",
                    margin: "auto"
                }} />
                <Box sx={{

                }}>
                    <Typography sx={{
                        fontSize: { lg: "50px", md: "26px", sx: "20px" },
                        fontWeight: "700",
                        mt: "10px", lineHeight: "1.1",
                        maxWidth: "900px",
                        mt: "20px",
                        pl: "20px",


                    }}>
                        Find the insurance that suits you..
                    </Typography>
                    <Typography sx={{
                        mt: "20px",
                        pl: "20px",
                        color: "#3f3f3f",
                        fontSize: "16px",
                        maxWidth: "900px"
                    }}>
                        Insurance matters can be complicated – we know that. The Swiss online portal insurando.ch creates clarity for end customers. We compare premiums and benefits from car insurance to travel insurance – comprehensibly, transparently and free of charge.


                    </Typography>
                    <Typography sx={{
                        mt: "20px",
                        pl: "20px",
                        color: "#3f3f3f",
                        fontSize: "16px",
                        maxWidth: "900px"
                    }}>
                        At insurando, you’re spoilt for choice: classic quotes, personal advice and online conclusion.


                    </Typography>
                </Box>

            </Box>
        </Box>

    )
}
