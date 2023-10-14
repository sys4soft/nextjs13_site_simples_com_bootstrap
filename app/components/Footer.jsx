export default function Footer() {
    return (
        <>
            <footer className="container-fluid bg-black text-white mt-auto">
                <div className="row">
                    <div className="col p-3 text-center">
                        {/* site name, copy symbol and current year */}
                        &copy; {new Date().getFullYear()} <span className="text-secondary">Website simples com NextJS 13 e Bootstrap</span>
                    </div>
                </div>
            </footer>
        </>
    )
}