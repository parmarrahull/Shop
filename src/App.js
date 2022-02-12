import { Route, Switch } from 'react-router-dom';
import HomeBanner from './Component/HomeBanner';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import AboutBanner from './Component/AboutBanner';
import ContactUs from './Component/ContactUs';
import ShopCategories from './Component/ShopCategories';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Switch>
        <Route exact path="/" component={HomeBanner} />
        <Route exact path="/about" component={AboutBanner} />
        <Route exact path="/shop" component={ShopCategories} />
        <Route exact path="/contact" component={ContactUs} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
