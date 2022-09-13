import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const data = [
    {
        id: 0,
        title: "Model S",
        description: "Order Online for Touchless Delivery",
        backgroundImg: "model-s.jpg",
        leftBtnText: "Custom Order",
        rightBtnText: "Existing Inventory",
    },
    {
        id: 1,
        title: "Model Y",
        description: "Order Online for Touchless Delivery",
        backgroundImg: "model-y.jpg",
        leftBtnText: "Custom Order",
        rightBtnText: "Existing Inventory",
    },
    {
        id: 2,
        title: "Model 3",
        description: "Order Online for Touchless Delivery",
        backgroundImg: "model-3.jpg",
        leftBtnText: "Custom Order",
        rightBtnText: "Existing Inventory",
    },
    {
        id: 3,
        title: "Model X",
        description: "Order Online for Touchless Delivery",
        backgroundImg: "model-x.jpg",
        leftBtnText: "Custom Order",
        rightBtnText: "Existing Inventory",
    },
    {
        id: 4,
        title: "Lowest Cost Solar Panels in America",
        description: "Money-back guarantee",
        backgroundImg: "solar-panel.jpg",
        leftBtnText: "Order Now",
        rightBtnText: "Learn More",
    },
    {
        id: 5,
        title: "Solar for New Roofs",
        description: "Solar Roof Costs Less Than a New Roof Plus Solar Panels",
        backgroundImg: "solar-roof.jpg",
        leftBtnText: "Order Now",
        rightBtnText: "Learn More",
    },
    {
        id: 6,
        title: "Accessories",
        backgroundImg: "accessories.jpg",
        leftBtnText: "Shop Now",
    },
]

function Home() {
    return (
        <Container>
            {data.map(data => {
                return <Section
                    title={data.title}
                    description={data.description}
                    backgroundImg={data.backgroundImg}
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