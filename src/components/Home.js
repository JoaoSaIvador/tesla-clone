import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import { selectData } from '../features/data/dataSlice';
import { useSelector } from 'react-redux';

function Home() {
    const data = useSelector(selectData);

    return (
        <Container>
            {data.map(data => {
                return <Section
                    title={data.title}
                    description={data.description}
                    image={data.image}
                    leftBtnText={data.leftBtnText}
                    rightBtnText={data.rightBtnText}
                    key={data.id}
                />
            })}

        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`