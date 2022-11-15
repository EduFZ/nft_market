import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors, FontWeights } from "../../shared/DesignTokens";

export const ButtonSecondaryDefault = styled(Link) `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    width: 145px;
    height: 52px;
    border: 2px solid ${Colors.WHITE_GRAY_100};
    border-radius: 12px;
    color: ${Colors.WHITE_GRAY_100};
    font-weight: ${FontWeights.BOLD};
    cursor: pointer;
    text-decoration: none;

    &:hover {
        border: 2px solid ${Colors.WHITE_DARK_100};
    }

    &:active {
        border: 2px solid ${Colors.WHITE_DARK_100};
        color: ${Colors.WHITE_DARK_100};
    }
`;