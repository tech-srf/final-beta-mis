import styled, { css } from "styled-components";

const btn = (light, dark) => css`
    white-space: nowrap;
    display: inline-block;
    border-radius: 5px;
    padding: 5px 15px;
    font-size: 16px;
    color: white;
    &:visited {
        color: white;
}
    background-image: linear-gradient(${light}, ${dark});
    border: 1px solid ${dark};
    &:hover {
    background-image: linear-gradient(${light}, ${dark});
    &[disabled] {
    background-image: linear-gradient(${light}, ${dark});
    }
}
    &:visited {
        color: black;
    }
    &[disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

const btnDefault = css`
    ${btn("#ffffff", "#d5d5d5")} color: #555;
`;

const btnPrimary = btn( "#89d6a6", "#018934" );

export default styled.div`
    font-family: sans-serif;

    h1 {
        text-align: center;
        color: #222;
    }

    h2 {
        text-align: center;
        color: #222;
    }

    h5 {
        text-align: left;
        padding-left: 18px;
        color: #241d1d;
    }

    & > div {
        text-align: center;
    }

    a {
        display: block;
        text-align: center;
        color: #222;
    }

form {
    // max-width: 100%;
    margin: 20px auto;
    border: 1px solid #ccc;
    padding: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 3px;

    & > div {
        display: flex;
        flex-flow: row nowrap;
        line-height: 2em;
        margin: 5px;
        & > label {
            color: #333;
            width: 110px;
            font-size: 1em;
            line-height: 32px;
        }
        & > input,
        & > select,
        & > textarea {
            flex: 1;
            padding: 5px 5px;
            font-size: 1em;
            margin-bottom: 10px;
            margin-left: 15px;
            margin-right: 15px;
            border: 1px solid #ccc;
            border-radius: 3px;
        }
        & > input[type="checkbox"] {
            margin-top: 7px;
        }
        & > div {
            margin-left: 16px;
            & > label {
            display: block;
            & > input {
                margin-right: 3px;
            }
            }
        }
        }
        & > .buttons {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        margin-top: 15px;
        }
        button {
        margin: 0 10px;
        &[type="submit"] {
            ${btnPrimary};
        }
        &[type="button"] {
            ${btnDefault};
        }
        }
        pre {
        margin-top: 15px;
        border: 1px solid #ccc;
        background: rgba(203,219,209);
        box-shadow: inset 1px 1px 3px rgba(121,131,125);
        padding: 20px;
        }
    }
`;
