import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Header = () => {
    return (
        <HeaderContainer>
            <h2>Todo List</h2>
            <button>Add</button>
        </HeaderContainer>
    )
}

export default Header
