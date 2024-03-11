import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import cap from "../assets/images/cap.png"
// import projectCardImage from '../../assets/projectCardImage.jpeg'
const guideCardData = [
    { id: 1, GuideImage: cap, GuideTitle: "Health insurance comparison", GuideDescription: "Compare the premiums of Swiss health insurance companies free of charge." },
    { id: 2, GuideImage: cap, GuideTitle: "Health insurance comparison", GuideDescription: "Compare the premiums of Swiss health insurance companies free of charge." },
    { id: 3, GuideImage: cap, GuideTitle: "Health insurance comparison", GuideDescription: "Compare the premiums of Swiss health insurance companies free of charge." },
    { id: 4, GuideImage: cap, GuideTitle: "Health insurance comparison", GuideDescription: "Compare the premiums of Swiss health insurance companies free of charge." },
    { id: 5, GuideImage: cap, GuideTitle: "Health insurance comparison", GuideDescription: "Compare the premiums of Swiss health insurance companies free of charge." },
    { id: 6, GuideImage: cap, GuideTitle: "Health insurance comparison", GuideDescription: "Compare the premiums of Swiss health insurance companies free of charge." },
]
const GuideCards = (() => {
    return (
        <>
            <Box sx={{
                mt: "50px",
                width: { md: "90%", xs: "95%" },
            }}>
                <Grid container spacing={2}>
                    {
                        guideCardData.map((card) => {
                            return (
                                <Grid item
                                    xs={12}
                                    md={6}
                                    lg={4}
                                // xl={3}
                                >
                                    <Box sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                        // minWidth: "300px",
                                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"

                                    }}



                                    >
                                        <img
                                            src={card.GuideImage} width="59px" height="50px" style={{ borderRadius: "15px", marginTop: "20px", marginBottom: "20px" }}
                                            alt={`${card.GuideImage} image`}
                                        />
                                        <Typography sx={{
                                            // pl: "10px",
                                            // pr: "10px",
                                            fontSize: "20px",
                                            fontWeight: "600",
                                            color: "#3f3f3f"

                                        }}>
                                            {
                                                card.GuideTitle
                                            }
                                        </Typography>
                                        <Typography sx={{
                                            pl: "10px",
                                            pr: "10px",
                                            fontWeight: "500",
                                            fontSize: "16px",
                                            color: "#3f3f3f",
                                            pb: "20px",
                                            mt: "15px",
                                            textAlign: "center"

                                        }}>
                                            {
                                                card.GuideDescription
                                            }
                                        </Typography>

                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>


        </>
    )
})



export default GuideCards