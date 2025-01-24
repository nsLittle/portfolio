import Link from 'next/link';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul className='navList'>
                    <li className='navItem'>
                        <Link href="/">Home</Link>
                    </li>
                    <li className='navItem'>
                        <Link href="/about">About</Link>
                    </li>
                    <li className='navItem'>
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li className='navItem'>
                        <Link href="/resume">Resume</Link>
                    </li>
                    <li className='navItem'>
                        <Link href="/contact">Contact Me</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;