// Görev 1: Droid siparişi

/**
 * makeTransaction fonksiyonu, sipariş edilen droid sayısı
 * ve birim fiyatına göre toplam maliyeti hesaplar.
 *
 * @param {number} quantity - Sipariş edilen droid sayısı
 * @param {number} pricePerDroid - Her bir droidin fiyatı
 * @returns {string} - Sipariş özeti mesajı
 */
function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
  
  // Testler:
  console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
  console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
  console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
    console.log(makeTransaction(0, 100)); // "You ordered 0 droids worth 0 credits!"
    console.log(makeTransaction(7, 2000)); // "You ordered 7 droids worth 14000 credits!"
    console.log(makeTransaction(2, 1500)); // "You ordered 2 droids worth 3000 credits!"
    console.log(makeTransaction(4, 2500)); // "You ordered 4 droids worth 10000 credits!"
    console.log(makeTransaction(1, 10000)); // "You ordered 1 droids worth 10000 credits!"
    console.log(makeTransaction(8, 1200)); // "You ordered 8 droids worth 9600 credits!"
    console.log(makeTransaction(6, 800)); // "You ordered 6 droids worth 4800 credits!"
    