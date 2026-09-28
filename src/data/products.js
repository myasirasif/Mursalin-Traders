// [name, urdu, brand, minPrice, maxPrice]
const RAW = {
  Grocery: [
    ['Rice (Super Kernel) 1kg', 'چاول', 'Guard / Falak', 320, 380],
    ['Wheat Flour (Atta) 10kg', 'آٹا', 'Fauji / Bake Parlor', 1400, 1600],
    ['Cooking Oil 1L', 'کوکنگ آئل', 'Mezan / Habib', 550, 600],
    ['Ghee 1kg', 'گھی', 'Dalda / Sufi', 750, 800],
    ['Sugar 1kg', 'چینی', 'JDW / Al-Arabia', 160, 180],
    ['Tea (Danedar) 190g', 'چائے', 'Tapal', 380, 420],
    ['Tea (Yellow Label) 190g', 'چائے', 'Lipton', 400, 450],
    ['Red Lentils (Masoor Daal) 1kg', 'مسور دال', "Mitchell's", 280, 320],
    ['Salt 800g', 'نمک', 'Kohinoor', 60, 80],
    ['Masala Mix 50g', 'مصالحہ', 'Shan / National', 60, 90],
    ['Milk (UHT) 1L', 'دودھ', 'Olpers / Milk Pak', 220, 250],
    ['Powdered Milk 400g', 'خشک دودھ', 'Nido / Everyday', 750, 850],
    ['Biscuits (Family Pack)', 'بسکٹ', 'Sooper / Rio', 150, 200],
    ['Noodles (2 min)', 'نوڈلز', 'Maggi', 60, 70],
    ['Ketchup 800g', 'ساس', 'National / Shangrila', 400, 450],
    ['Cold Drink 1.5L', 'کولڈ ڈرنک', 'Pepsi / Coke', 200, 220],
    ['Juice 1L', 'جوس', 'Nestle / Shezan', 250, 280],
  ],
  Household: [
    ['Detergent Powder 1kg', 'واشنگ پاؤڈر', 'Surf Excel / Bonus', 350, 420],
    ['Dishwash Liquid 500ml', 'برتن دھونے کا صابن', 'Vim / Lemon Max', 250, 280],
    ['Bathroom Cleaner 500ml', 'باتھ روم کلینر', 'Harpic', 350, 400],
    ['Air Freshener', 'ایئر فریشنر', 'Airwick', 400, 450],
    ['Mosquito Repellent', 'مچھر بھگانے والا', 'Mortein', 250, 300],
    ['Tissue Paper (Box)', 'ٹشو پیپر', 'Rose Petal', 150, 180],
    ['Aluminum Foil Roll', 'فوائل پیپر', 'Bisco', 350, 400],
    ['Matches (Pack of 10)', 'ماچس', 'Local', 100, 120],
  ],
  Cosmetics: [
    ['Bathing Soap', 'نہانے کا صابن', 'Lifebuoy / Lux', 60, 90],
    ['Shampoo 400ml', 'شیمپو', 'Head & Shoulders / Sunsilk', 550, 650],
    ['Toothpaste 150g', 'ٹوتھ پیسٹ', 'Colgate / Close Up', 200, 250],
    ['Toothbrush', 'ٹوتھ برش', 'Colgate / Oral-B', 100, 150],
    ['Face Wash 100g', 'فیس واش', 'Ponds / Garnier', 350, 450],
    ['Face Cream/Lotion', 'کریم/لوشن', 'Ponds / Nivea', 300, 400],
    ['Talcum Powder', 'ٹیلکم پاؤڈر', "Johnson's", 350, 400],
    ['Deodorant/Perfume Spray', 'ڈیوڈرینٹ', 'Fogg / Nivea', 400, 600],
    ['Hair Oil 200ml', 'بالوں کا تیل', 'Dabur Amla', 250, 300],
    ['Nail Polish', 'نیل پالش', 'Local / Imported', 150, 300],
    ['Lipstick', 'لپ اسٹک', 'Medora / Luscious', 300, 500],
    ['Razor (Pack)', 'ریزر', 'Gillette / Treet', 100, 200],
    ['Sanitary Pads (Pack)', 'سینیٹری پیڈز', 'Always / Butterfly', 150, 200],
    ['Baby Diapers (Pack)', 'بے بی ڈائپرز', 'Pampers / Molfix', 1000, 1500],
    ['Baby Wipes (Pack)', 'بے بی وائپس', "Pampers / Johnson's", 250, 300],
  ],
}

export const CATEGORIES = Object.keys(RAW)

// Dummy image - replace with real path later, e.g. '/products/rice.jpg'
const placeholder = (name) =>
  `https://placehold.co/400x300/FFF4E8/F7861C?font=roboto&text=${encodeURIComponent(name)}`

// Small = min price, Medium = mid (rounded to 10), Large = max price
const sizes = (min, max) => [
  { label: 'Small', price: min },
  { label: 'Medium', price: Math.round((min + max) / 20) * 10 },
  { label: 'Large', price: max },
]

let id = 0
export const PRODUCTS = CATEGORIES.flatMap((category) =>
  RAW[category].map(([name, urdu, brand, min, max]) => ({
    id: ++id,
    name,
    urdu,
    brand,
    category,
    min,
    max,
    sizes: sizes(min, max),
    image: placeholder(name),
  }))
)
