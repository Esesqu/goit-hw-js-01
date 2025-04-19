// Görev 2: Ürün Teslimatı

/**
 * getShippingMessage fonksiyonu, teslimat ülkesine
 * ürün ve teslimat ücretini toplam maliyet olarak yazar.
 *
 * @param {string} country - Teslimat yapılacak ülke
 * @param {number} price - Ürün fiyatı
 * @param {number} deliveryFee - Teslimat ücreti
 * @returns {string} - Teslimat mesajı
 */
function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
  }
  
  // Testler:
  console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
  console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
  console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
  console.log(getShippingMessage("USA", 200, 30)); // "Shipping to USA will cost 230 credits "
    console.log(getShippingMessage("Canada", 150, 25)); // "Shipping to Canada will cost 175 credits"
    console.log(getShippingMessage("Mexico", 90, 15)); // "Shipping to Mexico will cost 105 credits"
    console.log(getShippingMessage("Brazil", 120, 40)); // "Shipping to Brazil will cost 160 credits"
    console.log(getShippingMessage("Japan", 300, 50)); // "Shipping to Japan will cost 350 credits"
    console.log(getShippingMessage("China", 250, 30)); // "Shipping to China will cost 280 credits"