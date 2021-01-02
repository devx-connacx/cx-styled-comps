import styled, { css } from 'styled-components';
import { ThemeStyle } from '@cx-styled/react-common';

const commonDivCss = css`
    display: flex;
    background: ${({ theme }: { theme: ThemeStyle }) => theme.color.primary};
    color: ${({ theme }: { theme: ThemeStyle }) => theme.color.reversePrimary};
`;

export const CxStyMainDiv = styled.div`
    ${commonDivCss}
    flex-direction: column;
`;

export const CxStyDiv = styled.div`
    ${commonDivCss}
    align-items: center;
    & > * {
        margin: ${(props) => (props.spacing ? `${props.spacing}px` : `0px`)};
    }
`;

const justifyType = (props, type) => {
    let spacingType = 'flex-start';
    switch (type === 'justify' ? props.justifyType : props.alignType) {
        case 'between':
            spacingType = 'space-between';
            break;
        case 'center':
            spacingType = 'center';
            break;
        case 'evenly':
            spacingType = 'space-evenly';
            break;
        case 'end':
            spacingType = 'flex-end';
            break;
        default:
            spacingType = 'flex-start';
            break;
    }
    return spacingType;
};

export const CxStyHDivSpace: React.FC<{
    justifyType?: string;
    alignType?: string;
}> = styled.div`
    ${commonDivCss}
    margin: 5px;
    align-items: ${(props) => justifyType(props, 'align')};
    justify-content: ${(props) => justifyType(props, 'justify')};
    flex: 1;
`;

export const CxStyVDivSpace: React.FC<{
    justifyType?: string;
    alignType?: string;
}> = styled.div`
    ${commonDivCss}
    flex-direction: column;
    align-items: ${(props) => justifyType(props, 'align')};
    justify-content: ${(props) => justifyType(props, 'justify')};
    & > * {
        margin: ${(props) => (props.spacing ? `${props.spacing}px` : `3px`)};
    }
`;

export const CxStyFormDiv = styled.div`
    margin: 10px;
`;
