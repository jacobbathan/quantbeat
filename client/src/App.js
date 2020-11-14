import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginRegister from './pages/login-register/login-register.component';
import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.componet';
import CompanyView from './pages/company-view/companyView.component';
import NewsView from './pages/news/newsView.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/login" component={LoginRegister} />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/company" component={CompanyView} />
        <Route exact path="/news" component={NewsView} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
