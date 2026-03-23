import { Footer } from "./Footer"
import { Header } from "./Header"

interface LayoutProps {
    children: React.ReactNode
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <div className="layout">
            <Header />
            <main className="layout__content">{children}</main>
            <Footer />
        </div>
    )
}