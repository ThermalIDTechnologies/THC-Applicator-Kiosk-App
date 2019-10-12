import styled from "styled-components"
import { Link } from "gatsby"


export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "video video video mainImg"
    "video video video pdf"
    "video video video form"
    "heading heading heading heading"
    "img1 img2 img3 home";
  /* background-color: #2196f3; */
  align-items: flex-end;
`
export const VidCntr = styled.div`
  grid-area: video;
  width: 685px;
  position: relative;

  ::before,
  ::after {
    z-index: -1;
    position: absolute;
    content: "";
    bottom: 15px;
    left: 10px;
    width: 50%;
    top: 80%;
    max-width: 300px;
    background: #777;
    -webkit-box-shadow: 0 15px 10px #777;
    -moz-box-shadow: 0 15px 10px #777;
    box-shadow: 0 15px 10px #777;
    -webkit-transform: rotate(-3deg);
    -moz-transform: rotate(-3deg);
    -o-transform: rotate(-3deg);
    -ms-transform: rotate(-3deg);
    transform: rotate(-3deg);
  }

  ::after {
    -webkit-transform: rotate(3deg);
    -moz-transform: rotate(3deg);
    -o-transform: rotate(3deg);
    -ms-transform: rotate(3deg);
    transform: rotate(3deg);
    right: 10px;
    left: auto;
  }
`

export const MainImgCntr = styled.div`
  width: 210px;
  margin-bottom: 1rem;
  grid-area: mainImg;
  justify-self: center;
`

export const FooterTitle = styled.div`
  grid-area: heading;
  padding-top: .5rem;

  h3 {
    margin: 0;
    color: #4A7729;
  }
`

export const Img1Cntr = styled.div`
  width: 175px;
  margin-bottom: .5rem;
  grid-area: img1;
  justify-self: center;
`

export const Img2Cntr = styled.div`
  width: 140px;
  margin-bottom: .5rem;
  grid-area: img2;
  justify-self: center;
`

export const Img3Cntr = styled.div`
  width: 150px;
  margin-bottom: .5rem;
  grid-area: img3;
  justify-self: center;
`

export const StyledLink = styled(Link)`
  justify-self: center;
  text-decoration: none;
  color: #6D6D6D;
  font-weight: 700;
  text-align: center;
`

export const Form = styled.form`
  display: inline-flex;
`

export const Input = styled.input`
  border: none;
`

export const Button = styled.button`
  background-color: #39B54A;
  border: none;
`
