import Header from './Header/header.jsx'
import Footer from './Footer/Footer.jsx'
import Card from './Card/Card.jsx';
import Button from './Button/Button.jsx';
import Student from './Student/Student.jsx';
import UserGreeting from './UserGreeting/UserGreeting.jsx';
import List from './List/List.jsx';
import Component from './Component/Component.jsx';

function App() {
      const fruits = [
        { id: 1, name: 'Mango', calories: 23 },
        { id: 2, name: 'Orange', calories: 12 },
        { id: 3, name: 'Banana', calories: 142 },
        { id: 4, name: 'Tomato?', calories: 15 },
        { id: 5, name: 'Pineapple', calories: 122 }];
      const vegetales = [
        { id: 1, name: 'Potato', calories: 32 },
        { id: 2, name: 'Garlic', calories: 21 },
        { id: 3, name: 'Onion', calories: 122 },
        { id: 4, name: 'Tomato?', calories: 15 }];        
  return(
    <>
      <Header></Header>
      <Card></Card>
      <Button></Button>
      <Student name="Alejandro" age={new Date().getFullYear()-2001} isStudent={true} ></Student>
      <UserGreeting isLogged={true} username="Crawsectus"></UserGreeting>
      {fruits.length>0 && <List items={fruits} category="Frutas"></List>}
      {vegetales.length>0 && <List items={vegetales} category="Vegetales"></List>}
      <Component></Component>
      <Footer></Footer>
    </>

  );
}

export default App
