import './Header.css';
export default function Header() {
    return (
        <header className="w-full flex justify-center items-center flex-col" >
            <nav>
                <div>
                    <a href="https://github.com/Aliabdo6" target="_blank">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/aliabdo6/" target="_blank">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
                <ul className="flex justify-center items-center flex-col md:flex-row">
                    <li>
                        <a href="#projects" className="">Projects</a>
                        <a href="#contact" className="">Contact Me</a>
                    </li>
                </ul>
            </nav>

        </header>
    )
}