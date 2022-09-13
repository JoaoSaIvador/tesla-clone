import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import { selectData } from '../features/data/dataSlice';
import { useSelector } from 'react-redux';
import { cardActionAreaClasses } from '@mui/material';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const data = useSelector(selectData);

    return (
        <Container>
            <a>
                <img src="/images/tesla.svg" alt="" />
            </a>
            <Menu>
                {data && data.map(data => {
                    return <a key={data.id} href='#'>{data.title}</a>
                })}
            </Menu>
            <RightMenu>
                <a href='#'>Shop</a>
                <a href='#'>Account</a>
                <a href='#' onClick={() => { setBurgerStatus(true) }}>Menu</a>
            </RightMenu>
            <BurgerNav burgerStatus={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => { setBurgerStatus(false) }} />
                </CloseWrapper>
                {data && data.map(data => {
                    return <li key={data.id}><a href='#'>{data.title}</a></li>
                })}
                <li><a href='#'>Existing Inventory</a></li>
                <li><a href='#'>Used Inventory</a></li>
                <li><a href='#'>Trade-in</a></li>
                <li><a href='#'>Test Drive</a></li>
                <li><a href='#'>Insurance</a></li>
                <li><a href='#'>Powerwall</a></li>
                <li><a href='#'>Commercial Energy</a></li>
                <li><a href='#'>Utilities</a></li>
                <li><a href='#'>Charging</a></li>
                <li><a href='#'>Find Us</a></li>
                <li><a href='#'>Support</a></li>
                <li><a href='#'>Investor Relations</a></li>
                <li><a href='#'>Shop</a></li>
                <li><a href='#'>Account</a></li>
                <li><a href='#'>Cybertruck</a></li>
                <li><a href='#'>Roadster</a></li>
                <li><a href='#'>Semi</a></li>
                <li><a href='#'>News</a></li>

            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    width: 100vw;
    min-height: 60px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    z-index: 1;

    img {
        width:120px;
        height: auto;
    }
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media(max-width: 768px) {
        display:none;
    }
`

const RightMenu = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 10px;

    a {
        font-weight: 600;
        padding: 10px;
        flex-wrap: nowrap;
        margin: 0 5px;
    }
`

const BurgerNav = styled.div`
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    list-style: none;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #393c41;
    transform: ${props => props.burgerStatus ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in-out;

    li {
        width: 100%;
        padding: 12px 20px;
        display: flex;
        align-items: flex-start;

        a {
            font-weight: 600;
            font-size: 15px;
        }
    }
`

const CloseWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 30px;
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`