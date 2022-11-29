import Card from "react-bootstrap/Card";

export default function Hero() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img
        src="https://images.pexels.com/photos/33703/relay-race-competition-stadium-sport.jpg"
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Card.Title>
          <h1>Sportstar</h1>
        </Card.Title>
        <Card.Text>
          <h3>LOW-PRICED SPORTSWEAR IN HIGH QUALITY BY FAMOUS BRANDS</h3>
          We love sports – and nice prices! Here at SportSpar, we offer a huge
          choice of selected sportswear and accessories at unbeatable low
          prices.
          <br />
          From non-slipping footwear and matching sportswear to merchandise of
          your favourite club – we sell everything that makes your
          <br />
          athlete’s heart beat faster!
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}
