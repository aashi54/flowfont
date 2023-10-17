import React from "react";
import { Grid, Container, Typography, Link } from "@mui/material";
import './Footer.css'

const styles = {
  fontSize: "1rem",
  fontWeight: "bold",
  textDecoration: "none",
  marginBottom: "8px"
};

const linkStyles = {
  fontSize: "0.8rem", 
  textDecoration: "none",
  
};


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="textSecondary" style={styles}>
            At  PaisaFlow, we're dedicated to providing you with tailored financial solutions that empower your dreams. With a commitment to transparency, competitive rates, and a hassle-free application process, we're your trusted partner in achieving your financial goals
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom >
              Contact Us
            </Typography>
            <Typography variant="body2" color="textSecondary"  style={styles}>
              Personal Loan: personalloan@paisaflow.com
            </Typography>
            <Typography variant="body2" color="textSecondary"  style={styles}>
             Support : supportandcare@paisaflow.com
            </Typography>
            <Typography variant="body2" color="textSecondary"  style={styles}>
              HR : hr@paisaflow.com
            </Typography>
            <Typography variant="body2" color="textSecondary"  style={styles}>
            Careers: careers@paisaflow.com
            </Typography>
            {/* <Typography variant="body2" color="textSecondary"  style={styles}>
              Phone: +1 234-567-890
            </Typography>
            <Typography variant="body2" color="textSecondary"  style={styles}>
              Address: 123 Main Street, City
            </Typography> */}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <div>
              <Link href="#" color="inherit" style={linkStyles}>
                Home
              </Link>
              <br />
              <Link href="/loan-application" color="inherit" style={linkStyles}>
                Apply for Loan
              </Link>
              <br />
              <Link href="/emicalculator" color="inherit" style={linkStyles}>
                Emi Calculator
              </Link>
              <br />
              <Link href="#" color="inherit" style={linkStyles}>
                About Us
              </Link>
              <br />
              <Link href="#" color="inherit" style={linkStyles}>
                Contact Us
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Social Media
            </Typography>
            <div>
              <Link href="https://www.facebook.com/profile.php?id=61551867456037&mibextid=ZbWKwL" color="inherit" style={linkStyles}>
                Facebook
              </Link>
              <br />
              <Link href="https://youtube.com/@OfficialPaisaflow?si=wO7r8T35loEH4iBY" color="inherit" style={linkStyles}>
                Youtube
              </Link>
              <br />
              <Link href="https://instagram.com/officialpaisaflow?igshid=MzMyNGUyNmU2YQ==" color="inherit" style={linkStyles}>
                Instagram
              </Link>
              <br />
              <Link href="https://www.linkedin.com/in/pradeep-kumar-394b16294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" color="inherit" style={linkStyles}>
                LinkedIn
              </Link>
            </div>
          </Grid>
        </Grid>
        <Typography variant="body2" color="textSecondary" mt={4} style={{fontSize:'1rem', fontWeight:'bold'}} >
          © {new Date().getFullYear()} PaisaFlow.com. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
