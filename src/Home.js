import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/TheBoyss2/3000x1200_Hero-Tall_p._CB404993994_.jpg" alt="" srcset="" />


        <div className="home__row">
          <Product id="123" title="Ikigai: The Japanese secret to a long and happy life Hardcover" price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51T8OXMiB5L._SX356_BO1,204,203,200_.jpg"
            rating={3} />

          <Product id="1234" title="Apple iPhone 11 (64GB) - Black" price={699.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51iNt0u3eaL._SX679_.jpg"
            rating={5} />
        </div>

        <div className="home__row">
          <Product id="12345" title="Nx120s Stereo Headset With Foldable Microphone" price={59.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61H0aiyxy3L._SL1200_.jpg"
            rating={4} />

          <Product title="Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Silver (2nd Generation)" price={799.99}
            image="https://images-na.ssl-images-amazon.com/images/I/815a%2BXjrgvL._SL1500_.jpg"
            rating={5} />

          <Product title="Apple Watch Series 5 (GPS + Cellular, 44mm) - Space Gray Aluminium Case with Black Sport Band" price={599.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71fp5ankbqL._SL1500_.jpg"
            rating={4} />
        </div>


        <div className="home__row">
          <Product id="12345" title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL" price={999.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91pi34PiUPL._SL1500_.jpg"
            rating={4} />

        </div>
      </div>
    </div>
  )
}

export default Home
