import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <>
            <nav className="container-fluid bg-black text-white">
                <div className="row">
                    <div className="col p-3">
                        <Image src="/assets/images/logo.png" alt="Logo" width={50} height={50} />
                        <span class="ms-3 text-info">NEW YORK CITY</span> | <span>USA</span>
                    </div>
                    <div className="col p-3 text-end align-self-center">
                        <Link href="/" className="link">Home</Link>
                        <Link href="/points" className="link">Points of interest</Link>
                        <Link href="/map" className="link">Map</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}