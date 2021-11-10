import Nav from '@/layouts/nav';
import {ThemeProvider} from 'next-themes';
import '../styles/globals.css';
import '../styles/tailwind.css';

function MyApp({Component, pageProps}) {
    return (
        <>
            <ThemeProvider enableSystem={true} attribute="class">
                <Nav />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default MyApp;
