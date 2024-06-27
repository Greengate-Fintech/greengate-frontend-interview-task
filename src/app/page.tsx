"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreenRounded";
import CloseRounded from "@mui/icons-material/CloseRounded";

export default function Home() {
  // ********* Start your change here. *********

  // You can use the following area to complete your change.

  // ********* End your change here. *********
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" component="nav">
        <Toolbar>
          <Typography variant="h5">
            Greengate frontend interview assignment
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ pt: 3 }}>
        <Toolbar />
        <Typography variant="h5" pb={3}>
          Part 1: Cookie Preference Dialog
        </Typography>
        <Typography paragraph>
          Create a dialog to allow user to manage their cookie preferences. Use
          appropriate MUI component to achieve this. The dialog should be
          triggered by the button below:
        </Typography>
        {/* ********* Start your change for Part 1 here. ********* */}
        <Box display="flex" justifyContent="center" alignItems="center" p={3}>
          <Button size="small" variant="contained">
            Manage my preferences
          </Button>
        </Box>
        {/* ********* End your change for Part 1 here. ********* */}
        <Typography paragraph>
          An example of how the dialog could look like is shown below:
          <Image
            alt="cookie preference example"
            src="/cookie-preference.png"
            width={805}
            height={300}
          />
        </Typography>
        <Typography paragraph>
          For each of preferences listed below, it should include
        </Typography>
        <ul>
          <li>An on/off switch</li>
          <li>Name of the preference</li>
          <li>The description of the preference</li>
        </ul>
        <Typography paragraph>
          The details of the preferences are as follows:
        </Typography>
        <ul>
          <li>
            <strong>Essential</strong>
            <Typography paragraph>
              These items are necessary for the website to work.
            </Typography>
          </li>
          <li>
            <strong>Marketing</strong>
            <Typography paragraph>
              These items help deliver advertising that&rsquo;s more relevant to
              you. They may also be used to limit the number of times you see an
              ad and measure the effectiveness of ad campaigns. These are third
              party cookies provided by our advertising partners.
            </Typography>
          </li>
          <li>
            <strong>Personalization</strong>
            <Typography paragraph>
              These items let the website remember choices you make (like user
              name, language, or region) and personalize features for you. For
              example, we may show you different content depending on which of
              our sites you&rsquo;ve visited and content you&rsquo;ve read.
            </Typography>
          </li>
          <li>
            <strong>Analytics</strong>
            <Typography paragraph>
              These items help us understand visitor interactions, measure
              website performance, and spot potential technical issues. These
              don&rsquo;t include essential cookies that provide incidental
              analytics while making the website work.
            </Typography>
          </li>
        </ul>
        <Typography paragraph>
          The dialog should also include a button to allow user to save their
          preferences.
        </Typography>

        <Typography variant="h5" py={3}>
          Part 2: Invite Customer Dialog
        </Typography>
        <Typography paragraph>
          Create a dialog to invite customers to join Verifime. Use appropriate
          MUI component to achieve this. The dialog should be triggered by the
          button below:
        </Typography>
        {/* ********* Start your change for Part 2 here. ********* */}
        <Box display="flex" justifyContent="center" alignItems="center" p={3}>
          <Button size="small" variant="contained">
            Invite Customers
          </Button>
        </Box>
        {/* ********* End your change for Part 2 here. ********* */}
        <Typography paragraph>
          Your dialog should initially look the dialog (Invite Code Dialog)
          below:
        </Typography>
        <Stack display="flex" justifyContent="center" alignItems="center" p={3}>
          <Image
            alt="invite code dialog"
            src="/invite-code.png"
            width={240}
            height={300}
          />
          <Typography variant="caption">Invite Code Dialog</Typography>
        </Stack>
        <Typography paragraph>
          Once the user clicks on the <strong>SHOW QR CODE</strong> button, a
          <strong>fullscreen</strong> dialog (QR Code Dialog) showing the QR
          code presentation of the sign-up link is displayed. The dialog should
          look like the one below:
        </Typography>
        <Stack justifyContent="center" alignItems="center" p={3}>
          <Image
            alt="qr code dialog"
            src="/qr-code.png"
            width={700}
            height={450}
          />
          <Typography variant="caption">QR Code Dialog</Typography>
        </Stack>
        <Typography paragraph>
          The restore <CloseFullscreenIcon /> button on the left of the close
          <CloseRounded />
          button on <strong>QR Code Dialog</strong> allow user to restore the
          dialog back to <strong>Invite Code Dialog</strong>.
        </Typography>
        <Typography paragraph>Please note the following:</Typography>
        <ul>
          <li>
            <Typography paragraph>
              The invite code should be a prop that can be passed to the dialog
              component. It can be copied by the user by clicking on the code.
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              The link displayed below the code also includes the invite code.
              The format of the link should be:{" "}
              <strong>{`https://{domain}/sign-up?signUpCode={code}`}</strong>.
            </Typography>
            <Typography paragraph>
              An example of the link is shown below
            </Typography>
            <Typography paragraph>
              <Link
                target="_blank"
                href="https://portal.demo.verifime.com/sign-up?signUpCode=BIO0SFV8OKYX"
              >
                https://portal.demo.verifime.com/sign-up?signUpCode=BIO0SFV8OKYX
              </Link>
            </Typography>
            <Typography paragraph>
              The domain of the url can change between different environments.
            </Typography>
            <Typography paragraph>
              The link can be copied via the <strong>Copy Link</strong> link.
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              The QR code should be generated using the API endpoint provided
              below.
            </Typography>
            <Stack justifyContent="center" alignItems="center">
              <Typography paragraph>
                QR Code API:{" "}
                <Link
                  target="_blank"
                  href="https://rapidapi.com/linqr-linqr-default/api/qrcode3"
                >
                  https://rapidapi.com/linqr-linqr-default/api/qrcode3
                </Link>
              </Typography>
              <Typography variant="caption" paragraph>
                Note: You can sign up for a free account to get the API key.
              </Typography>
            </Stack>

            <Typography paragraph>
              An example generated QR code is shown below:
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              p={3}
            >
              <Image
                alt="QR code for invite customer link"
                src="/qr.jpeg"
                width={200}
                height={200}
              />
            </Box>
            <Typography paragraph>
              <strong>Download QR code as image</strong> link should allow user
              to save the QR code to disk.
            </Typography>
          </li>
        </ul>
      </Container>
    </React.Fragment>
  );
}
