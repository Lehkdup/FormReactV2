import { Box, Button, TextField } from '@mui/material';
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export default function SearchField() {
    return (
        <>
            <Box sx={{ display: "flex", alignItems: "center", mt: "30px" }}>
                <Box sx={{
                    // mr: "5px",
                    // ml: "5px"
                    display: "flex"

                }}>
                    <TextField
                        autoComplete='off'
                        sx={{
                            // mt: "40px",

                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    // borderRadius: "40px",
                                    // border: "4px solid rgba(147, 198, 78, 1)"
                                },
                                "&:hover fieldset": {
                                    border: "1px solid rgba(0,0,0,.2)"
                                },
                                "&.Mui-focused fieldset": {
                                    border: "1px solid #f81984"
                                },
                            },
                            "& .MuiOutlinedInput-input": {
                                pt: "4px",
                                // font-family: Lato;
                                fontSize: "22px",
                                fontWeight: "300",
                                lineHeight: "26px",
                                // color: "rgba(255, 255, 255, 1)",

                            },
                            "& .MuiInputLabel-outlined": {
                                // color: "red",
                                // pt: "4px"
                                // fontSize: "20px"
                            },
                            "& .MuiInputLabel-outlined.Mui-focused": {
                                color: "#f81984",
                                // fontSize: "20px"
                            },
                            // input height
                            "& .MuiInputBase-input": {
                                pt: "8px",
                                pb: "8px",

                                minWidth: {
                                    md: "750px",
                                    xs: "250px"
                                }
                            },
                            // mt: { md: "38px", xs: "22px" }
                        }}
                        // size="large"
                        id="outlined-basic" label="Which topic are you interested in?" type="text" variant="outlined"

                    />
                    <Button style={{ backgroundColor: "#f81984", height: "48px", width: { sm: "96px", xs: "70" } }} sx={{ ml: "10px" }} >
                        <SearchIcon sx={{ color: "#ffffff" }} />
                    </Button>
                </Box>

            </Box>

        </>
    )
}
