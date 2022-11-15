import styled from "styled-components";
import { Colors, FontFamilies, FontSizes, FontWeights } from "../../shared/DesignTokens";

export const Display = styled.span`
    font-family: ${FontFamilies.PRIMARY};
    font-size: ${FontSizes.DISPLAY};
    font-weight: ${FontWeights.BOLD};
    color: ${Colors.WHITE};
`;