import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors, FontWeights } from "../../shared/DesignTokens";
import { ButtonPrimaryDefault } from "../Buttons/PrimaryDefault";
import { ButtonSecondaryDefault } from "../Buttons/SecondaryDefault";
import img from "./../../assets/icons/LogoMain.png";

const Wrapper = styled.header`
    width: 100%;
    height: 150px;
    background-color: rgb(0, 0, 0, 0);
    padding: 0px 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Img = styled.img.attrs({ src: img, alt: 'representação de pessoas pcd' })`
    width: 213px;
    height: 34px;
`;

const Menu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 64px;
`;

const Nav = styled(Link)`
    font-size: 16px;
    color: ${Colors.WHITE_GRAY_100};
    font-weight: ${FontWeights.BOLD};
    cursor: pointer;
    text-decoration: none;
`;

const Btn = styled.div `
    width: 306px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;



export function Header() {
    return (
        <>
            <Wrapper>
                <Img />
                <Menu>
                    <Nav href="#">Auctions</Nav>
                    <Nav href="#">Roadmap</Nav>
                    <Nav href="#">Discover</Nav>
                    <Nav href="#">Community</Nav>
                </Menu>
                <Btn>
                    <ButtonSecondaryDefault>Contact</ButtonSecondaryDefault>
                    <ButtonPrimaryDefault>My account</ButtonPrimaryDefault>
                </Btn>
                
            </Wrapper>
        </>
    );
}