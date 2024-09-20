import Head from "next/head";
import Link from "next/link";

export default function Layout({children, home}){
    return(
        <div>
            <Head>
                <title>Basic Next.js Ap</title>
            </Head>
            <header>
                <nav>
                    <a href="#">visit</a>
                </nav>
            </header>
            <main>
                {children}
            </main>
            {!home && (
                <Link href="/" className = "btn btn-primary mt-3 ">
                    Back to Home
                </Link>
            )

            }
            <footer>
                <p>This is footer</p>
            </footer>
        </div>
    );
}