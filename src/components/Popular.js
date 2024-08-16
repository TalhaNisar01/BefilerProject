import React, { useEffect, useState } from 'react';
import '../App.css';

const ProductCarousel = () => {
  const [selectedPromotionItem, setSelectedPromotionItem] = useState(window.innerWidth <= 820 ? 1 : 2);

  useEffect(() => {
    if (window.innerWidth <= 820) {
      document.getElementById('product__item-1').classList.add('center__item');
      document.getElementById('product__item-2').classList.remove('center__item');
    }
  }, []);

  const scrollContainer = (direction) => {
    const container = document.getElementById('product__vertical-scroll');
    const card = document.querySelector('.list__item'); // Assuming all cards have the same width
    const scrollAmount = card.offsetWidth + parseFloat(getComputedStyle(card).marginRight);

    if (direction === 'prev' && selectedPromotionItem > 1) {
      setSelectedPromotionItem((prev) => prev - 1);
    } else if (direction === 'next' && selectedPromotionItem < 5) {
      setSelectedPromotionItem((prev) => prev + 1);
    }

    container.scrollBy({
      top: 0,
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const currentSelectionPromotionItem = document.getElementById(`product__item-${selectedPromotionItem}`);
    const previousSelectionPromotionItem = document.querySelector('.center__item');

    if (previousSelectionPromotionItem) {
      previousSelectionPromotionItem.classList.remove('center__item');
    }

    if (currentSelectionPromotionItem) {
      currentSelectionPromotionItem.classList.add('center__item');
    }
  }, [selectedPromotionItem]);

  const navigateTo = (url) => {
    window.location.href = url;
  };

  return (
    <div className="products">
      <div className="container">
        <div className="products__title">Popular Products</div>
        <div className="vertical-scroll" id="product__vertical-scroll">
          <div className="products__list">
            <div className="list__item invisible"></div>

            <div className="list__item" id="product__item-1">
              <div className="item__title">Individual NTN Registration</div>
              <div className="item__description">
                Just register your Individual NTN in 3 simple steps. Register, Upload, Pay.
              </div>
              <div className="item__button">
                <button onClick={() => navigateTo('ntn-services')}>Click here to start now</button>
              </div>
            </div>

            <div className="list__item" id="product__item-2">
              <div className="item__title">Tax Filing</div>
              <div className="item__description">
                No appointments, no documents, File your taxes within minutes.
              </div>
              <div className="item__button">
                <button onClick={() => navigateTo('tax-form/year')}>Click here to start now</button>
              </div>
            </div>

            <div className="list__item" id="product__item-3">
              <div className="item__title">Business NTN Registration</div>
              <div className="item__description">
                The simplest and quickest way to start your business in Pakistan.
              </div>
              <div className="item__button">
                <button onClick={() => navigateTo('ntn-services/business-ntn/add-ntn-business')}>
                  Click here to start now
                </button>
              </div>
            </div>

            <div className="list__item" id="product__item-4">
              <div className="item__title">Sales Tax Registration</div>
              <div className="item__description">
                GST Registration was never this easy, Register your sales tax with Befiler Now.
              </div>
              <div className="item__button">
                <button onClick={() => navigateTo('sales-tax/registration')}>Click here to start now</button>
              </div>
            </div>

            <div className="list__item" id="product__item-5">
              <div className="item__title">Business Tax Filing</div>
              <div className="item__description">
                Stop worrying about your taxes, Befiler team of experts got you covered.
              </div>
              <div className="item__button">
                <button onClick={() => navigateTo('dashboard')}>Click here to start now</button>
              </div>
            </div>

            <div className="list__item invisible"></div>
          </div>

          <div className="products__navigation">
            <div
              className="navigation__prev"
              id="promotion__navigation-prev"
              onClick={() => scrollContainer('prev')}
            >
              ‹
            </div>
            <div
              className="navigation__next"
              id="promotion__navigation-next"
              onClick={() => scrollContainer('next')}
            >
              ›
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
