import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors, FontWeights } from "../../shared/DesignTokens";

export const ButtonPrimaryDefault = styled(Link) `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    width: 145px;
    height: 52px;
    background: linear-gradient(104.42deg, #4745D0 0%, #2A27C9 60.23%);
    box-shadow: inset -4px -4px 4px rgba(0, 0, 0, 0.1), inset 4px 4px 4px rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    color: ${Colors.WHITE};
    font-weight: ${FontWeights.BOLD};
    cursor: pointer;
    text-decoration: none;

    &:hover {
        background: linear-gradient(104.42deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 60.23%), linear-gradient(104.42deg, #4745D0 0%, #2A27C9 60.23%);
        box-shadow: inset -4px -4px 4px rgba(0, 0, 0, 0.1), inset 4px 4px 4px rgba(255, 255, 255, 0.1);
    }

    &:active {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(104.42deg, #4745D0 0%, #2A27C9 60.23%);
        box-shadow: inset -4px -4px 4px rgba(0, 0, 0, 0.1), inset 4px 4px 4px rgba(255, 255, 255, 0.1);
    }
`;