import styled from 'styled-components';
import { Button, IconButton } from '@material-ui/core';
import { ThemeStyle } from '@cx-styled/react-common';

export const CxStyButton = styled(Button)`
    text-transform: none;
    font-weight: 700;

    &:disabled {
        color: ${({ theme }: { theme: ThemeStyle; color: string }) =>
            theme.color.tertiary}; // todo: color-calc
    }
`;

export const CxStyIconButton = styled(IconButton)`
    color: ${({ theme }: { theme: ThemeStyle }) => theme.color.reversePrimary};
`;

export const CxStyActionButton = styled(CxStyButton).attrs(() => ({
    variant: 'contained',
}))`
    background-color: ${({ theme }: { theme: ThemeStyle; color: string }) => theme.color.secondary};
    color: #ffffff;
    &:hover {
        background-color: ${({ theme }: { theme: ThemeStyle }) => theme.color.secondary};
    }
`;

export const CxStyCancelButton = styled(({ ...props }) => (
    <CxStyButton variant="outlined" {...props} />
))`
    color: ${({ theme }: { theme: ThemeStyle }) => theme.color.reversePrimary};
    border-color: ${({ theme }: { theme: ThemeStyle }) => theme.color.reversePrimary};
`;

export const CxStyInteractionButton = styled(({ ...props }) => (
    <CxStyButton variant="outlined" {...props} />
))`
    background-color: transparent;
    color: ${({ theme, interacted }: { theme: ThemeStyle; interacted: boolean }) =>
        interacted ? theme.color.secondary : theme.color.reversePrimary};
    border-color: ${({ theme, hasBorder }: { theme: ThemeStyle; hasBorder: boolean }) =>
        hasBorder ? theme.color.secondary : 'transparent'};
`;
