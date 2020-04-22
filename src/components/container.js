import React from 'react'
import styled from "styled-components";

const Container = ({ children, width }) => {
    return (
        <Wrap width={width}>{children}</Wrap>
    );
};

Container.defaultProps = {
    width: "1400px"
};

const Wrap = styled.div`
    margin: 0 auto;
    width: 95%;
    max-width: ${props => props.width};
`

export default Container;