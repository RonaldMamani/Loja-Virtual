"use client"

import Link from 'next/link'
import {Navbar, Nav} from 'reactstrap'

const Header = () => {
    return (
        <Navbar container="md" color='dark' dark>
            <Link className='navbar-brand' href="/">Inicio</Link>
            <Nav className='flex-row gap-3' navbar>
                <Link className='nav-link me-2' href="/products">Produtos</Link>
                <Link className='nav-link' href="/cart">Carrinho</Link>
            </Nav>
        </Navbar>
    )
}

export default Header