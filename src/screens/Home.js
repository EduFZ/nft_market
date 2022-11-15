import styled from 'styled-components';
import { Colors } from "../shared/DesignTokens";
import { Header } from "./../common-components/Header/Header";
import BgImg from "./../assets/images/Background.png";
import NftImg from "./../assets/images/Squares.png";
import { Descriptions } from "./../common-components/Descriptions/Descriptions"

const Body = styled.div`
    width: 100%;
    height: 2117px;
    background-color: ${Colors.WHITE_DARK_100};
    background-image: url(${BgImg});
    background-repeat: no-repeat;
`;

const BodyTitle = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Section = styled.div`
    width: 100%;
    height: 1110px;
    background-image: url(${NftImg});
    background-repeat: no-repeat;
    border: 2px solid white;
`;

// const Squares = styled.img.attrs({src: NftImg, alt: 'Logotipo NFt Market'})`
//     width: 1851px;
//     height: 608px;
//     margin-top: 200px;
// `;

export function Home() {
    return (
        <div>
            <Body>
                <Header />
                <BodyTitle>
                    <Descriptions>NON FUNGIBLE TOKENS</Descriptions>
                </BodyTitle>
                <Section>

                </Section>
            </Body>
        </div>
    );
}