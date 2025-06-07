import Header from './Header/header.jsx'
import Footer from './Footer/Footer.jsx'
import Card from './Card/Card.jsx';
import Button from './Button/Button.jsx';
import Student from './Student/Student.jsx';

function App() {
  return(
    <>
      <Header></Header>
      <Card></Card>
      <Button></Button>
      <Student name="Alejandro" age={new Date().getFullYear()-2001} isStudent={true} ></Student>
      <Footer></Footer>
    </>

  );
}

export default App
