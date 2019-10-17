import styled from "styled-components"
import { Link } from "gatsby"
// import AniLink from "gatsby-plugin-transition-link/AniLink";

export const HomeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "roll  wind"
    "fire  hero";     
  justify-content: space-evenly;
  justify-items: center;
  align-items: end;
  margin-top: 1rem;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const ApplicatorTitle = styled.h3`
  text-align: center;
  color: #4A7729;
  margin: 0;
  font-weight: 600;
  text-transform: uppercase;
`