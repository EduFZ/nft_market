import styled from 'styled-components';
import { Colors } from "../shared/DesignTokens";
import { Header } from "./../common-components/Header/Header";
import BgImg from "./../assets/images/Background.png";
import NftImg from "./../assets/images/Squares.png";
import { Descriptions } from "./../common-components/Descriptions/Descriptions"
import { Display } from "./../common-components/Descriptions/Display";
import ImgLogo1 from "./../assets/icons/Logo1.png";
import ImgLogo2 from "./../assets/icons/Logo2.png";
import LogoTypes from "./../assets/icons/Logotypes.png";
import { HeadlineFour } from "./../common-components/Descriptions/HeadlineFour";

const Body = styled.div`
    width: 100%;
    height: 2117px;
    background-color: ${Colors.WHITE_DARK_100};
    background-image: url(${BgImg});
    background-repeat: no-repeat;
`;

const BodyTitle = styled.div `
    width: 100%;
    margin: 165px 0 0 0;
    display: flex;
    justify-content: center;
`;

const Section = styled.div`
    width: 100%;
    height: 670px;
    background-image: url(${NftImg});
    background-repeat: no-repeat;
`;

const Title = styled.div`
    width: 100%:
    height: 219px;
    margin: 34px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TitleBoxOne = styled.span`
    width: 837px;
    height: 120px;
    display: flex;
    align-items: center;
`;

const TitleBoxTwo = styled.span`
    width: 837px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: end;
`;

const TextTwo = styled.span`
    width: 100%;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 37px 0 0 0;
`;

const Img1 = styled.img.attrs({src: ImgLogo1, alt: 'Logotipo NFt Market'})`
    width: 40px;
    height: 91px;
`;

const Img2 = styled.img.attrs({src: ImgLogo2, alt: 'Logotipo NFt Market'})`
    width: 62px;
    height: 62px;
`;

const DivLogos = styled.div`
    width: 100%;
    height: 45px;
    margin: 50px 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Logos = styled.img.attrs({src: LogoTypes, alt: 'Logomarcas'})`
    height: 45px;
`;

const TitleTwo = styled.span`
    width: 100%;
    height: 45px;
    margin: 65px 0 72px 0;
    display: flex;
    justify-content: center;
    align-items: 45px;
`;

const DivCards = styled.div`
    width: 100%;
    height: 767px;
    display: flex;
`;




export function Home() {
    return (
        <div>
            <Body>
                <Header />
                <BodyTitle>
                    <Descriptions>NON FUNGIBLE TOKENS</Descriptions>
                </BodyTitle>
                <Section>
                    <Title>
                        <TitleBoxOne>
                            <Display>A new NFT</Display>
                            <Img1 />
                        </TitleBoxOne>

                        <TitleBoxTwo>
                            <Img2 />
                            <Display>Experience</Display>
                        </TitleBoxTwo>
                    </Title>

                    <TextTwo>
                        <Descriptions>Discover, collect and sell</Descriptions>
                    </TextTwo>

                </Section>

                <DivLogos>
                    <Logos />
                </DivLogos>

                <TitleTwo>
                    <HeadlineFour>Latest live auctions</HeadlineFour>
                </TitleTwo>

            </Body>
        </div>
    );
}