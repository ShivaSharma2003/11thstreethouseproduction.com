import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from './store/store';
import { GlobalStyle, theme } from './styles/GlobalStyle';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { FilmProductionPage } from './pages/FilmProductionPage';
import { CreativeDirectionPage } from './pages/CreativeDirectionPage';
import { ContentCreationPage } from './pages/ContentCreationPage';
import { PostProductionPage } from './pages/PostProductionPage';
import { ConsultingPage } from './pages/ConsultingPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { CookiePage } from './pages/CookiePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { LocationManagementDetailPage } from './pages/LocationManagementDetailPage';
import { LineProductionDetailPage } from './pages/LineProductionDetailPage';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <div className='gap-16 flex flex-col '>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/services/location-management" element={<LocationManagementDetailPage />} />
            <Route path="/services/line-production" element={<LineProductionDetailPage />} />
            <Route path="/services/film-production" element={<FilmProductionPage />} />
            <Route path="/services/creative-direction" element={<CreativeDirectionPage />} />
            <Route path="/services/content-creation" element={<ContentCreationPage />} />
            <Route path="/services/post-production" element={<PostProductionPage />} />
            <Route path="/services/consulting" element={<ConsultingPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/cookies" element={<CookiePage />} />
          </Routes>
          <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
