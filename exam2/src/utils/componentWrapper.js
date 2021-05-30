import Logo from '../features/Main/Logo/Logo';
import Footer from '../features/Footer/Footer';

const componentWrapper = (Component, css) => {
    return (
        <>
            <Logo css={css}></Logo>
            <Component></Component>
            <Footer></Footer>
        </>
    )
}

export default componentWrapper;