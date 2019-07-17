import React, { Component } from "react";
import Slider from "react-slick";
import { FiShoppingCart} from "react-icons/fi";

import './MostBought.css'

import apiAllBooks from '../../services/apiAllBooks'


import { Container, Button } from 'react-bootstrap'



 class MostBought extends Component {
  state = {
    infoBooks: [],
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = async () => {

    const response = await apiAllBooks.get('')
    console.log(response.data)

    this.setState({
      infoBooks: response.data.items
    })


  }
  render() {
    const { infoBooks } = this.state;

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        }, {
          breakpoint: 765,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <Container>
        <div className="MostBought">
          <h2 className="Title-content"> Mais Vendidos </h2>
          <Slider {...settings}>
            {infoBooks.map(item => (
              <div>
               
                  <div className="Content">

                    <div className="Image">
                      <img
                        src={item.volumeInfo.imageLinks.smallThumbnail}
                        className="foto"
                      />
                    </div>
                    <div className="books">
                      <h4 className="Bookname-content"><strong>{item.volumeInfo.title}</strong></h4>
                      <h4 className="authour-content">{item.volumeInfo.authors} </h4>
                      <h4 className="novalue-content">R$ {item.saleInfo.listPrice.amount + 10}</h4>
                      <h4 className="value-content">R$ {item.saleInfo.retailPrice.amount}</h4>                    
                    </div>

                    <div className="botao">
                      <Button variant="warning" size="sm" className="button"><FiShoppingCart size={20} className="Car-icon"/>ADICIONAR AO CARRINHO</Button>
                    </div>
                  </div>
                  


              </div>
            ))
            }

          </Slider>
        </div>
      </Container>
    );
  }
}
export default MostBought