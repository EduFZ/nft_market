import styled from "styled-components";
import { Colors, FontFamilies, FontSizes, FontWeights } from "../../shared/DesignTokens";
import React from "react";
import { Headline6 } from "../Descriptions/Headline6";
import imgTimer from "./../../assets/icons/Timer.png"

const Wrapper = styled.div`
    width: 448px;
    height: 767px;
    border: 1px solid ${Colors.WHITE_DARK_90};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 24px;
`;

const ImageCard = styled.div`
    width: 400px;
    height: 520px;
    background-image: url('${(props) => props.src}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 20px;
`;

const DivDescriprion = styled.div`
    width: 100%;
    height: 50px;
    margin: 24px 0;
    display flex;
    justify-content: space-between;
    align-items: center;
    // border: 1px solid white;
`;

const Description = styled.span`
    width: 276px;
    height: 100%;
`;

const NftValue = styled.div`
    height: 36px;
    font-size: ${FontSizes.HEADLINE_7};
    font-weight: ${FontWeights.BOLD};
    border-radius: 4px;
    padding: 8px 14px;
    background-color: ${Colors.PRIMARY_PURPLE_LIGHT_15};
    color: ${Colors.PRIMARY_PURPLE_LIGHT_100};
`;

const DivTime = styled.div`
    width: 100%;
    height: 21px;
    display: flex;
    align-items: center;
`;

const ImgTimer = styled.attrs({ src: imgTimer, alt:'Timer'})`
    width: 14.22px;
    height: 16px;
`;

const Timer = styled.span`
    font-family: ${FontFamilies.OVERLINE};
    font-size: ${FontSizes.BODY_NORMAL};
    font-weight: ${FontWeights.REGULAR};
`;





export function Cards({src, descr, nft, timer}) {
    return(
        <>
            <Wrapper>
                <ImageCard src={src} />

                <DivDescriprion>
                    <Description>
                        <Headline6>{descr}</Headline6>
                    </Description>

                    <NftValue>{nft}</NftValue>
                </DivDescriprion>

                <DivTime>
                    <ImgTimer />
                    <Timer>{timer}</Timer>
                </DivTime>

            </Wrapper>
        </>
    );
}