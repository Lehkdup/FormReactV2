import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, Button, Divider, Grid, TextField, Typography } from '@mui/material';
import { ArrowRight, ArrowRightAlt } from '@mui/icons-material';

export default function Form0() {
    const [insuranceSelection, setInsuranceSelection] = React.useState('');

    const handleChange = (event) => {
        setInsuranceSelection(event.target.value);
    };

    return (
        <>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                mt: "60px"
            }}>
                <Box sx={{
                    mt: { xs: "10px", md: "0px" },
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        md: "row"

                    },
                    justifyContent: "space-around",
                    width: {
                        // textAlign: "center",
                        // alignItems: "center",
                        lg: "80%",
                        md: "90%",
                        xs: "90%"
                    }
                }}>
                    <TextField
                        autoComplete='off'
                        sx={{
                            mt: { xs: "5px", md: "0px" },
                            height: "56px",
                            // md: "100%",
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
                                pt: "12px",
                                pb: "12px",


                            },
                            // mt: { md: "38px", xs: "22px" }
                        }}
                        // size="large"
                        id="outlined-basic" label="Postleitzahl" type="text" variant="outlined"

                    />
                    <FormControl sx={{
                        mt: { xs: "10px", md: "0px" },
                        height: "56px",
                        ml: {
                            md: "10px"
                        },
                        mr: {
                            md: "10px"
                        },
                        // m: 1,
                        width: {
                            xs: "100%",
                            sm: "100%",
                            md: "33%"
                        },
                        mt: { xs: "5px", md: "0px" },
                        // color: "rgba(0,0,0,.7)",
                        "& .MuiOutlinedInput-root": {
                            "&:hover fieldset": {
                                border: "1px solid rgba(0,0,0,.2)"
                            },

                            "&.Mui-focused fieldset": {
                                border: "1px solid #f81984"
                            },
                        },
                    }}  >
                        {/* <InputLabel id="demo-select-small-label">Age</InputLabel> */}
                        <Select
                            // sx={{
                            //     width: "33%"


                            // }}


                            value={insuranceSelection}
                            IconComponent={KeyboardArrowUpIcon}
                            label=""
                            onChange={handleChange}


                        >

                            <MenuItem value="Current health insurance">
                                Current health insurance
                            </MenuItem>
                            <MenuItem value="No current insurance">
                                No current insurance
                            </MenuItem>
                            <MenuItem value="Agrisano">Agrisano</MenuItem>
                            <MenuItem value="AMB Assurances SA">AMB Assurances SA</MenuItem>
                            <MenuItem value="Aquilana">Aquilana</MenuItem>
                            <MenuItem value="Arcosana (CSS)">Arcosana (CSS)</MenuItem>
                            <MenuItem value="Assura">Assura</MenuItem>
                            <MenuItem value="Atupri">Atupri</MenuItem>
                            <MenuItem value="Avenir (Groupe Mutuel)">
                                Avenir (Groupe Mutuel)
                            </MenuItem>
                            <MenuItem value="Birchmeier">Birchmeier</MenuItem>
                            <MenuItem value="Compact">Compact</MenuItem>
                            <MenuItem value="Concordia">Concordia</MenuItem>
                            <MenuItem value="CSS">CSS</MenuItem>
                            <MenuItem value="Easy Sana (Groupe Mutuel)">
                                Easy Sana (Groupe Mutuel)
                            </MenuItem>
                            <MenuItem value="EGK">EGK</MenuItem>
                            <MenuItem value="hermit">hermit</MenuItem>
                            <MenuItem value="Galenos">Galenos</MenuItem>
                            <MenuItem value="Glarus">Glarus</MenuItem>
                            <MenuItem value="Helsana">Helsana</MenuItem>
                            {/* </Select> */}
                        </Select>
                    </FormControl >
                    <Button style={{
                        backgroundColor: "#f81984",
                        color: "white",

                        height: "56px"
                    }}
                        sx={{
                            mt: { xs: "10px", md: "0px" },

                            width: {
                                xs: "100%",
                                sm: "100%",
                                md: "33%"
                            },
                            textTransform: "none"
                        }}

                    >
                        Jetzt vergleichen
                        <ArrowRightAlt />
                    </Button>
                </Box>

            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: "50px" }}>
                <Divider sx={{ minWidth: "30%" }} />
                <Box sx={{
                    width: { xs: "60px", sm: "80px" },
                    height: { xs: "60px", sm: "80px" },
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px #f81984 solid",
                    ml: "25px", mr: "25px"
                }}>
                    <Typography sx={{ color: "#f81984" }} >
                        1/6
                    </Typography>

                </Box>
                <Divider sx={{ minWidth: "30%" }} />

            </Box>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                // justifyContent: "center",
                flexDirection: "column"

            }}>
                <Typography sx={{
                    fontSize: "26px",
                    fontWeight: "700",
                    mt: "15px",
                    // lineHeight: "1.5"

                }}>
                    Alle Schweizer Krankenkassen

                </Typography>
                <Typography sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#abb8c3",
                    mt: "8px",
                    // lineHeight: "1.5"

                }}>
                    Bei uns finden Sie Ihr passendes Angebot


                </Typography>
            </Box>

            <Box sx={{
                mt: "30px",
                width: "100%",
                justifyContent: "center",


                display: "flex",




            }}>
                <Box sx={{
                    width: { xs: "80%", lg: "60%" },


                }}>
                    <Typography sx={{
                        color: "#3f3f3f",
                        fontSize: "15px",
                        mb: "20px"
                    }}>
                        Sind Sie bereits in der Schweiz versichert?

                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item md={6} xs={12}>
                            <Button sx={{
                                height: "50px",
                                color: "rgba(0,0,0,.87)",
                                fontSize: "20px",
                                fontWeight: "500",

                                textTransform: "none",
                                boxShadow: "3px 3px 12px -4px rgba(0,0,0,.4)",

                                ":hover": {
                                    boxShadow: "0 4px 8px 10px rgba(0, 0, 0, 0.2), 0 6px 20px 10px rgba(0, 0, 0, 0.19)"

                                }
                            }}
                                style={{
                                    backgroundColor: "#fff",
                                    width: "100%",
                                }}

                            >
                                <strong>Ja</strong>
                                , ich bin bereits versichert
                            </Button>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Button sx={{
                                height: "50px",
                                color: "rgba(0,0,0,.87)",
                                fontSize: "20px",
                                fontWeight: "500",

                                textTransform: "none",
                                boxShadow: "3px 3px 12px -4px rgba(0,0,0,.4)",

                                ":hover": {
                                    boxShadow: "0 4px 8px 10px rgba(0, 0, 0, 0.2), 0 6px 20px 10px rgba(0, 0, 0, 0.19)"

                                }
                            }}
                                style={{
                                    backgroundColor: "#fff",
                                    width: "100%",
                                }}

                            >
                                <strong>Ja</strong>
                                , ich bin bereits versichert
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box sx={{
                mt: "40px",
                width: "100%",
                justifyContent: "center",


                display: "flex",




            }}>
                <Box sx={{
                    width: { xs: "80%", lg: "60%" },


                }}>
                    <Typography sx={{
                        color: "#3f3f3f",
                        fontSize: "15px",
                        mb: "20px"
                    }}>
                        Welche Situation triff auf Sie zu?


                    </Typography>

                    <Grid container spacing={2}>

                        <Grid item md={4} xs={12}>
                            <Button sx={{
                                height: "50px",
                                color: "rgba(0,0,0,.87)",
                                fontSize: "20px",
                                fontWeight: "500",

                                textTransform: "none",
                                boxShadow: "3px 3px 12px -4px rgba(0,0,0,.4)",

                                ":hover": {
                                    boxShadow: "0 4px 8px 10px rgba(0, 0, 0, 0.2), 0 6px 20px 10px rgba(0, 0, 0, 0.19)"

                                }
                            }}
                                style={{
                                    backgroundColor: "#fff",
                                    width: "100%",
                                }}

                            >
                                Familie
                            </Button>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Button sx={{
                                height: "50px",
                                color: "rgba(0,0,0,.87)",
                                fontSize: "20px",
                                fontWeight: "500",

                                textTransform: "none",
                                boxShadow: "3px 3px 12px -4px rgba(0,0,0,.4)",

                                ":hover": {
                                    boxShadow: "0 4px 8px 10px rgba(0, 0, 0, 0.2), 0 6px 20px 10px rgba(0, 0, 0, 0.19)"

                                }
                            }}
                                style={{
                                    backgroundColor: "#fff",
                                    width: "100%",
                                }}

                            >
                                Familie
                            </Button>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Button sx={{
                                height: "50px",
                                color: "rgba(0,0,0,.87)",
                                fontSize: "20px",
                                fontWeight: "500",

                                textTransform: "none",
                                boxShadow: "3px 3px 12px -4px rgba(0,0,0,.4)",

                                ":hover": {
                                    boxShadow: "0 4px 8px 10px rgba(0, 0, 0, 0.2), 0 6px 20px 10px rgba(0, 0, 0, 0.19)"

                                }
                            }}
                                style={{
                                    backgroundColor: "#fff",
                                    width: "100%",
                                }}

                            >
                                Familie
                            </Button>
                        </Grid>
                        {/* <Grid item md={6} xs={12}>
                            <Button sx={{
                                height: "74px",
                                color: "rgba(0,0,0,.87)",
                                fontSize: "20px",
                                fontWeight: "500",

                                textTransform: "none",
                                boxShadow: "3px 3px 12px -4px rgba(0,0,0,.4)",

                                ":hover": {
                                    boxShadow: "0 4px 8px 10px rgba(0, 0, 0, 0.2), 0 6px 20px 10px rgba(0, 0, 0, 0.19)"

                                }
                            }}
                                style={{
                                    backgroundColor: "#fff",
                                    width: "100%",
                                }}

                            >
                                <strong>Ja</strong>
                                , ich bin bereits versichert
                            </Button>
                        </Grid> */}
                    </Grid>
                </Box>
            </Box>
            <Box sx={{
                mt: "30px",
                width: "100%",
                justifyContent: "center",


                display: "flex",




            }}>
                <Box sx={{
                    width: { xs: "80%", lg: "60%" },


                }}>
                    <Typography sx={{
                        color: "#3f3f3f",
                        fontSize: "15px",
                        mb: "20px"
                    }}>
                        Sind Sie bereits in der Schweiz versichert?

                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item md={6} xs={12}>
                            <Button sx={{
                                height: "50px",
                                color: "rgba(0,0,0,.87)",
                                fontSize: "20px",
                                fontWeight: "500",

                                textTransform: "none",
                                boxShadow: "3px 3px 12px -4px rgba(0,0,0,.4)",

                                ":hover": {
                                    boxShadow: "0 4px 8px 10px rgba(0, 0, 0, 0.2), 0 6px 20px 10px rgba(0, 0, 0, 0.19)"

                                }
                            }}
                                style={{
                                    backgroundColor: "#fff",
                                    width: "100%",
                                }}

                            >
                                <strong>Ja</strong>
                                , ich bin bereits versichert
                            </Button>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Button sx={{
                                height: "50px",
                                color: "rgba(0,0,0,.87)",
                                fontSize: "20px",
                                fontWeight: "500",

                                textTransform: "none",
                                boxShadow: "3px 3px 12px -4px rgba(0,0,0,.4)",

                                ":hover": {
                                    boxShadow: "0 4px 8px 10px rgba(0, 0, 0, 0.2), 0 6px 20px 10px rgba(0, 0, 0, 0.19)"

                                }
                            }}
                                style={{
                                    backgroundColor: "#fff",
                                    width: "100%",
                                }}

                            >
                                <strong>Ja</strong>
                                , ich bin bereits versichert
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box sx={{
                width: "90%",
                display: "flex",
                justifyContent: "flex-end", mt: "40px"

            }}>
                <Button style={{
                    color: "#fff",
                    fontSize: "20px",
                    fontWeight: "400",
                    backgroundColor: "#f81984",
                    width: "140px",
                    height: "56px",

                    textTransform: "none",


                    // width: "100%",
                }}


                >
                    Weiter
                </Button>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: "50px" }}>
                <Divider sx={{ minWidth: "30%" }} />
                <Box sx={{
                    width: { xs: "60px", sm: "80px" },
                    height: { xs: "60px", sm: "80px" },
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px #f81984 solid",
                    ml: "25px", mr: "25px"
                }}>
                    <Typography sx={{ color: "#f81984" }} >
                        2/6
                    </Typography>

                </Box>
                <Divider sx={{ minWidth: "30%" }} />

            </Box>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                mt: "15px",
                // justifyContent: "center",
                flexDirection: "column"

            }}>
                <Typography sx={{
                    fontSize: "26px",
                    fontWeight: "700",

                    // lineHeight: "1.5"

                }}>
                    Ihr Wohnsitz?

                </Typography>
                <Typography sx={{
                    mt: "8px",
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#abb8c3"
                    // lineHeight: "1.5"

                }}>
                    Prämien unterscheiden sich je nach gewählter Region



                </Typography>
            </Box>
            <Box sx={{
                width: "100%",
                margin: "auto",
                display: "flex",
                justifyContent: "center",
                mt: "40px",
                mb: "40px"
            }} >
                <Box sx={{
                    width: {
                        md: "70%",
                        lg: "60%",
                        sx: "80%",
                    }
                }}>
                    <Grid container spacing={2} >
                        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "start", md: "end" } }} md={4} >
                            <Typography sx={{
                                fontSize: "18px",
                                fontWeight: "700",

                                color: "#3f3f3f",
                                // textAlign: "center",
                                display: "flex",
                                alignSelf: "right",
                                alignItems: "center"
                            }}>
                                Ihre Postleitzahl


                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={8} sx={{
                            display: "flex", alignItems: "center", justifyContent: "start"
                        }}>
                            <FormControl
                                fullWidth="true"
                                sx={{

                                    mt: { xs: "10px", md: "0px" },
                                    height: "56px",
                                    ml: {
                                        md: "10px"
                                    },
                                    mr: {
                                        md: "10px"
                                    },


                                    mt: { xs: "5px", md: "0px" },

                                    "& .MuiOutlinedInput-root": {
                                        "&:hover fieldset": {
                                            border: "1px solid rgba(0,0,0,.2)"
                                        },

                                        "&.Mui-focused fieldset": {
                                            border: "1px solid #f81984"
                                        },
                                    },
                                }}  >

                                <Select



                                    value={insuranceSelection}
                                    IconComponent={KeyboardArrowUpIcon}
                                    label=""
                                    onChange={handleChange}


                                >

                                    <MenuItem value="Current health insurance">
                                        3014 - Bern - Bern
                                    </MenuItem>


                                </Select>
                            </FormControl >
                        </Grid>

                    </Grid>
                </Box>

            </Box>
            <Box sx={{
                width: "100%",
                margin: "auto",
                display: "flex",
                justifyContent: "center",
                mt: "40px",
                mb: "40px"
            }} >
                <Box sx={{
                    width: {
                        md: "70%",
                        lg: "60%",
                        sx: "80%",
                    }
                }}>
                    <Grid container spacing={2} >
                        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "start", md: "end" } }} md={4} >
                            <Typography sx={{
                                fontSize: "18px",
                                fontWeight: "700",

                                color: "#3f3f3f",
                                // textAlign: "center",
                                display: "flex",
                                alignSelf: "right",
                                alignItems: "center"
                            }}>
                                Aktuelle Krankenkasse




                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={8} sx={{
                            display: "flex", alignItems: "center", justifyContent: "start"
                        }}>
                            <FormControl
                                fullWidth="true"
                                sx={{

                                    mt: { xs: "10px", md: "0px" },
                                    height: "56px",
                                    ml: {
                                        md: "10px"
                                    },
                                    mr: {
                                        md: "10px"
                                    },


                                    mt: { xs: "5px", md: "0px" },

                                    "& .MuiOutlinedInput-root": {
                                        "&:hover fieldset": {
                                            border: "1px solid rgba(0,0,0,.2)"
                                        },

                                        "&.Mui-focused fieldset": {
                                            border: "1px solid #f81984"
                                        },
                                    },
                                }}  >

                                <Select



                                    value={insuranceSelection}
                                    IconComponent={KeyboardArrowUpIcon}
                                    label=""
                                    onChange={handleChange}


                                >

                                    <MenuItem value="Current health insurance">
                                        Current health insurance
                                    </MenuItem>
                                    <MenuItem value="No current insurance">
                                        No current insurance
                                    </MenuItem>
                                    <MenuItem value="Agrisano">Agrisano</MenuItem>
                                    <MenuItem value="AMB Assurances SA">AMB Assurances SA</MenuItem>
                                    <MenuItem value="Aquilana">Aquilana</MenuItem>
                                    <MenuItem value="Arcosana (CSS)">Arcosana (CSS)</MenuItem>
                                    <MenuItem value="Assura">Assura</MenuItem>
                                    <MenuItem value="Atupri">Atupri</MenuItem>
                                    <MenuItem value="Avenir (Groupe Mutuel)">
                                        Avenir (Groupe Mutuel)
                                    </MenuItem>
                                    <MenuItem value="Birchmeier">Birchmeier</MenuItem>
                                    <MenuItem value="Compact">Compact</MenuItem>
                                    <MenuItem value="Concordia">Concordia</MenuItem>
                                    <MenuItem value="CSS">CSS</MenuItem>
                                    <MenuItem value="Easy Sana (Groupe Mutuel)">
                                        Easy Sana (Groupe Mutuel)
                                    </MenuItem>
                                    <MenuItem value="EGK">EGK</MenuItem>
                                    <MenuItem value="hermit">hermit</MenuItem>
                                    <MenuItem value="Galenos">Galenos</MenuItem>
                                    <MenuItem value="Glarus">Glarus</MenuItem>
                                    <MenuItem value="Helsana">Helsana</MenuItem>

                                </Select>
                            </FormControl >
                        </Grid>

                    </Grid>
                </Box>

            </Box>
            <Box sx={{
                width: "90%",
                display: "flex",
                justifyContent: "flex-end", mt: "40px"

            }}>
                <Button style={{
                    color: "#fff",
                    fontSize: "20px",
                    fontWeight: "400",
                    backgroundColor: "#f81984",
                    width: "140px",
                    height: "56px",

                    textTransform: "none",


                    // width: "100%",
                }}


                >
                    Weiter
                </Button>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: "50px" }}>
                <Divider sx={{ minWidth: "30%" }} />
                <Box sx={{
                    width: { xs: "60px", sm: "80px" },
                    height: { xs: "60px", sm: "80px" },
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px #f81984 solid",
                    ml: "25px", mr: "25px"
                }}>
                    <Typography sx={{ color: "#f81984" }} >
                        3/6
                    </Typography>

                </Box>
                <Divider sx={{ minWidth: "30%" }} />

            </Box>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                // justifyContent: "center",
                flexDirection: "column"

            }}>
                <Typography sx={{
                    fontSize: "26px",
                    fontWeight: "700",
                    mt: "15px",
                    // lineHeight: "1.5"

                }}>
                    Personenangaben

                </Typography>
                <Typography sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#abb8c3",
                    mt: "8px",
                    // lineHeight: "1.5"

                }}>
                    Bei mehreren Personen können Familienrabatte abgezogen werden.



                </Typography>
            </Box>

            {/* <Box sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                mt: "60px"
            }}>
                <Box sx={{
                    mt: { xs: "10px", md: "0px" },
                    display: "flex",
                    // textAlign: "center",
                    // justifyContent: "center",
                    alignItems: "center",

                    flexDirection: {
                        xs: "column",
                        md: "row"

                    },
                    // justifyContent: "space-around",
                    width: {
                        // textAlign: "center",
                        // alignItems: "center",
                        lg: "70%",
                        md: "80%",
                        xs: "80%"
                    }
                }}>
                   
                  

                </Box>

            </Box> */}





        </>

    );
}