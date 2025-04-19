// Görev 3: Öğe Genişliği

/**
 * getElementWidth fonksiyonu, içerik genişliği, padding ve border bilgisine göre
 * bir öğenin toplam genişliğini hesaplar.
 *
 * @param {string} content - İçerik genişliği (örneğin "50px")
 * @param {string} padding - Kenar boşluğu (örneğin "8px")
 * @param {string} border - Kenarlık kalınlığı (örneğin "4px")
 * @returns {number} - Toplam öğe genişliği (px)
 */
function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding) * 2; // Her iki taraf
    const borderWidth = parseFloat(border) * 2; // Her iki taraf
    return contentWidth + paddingWidth + borderWidth;
  }
  
  // Testler:
  console.log(getElementWidth("50px", "8px", "4px")); // 74
  console.log(getElementWidth("60px", "12px", "8.5px")); // 101
  console.log(getElementWidth("200px", "0px", "0px")); // 200
    console.log(getElementWidth("100px", "10px", "5px")); // 130
    console.log(getElementWidth("150px", "5px", "2px")); // 164
    console.log(getElementWidth("80px", "15px", "3px")); // 116
    console.log(getElementWidth("120px", "20px", "10px")); // 180
    console.log(getElementWidth("90px", "5px", "2px")); // 102
    console.log(getElementWidth("30px", "2px", "1px")); // 36
    console.log(getElementWidth("40px", "6px", "3px")); // 56     
    console.log(getElementWidth("70px", "8px", "4px")); // 90
    console.log(getElementWidth("110px", "12px", "6px")); // 144