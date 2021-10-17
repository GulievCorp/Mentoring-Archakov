import { Nav, Navbar, Row, Col, Card } from 'react-bootstrap';
import React from 'react';
const obj = [
  {
    id: 1,
    text: 'На пионерской из за 5G теперь одни зомби',
    img: 'https://i.ytimg.com/vi/Ov6SwIZMqDs/maxresdefault.jpg',
  },
  {
    id: 2,
    text: 'В спортзалы теперь не пускают толстяков',
    img: 'https://i.ytimg.com/vi/KA4IWWbukpw/maxresdefault.jpg',
  },
  {
    id: 3,
    text: 'Новый альбом пошлой молли, фигня(',
    img: 'https://aif-s3.aif.ru/images/017/295/784dee66e30637cda288604d8e73ceb3.jpg',
  },
];

export default function App() {
  const { pathname } = window.location;

  return (
    <div className="App">
      <header>
        <h2>
          <a href="/">React Blog</a>
        </h2>
        <Nav variant="pills" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link eventKey="/home" to="/">
              Главная
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/home" to="/about">
              Обо мне
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/home" to="/profile">
              Профиль
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
      {pathname === '/' && (
        <Row xs={1} md={3} className="g-4">
          <Col>
            {obj.map((item) => {
              return (
                <Card key={item.id}>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Title>
                      <a href={'/post/' + item.id}>Card title</a>
                    </Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
        </Row>
      )}
      {pathname === '/post/' + pathname.replace(/\D+/g, '') && (
        <Card>
          <Card.Img variant="top" src={obj[pathname.replace(/\D+/g, '') - 1].img} />
          <Card.Body>{obj[pathname.replace(/\D+/g, '') - 1].text}</Card.Body>
        </Card>
      )}
      {pathname === '/about' && (
        <Card>
          <Card.Body>Это мой личный сайт!</Card.Body>
        </Card>
      )}
      <br />
      <Navbar bg="light" style={{ paddingLeft: 20 }}>
        <Navbar.Brand href="#home">My site (c) 2021</Navbar.Brand>
      </Navbar>
    </div>
  );
}
