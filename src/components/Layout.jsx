export default function Layout(props) {

    const {children} = props

    const header = (
        <header>
            <div>
                <h1 className="text-gradient">CAFFIEND</h1>
                <p>For Coffeee Insatiates</p>
            </div>
            <button>
                <p>Sign Up free</p>
                <i className="fa-solid fa-mug-hot"></i>
            </button>
        </header>
    )
    const footer = (
        <footer>
            <p><span className="text-gradient">Caffiend</span> was made by <a target="_blank" href="https://github.com/Arbiter09">Jas!</a>
            <br />Check out my <a target="_blank" href="https://www.linkedin.com/in/jas-shah-709854233/">LinkedIn</a>
            <br />Check this project out on <a target="_blank" href="https://github.com/Arbiter09/Caffiend">Github!</a>
            </p>
        </footer>
    )

    return (
        <>
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}