import React, { useRef } from "react";
import {
  Box,
  TextField,
  Typography,
  TextareaAutosize,
  Button,
  Grid2,
} from "@mui/material";

const ContactUs = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const locationRef = useRef(null);
  const numberRef = useRef(null);
  const textAreaRef = useRef(null);

  const submitForm = () => {
    const to = "sahildussa457@gmail.com";
    const cc = "skywalker@starwars.com";
    const bcc = "leia@starwars.com";
    const subject = "Websolution Information";
    const firstName = encodeURIComponent(firstNameRef.current.value);
    const lastName = encodeURIComponent(lastNameRef.current.value);
    const location = encodeURIComponent(locationRef.current.value);
    const contactNumber = encodeURIComponent(numberRef.current.value);
    const message = encodeURIComponent(textAreaRef.current.value);

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&cc=${cc}&bcc=${bcc}&su=${subject}&body=First%20Name:%20${firstName}%0D%0ALast%20Name:%20${lastName}%0D%0AContact%20Number:%20${contactNumber}
    %0D%0ALocation:%20${location}%0D%0AMessage:%20${message}`;

    window.open(gmailLink, "_blank");

    firstNameRef.current.value = null;
    lastNameRef.current.value = null;
    locationRef.current.value = "";
    numberRef.current.value = "";
    textAreaRef.current.value = "";
  };

  return (
    //  sx={{ padding: "0 130px", margin: "40px 0px" }}
    <Box sx={{ padding: "0 130px", margin: "40px 0px" }}>
      <Box sx={{ padding: "30px 30px" }}>
        <Typography variant="h4" component="h4" sx={{ fontWeight: "700" }}>
          Contact Us
        </Typography>
        <Typography variant="body2">
          Get in touch with us for a free consult on the scope of your project
        </Typography>

        <Grid2 container spacing={2} sx={{ marginTop: "20px" }}>
          <Grid2 size={6}>
            <TextField
              id="outlined-basic"
              label="First Name"
              inputRef={firstNameRef}
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              inputRef={lastNameRef}
              id="outlined-basic"
              label="Last Name"
              sx={{ width: "100%" }}
              variant="outlined"
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              inputRef={locationRef}
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Location"
              variant="outlined"
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              inputRef={numberRef}
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Contact Number"
              variant="outlined"
            />
          </Grid2>
          <Grid2 size={12}>
            <TextareaAutosize
              ref={textAreaRef}
              className="textareaDesign"
              name="Solid"
              placeholder="Type your requirement here..."
              variant="solid"
            />
          </Grid2>
        </Grid2>

        <Button
          sx={{ marginTop: "20px" }}
          variant="contained"
          onClick={submitForm}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ContactUs;
