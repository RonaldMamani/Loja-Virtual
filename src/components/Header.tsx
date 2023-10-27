import Link from "next/link"
import { Navbar, Nav, Container } from "react-bootstrap"



const Header = () => {
    return (
        <>
            <Navbar expand="md" className="navbar bg-dark">
                <Container color="dark">
                    <Link href='/' className="navbar-brand text-light">
                        Inicio
                    </Link>
                    <Nav className="flex-row" navbar>
                        <Link href='/products' className="nav-link me-2 text-light">
                            Produtos
                        </Link>
                        <Link href='/cart' className="nav-link text-light">
                            Carrinho
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    
    )
}


export default Header