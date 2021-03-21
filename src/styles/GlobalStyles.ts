import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --white: #ffffff;
        --light-white: #cccccc;
        --yellow: #f8d739;
        --red: #752121;
        --light-red: #ba9090;
        --black: #000000;
        --light-black: #181818;
        --green: #2a5c44;
        --light-green: #7f9d8e;
    }

    body {
        background: var(--black);
        color: var(--white);
        -webkit-font-smoothing: antialiased;
    }

    body,
    input,
    textarea,
    select,
    button {
        font-family: 'Montserrat', sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    /*MEDIA SCREEN*/
    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    /*MEDIA SCREEN*/
    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }
`;
