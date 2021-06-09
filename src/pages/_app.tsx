import { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import Header from '../components/Header';
import { StylesProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const app = ({ Component, pageProps }: AppProps) => (
  <StylesProvider injectFirst>
    <GlobalStyle />
    <Header />
    <Container>
      <Component {...pageProps} />
    </Container>
    <div id="root-modal" />
  </StylesProvider>
);

export default app;
