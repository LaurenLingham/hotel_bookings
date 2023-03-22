import styled from "styled-components";

const Header = () => {
    return (
        <Heading>
            <h1>The Overlook Hotel</h1>
        </Heading>
    );
};

const Heading = styled.div`
    background-color: #783e38;
    text-align: center;
    color: rgb(243, 234, 234);
    margin: 0;
    margin-bottom: 16px;
    padding: 16px;
`;

export default Header;
