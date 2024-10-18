import React from "react";
import styled from "styled-components";
import * as Icon from "react-feather";

// DetailsBar Styles
const DetailsBarWrapper = styled.div`
  background-color: rgb(8, 8, 63);
  border-radius: 7px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto; // Centering the component
  width: 90%; // Responsive width
  max-width: 560px; // Max width for larger screens
  @media (max-width: 480px) {
    padding: 20px;
    height: 320px; // Minimal padding for very small screens
  }
  @media (max-width: 912px) {
    padding: 20px;
    height: 320px;
  }
  @media (min-width: 834px) {
    padding: 20px;
    height: 320px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextOne = styled.p`
  text-align: center;
  color: #fff;
  font-size: 1.5rem; // Responsive font size
  font-weight: bold;

  @media (max-width: 820px) {
    font-size: 1.4rem; // Adjusted for iPad Air
  }

  @media (max-width: 768px) {
    font-size: 1.25rem; // Smaller font for tablets
  }
`;

const TextTwo = styled.p`
  text-align: center;
  color: #fff;
  font-size: 1rem; // Responsive font size
  line-height: 1.5; // Improved line height for readability
  margin-top: 10px;

  @media (max-width: 820px) {
    font-size: 0.95rem; // Adjusted for iPad Air
  }

  @media (max-width: 768px) {
    font-size: 0.9rem; // Smaller font for tablets
  }
`;

const BigCircle = styled.div`
  height: 50px;
  width: 50px;
  background-color: rgb(100, 21, 173);
  border-radius: 50%;
  z-index: 22;
  margin-top: 2px;

  @media (max-width: 828px) {
    margin-top: 20px;
  }
`;

const ContactsWrapper = styled.a`
  display: flex;
  width: 100%; // Full width on smaller screens
  margin-top: 10px; // Reduced margin for better spacing
  cursor: pointer;
  text-decoration: none;
  justify-content: center; // Centering the items
`;

const ContactText = styled.div`
  color: #fff;
  font-size: 1rem; // Responsive font size
  margin-left: 10px;

  @media (max-width: 820px) {
    font-size: 0.95rem; // Adjusted for iPad Air
  }

  @media (max-width: 768px) {
    font-size: 0.9rem; // Smaller font for tablets
  }
`;

const SocialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px; // Add some margin to separate it from the content above
  cursor: pointer;

  @media (max-width: 480px) {
    margin-top: 10px; // Adjust margin for very small screens
  }

  @media (max-width: 828px) {
    margin-top: 38px;
  }

  @media (min-width: 1024px) {
    // Larger screens (iPad, etc.)
    margin-top: 25px;
  }
  @media (min-width: 360px) {
    // Larger screens (iPad, etc.)
    margin-top: 10px;
  }
`;

const SocialIconWrapper = styled.a`
  width: 35px;
  height: 410px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px; // Added margin between icons
  &:hover {
    background-color: rgb(252, 113, 137);
  }

  @media (max-width: 828px) {
    width: 38px;
    height: 38px;
  }
  @media (min-width: 1024px) {
    width: 45px;
    height: 45px;
    margin: 0 12px;
  }
  @media (min-width: 360px) {
    width: 38px;
    height: 38px;
  }
`;

// InputSide Styles
const InputSideWrapper = styled.form`
  height: auto;
  padding: 20px; // Responsive padding
  margin: 0 auto; // Centered margin
  width: 90%; // Full width on small screens
  max-width: 600px; // Max width for larger screens
  display: flex;
  flex-direction: column; // Stack inputs vertically

  @media (max-width: 820px) {
    padding: 15px; // Adjust padding for iPad Air
  }
`;

const InputWrapper = styled.div`
  border: 2px solid transparent;
  width: 100%; // Full width
  display: flex;
  flex-direction: column;
  margin-bottom: 15px; // Space between inputs
`;

const Input = styled.input`
  color: #333;
  width: 100%;
  font-size: 15px;
  padding: 8px;
  border-bottom: 1px solid rgb(100, 21, 173);
  outline: none; // Removed outline

  @media (max-width: 820px) {
    font-size: 14px; // Adjusted for iPad Air
  }

  @media (max-width: 768px) {
    font-size: 13px; // Smaller font for tablets
  }
`;

const MessageInput = styled.textarea`
  width: 100%;
  color: #333;
  font-size: 15px;
  padding: 10px;
  border-bottom: 1px solid rgb(100, 21, 173);
  outline: none; // Removed outline

  @media (max-width: 820px) {
    font-size: 14px; // Adjusted for iPad Air
  }

  @media (max-width: 768px) {
    font-size: 13px; // Smaller font for tablets
  }
`;

const SubMitButton = styled.input`
  padding: 12px 25px;
  background-color: rgb(8, 8, 63);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px; // Space above the button

  @media (max-width: 768px) {
    width: 100%; // Full width on smaller screens
  }
`;

const DetailsBar = () => {
  return (
    <DetailsBarWrapper>
      <TextWrapper>
        <TextOne>Contact Information</TextOne>
        <TextTwo>
          Fill up the form and our team will get back to you within 24 hours
        </TextTwo>
      </TextWrapper>
      <div>
        <ContactsWrapper href="tel:+233543201893">
          <Icon.Phone size={15} color="rgb(252, 113, 137)" />
          <ContactText>+251 934425462</ContactText>
        </ContactsWrapper>

        <ContactsWrapper href="mailto:aljay3334@gmail.com">
          <Icon.Mail size={15} color="rgb(252, 113, 137)" />
          <ContactText>@gmail.com</ContactText>
        </ContactsWrapper>
      </div>

      <div>
        <BigCircle />
      </div>

      <SocialsWrapper>
        <SocialIconWrapper href="https://www.facebook.com/profile.php?id=100021937291259">
          <Icon.Facebook color="#fff" size={20} />
        </SocialIconWrapper>
        <SocialIconWrapper href="https://www.instagram.com/_allenjones/">
          <Icon.Instagram color="#fff" size={20} />
        </SocialIconWrapper>
        <SocialIconWrapper href="https://www.linkedin.com/in/allen-jones-b799b7171/">
          <Icon.Linkedin color="#fff" size={20} />
        </SocialIconWrapper>
      </SocialsWrapper>
    </DetailsBarWrapper>
  );
};

// InputSide Component
const InputSide = () => {
  return (
    <InputSideWrapper>
      <InputWrapper>
        <p>Name</p>
        <Input type="text" placeholder="Allen Jones" />
      </InputWrapper>
      <InputWrapper>
        <p>Email</p>
        <Input type="email" placeholder="@gmail.com" />
      </InputWrapper>
      <InputWrapper>
        <p>Phone</p>
        <Input type="number" placeholder="+251" />
      </InputWrapper>
      <InputWrapper>
        <p>Message</p>
        <MessageInput placeholder="Write your message" />
      </InputWrapper>
      <SubMitButton type="submit" value="Send Message" />
    </InputSideWrapper>
  );
};

export { DetailsBar, InputSide };
