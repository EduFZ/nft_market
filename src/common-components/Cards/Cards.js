import styled from "styled-components";
import { Colors } from "../../shared/DesignTokens";

const Wrapper = styled.div`
    width: 448px;
    height: 767px;
    border: 1px solid ${Colors.WHITE_DARK_90};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
`;

const ImageCard = styled.div`
    width: 400px;
    height: 520px;
    nackground-image: url('${(props) => props.src}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;


export function Cards(props) {
    return(
        <>
            <Wrapper>
                <ImageCard>{props.src}</ImageCard>
            </Wrapper>
        </>
    );
}