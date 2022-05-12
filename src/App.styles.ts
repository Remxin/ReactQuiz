import styled, { createGlobalStyle } from "styled-components";
//@ts-ignore
// import BGImage from "./images/sea_1920.jpg"

// export const GlobalStyle = createGlobalStyle`
// html {
//     height: 100%;
// }

// body {
//     background-image: url(${BGImage});
//     background-size: cover;
//     margin: 0;
//     padding: 0 20px;
//     display: flex;
//     justify-content: center;
//     z-index: -2;

// }

// * {
//     box-sizing: border-box;
//     font-family: "Catamaran", sans-serif;
// }
// `;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
z-index: 10;

> p {
    color: #fff;
}

.score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
}

h1 {
    font-family: "Fascinate Inline", "Haettenschweiler", "Arial Narrow Bold", "sans-serif";
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    --webkit-background-clip: text;
    --webkit-text-fill-color: transparent;
    --moz-background-clip: text;
    --moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
    color: transparent;
}

.start, .next {
    height: 40px;
    margin: 20px 0 ;
    padding: 0 40px;
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}

.start {
    max-width: 200px;
}
`