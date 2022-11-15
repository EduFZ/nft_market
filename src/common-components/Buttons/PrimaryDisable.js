import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors, FontWeights } from "../../shared/DesignTokens";

export const ButtonPrimaryDisable = styled(Link) `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    width: 145px;
    height: 52px;
    background: linear-gradient(104.42deg, rgba(71, 69, 208, 0.25) 0%, rgba(42, 39, 201, 0.25) 60.23%);
    box-shadow: inset -4px -4px 4px rgba(0, 0, 0, 0.1), inset 4px 4px 4px rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    color: ${Colors.WHITE};
    font-weight: ${FontWeights.BOLD};
    cursor: pointer;
    text-decoration: none;

`;