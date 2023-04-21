import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --text-color: #8F3D88;
        --text-color-white: #ffff;
        --dark-bg: #222234;
        --red-bg: #FF0043;
        --blue-bg: #6969B5;
        --app-background: #ffff;
        --app-font-family: system-ui;
        --app-font-weight: 700;
        --font-size-xs: 12px;
        --font-size-sm: 15px;
        --font-size-md: 18px;
        --font-size-lg: 21px;
        --padding-xs: 12px;
        --padding-sm: 15px;
        --padding-md: 18px;
        --padding-lg: 21px;
        --margin-xs: 5px;
        --margin-sm: 15px;
        --margin-md: 18px;
        --margin-lg: 21px;
        --border-radius-sm: 15px;
        --border-radius-md: 18px;
        --border-radius-lg: 21px;
        --full-width: 100%;
        --text-align-center: center;
        --text-align-left: left;
        --text-align-right: right;
    }
`;
export const AppContainer = styled.div`
    width: 300px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--app-background);
    font-family: var(--app-font-family);
    font-weight: var(--app-font-weight)
`;
export const RoundedButton = styled.button`
    margin: var(${props => props.margin ? `--margin-${props.margin}` : `--margin-xs`}) 0;
    background: var(${props => props.background ? `--${props.background}-bg` : `--blue-bg`});
    width: var(--full-width);
    padding: var(--padding-sm);
    border-radius: var(--border-radius-sm);
    color: var(--text-color-white);
    font-size: var(--font-size-md);
    font-family: system-ui;
    border: none;
    cursor: pointer;
`;

export const Heading = styled.p`
    font-size: var(${props => props.size ? `--font-size-${props.size}` : `--font-size-sm`});
    margin: var(${props => props.margin ? `--margin-${props.margin}` : `--margin-xs`}) 0;
    text-align: var(${props => props.align ? `--text-align-${props.align}` : `--text-align-center`});
`

export const SimpleFlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: var(--full-width)
`

export const DarkRoundedContainer = styled.div`
    margin: var(${props => props.margin ? `--margin-${props.margin}` : `--margin-xs`}) 0;
    width: var(--full-width);
    border-radius: var(--border-radius-md);
    background: var(--dark-bg);
    padding: var(--padding-md);
    color: var(--text-color-white);
    font-size:  var(${props => props.size ? `--font-size-${props.size}` : `--font-size-sm`});
    text-align: center;
    overflow: hidden;
    box-sizing: border-box;
`

export const HeadingWithUnderline = styled.p`
    font-size: var(${props => props.size ? `--font-size-${props.size}` : `--font-size-sm`});
    margin: var(${props => props.margin ? `--margin-${props.margin}` : `--margin-xs`}) 0;
    text-align: var(${props => props.align ? `--text-align-${props.align}` : `--text-align-center`});
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;
`

export const CustomInput = styled.input`
    margin: var(${props => props.margin ? `--margin-${props.margin}` : `--margin-xs`}) 0;
    border-radius: var(--border-radius-md);
    padding: var(--padding-xs) var(--padding-sm);
    font-size: var(--font-size-md);
`

export const CustomLink = styled(Link)`
    display: contents;
`