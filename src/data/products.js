// [name, urdu, brand, minPrice, maxPrice, image file in /images/<category>]
const RAW = {
  Grocery: [
    ['Rice (Super Kernel) 1kg', 'چاول', 'Guard / Falak', 320, 380, 'rice'],
    ['Wheat Flour (Atta) 10kg', 'آٹا', 'Fauji / Bake Parlor', 1400, 1600, 'wheat_flour'],
    ['Cooking Oil 1L', 'کوکنگ آئل', 'Mezan / Habib', 550, 600, 'cooking_oil'],
    ['Ghee 1kg', 'گھی', 'Dalda / Sufi', 750, 800, 'ghee'],
    ['Sugar 1kg', 'چینی', 'JDW / Al-Arabia', 160, 180, 'sugar'],
    ['Tea (Danedar) 190g', 'چائے', 'Tapal', 380, 420, 'tea'],
    ['Tea (Yellow Label) 190g', 'چائے', 'Lipton', 400, 450, 'tea'],
    ['Red Lentils (Masoor Daal) 1kg', 'مسور دال', "Mitchell's", 280, 320, 'red_lentils'],
    ['Salt 800g', 'نمک', 'Kohinoor', 60, 80, 'salt'],
    ['Masala Mix 50g', 'مصالحہ', 'Shan / National', 60, 90, 'masala'],
    ['Milk (UHT) 1L', 'دودھ', 'Olpers / Milk Pak', 220, 250, 'milk'],
    ['Powdered Milk 400g', 'خشک دودھ', 'Nido / Everyday', 750, 850, 'milk'],
    ['Biscuits (Family Pack)', 'بسکٹ', 'Sooper / Rio', 150, 200, 'biscuits'],
    ['Noodles (2 min)', 'نوڈلز', 'Maggi', 60, 70, 'noodles'],
    ['Ketchup 800g', 'ساس', 'National / Shangrila', 400, 450, 'ketchup'],
    ['Cold Drink 1.5L', 'کولڈ ڈرنک', 'Pepsi / Coke', 200, 220, 'cold_drink'],
    ['Juice 1L', 'جوس', 'Nestle / Shezan', 250, 280, 'juice'],
  ],
  Household: [
    ['Detergent Powder 1kg', 'واشنگ پاؤڈر', 'Surf Excel / Bonus', 350, 420, 'detergent'],
    ['Dishwash Liquid 500ml', 'برتن دھونے کا صابن', 'Vim / Lemon Max', 250, 280, 'dish_wash'],
    ['Bathroom Cleaner 500ml', 'باتھ روم کلینر', 'Harpic', 350, 400, 'bathroom_cleaner'],
    ['Air Freshener', 'ایئر فریشنر', 'Airwick', 400, 450],
    ['Mosquito Repellent', 'مچھر بھگانے والا', 'Mortein', 250, 300, 'mosquito_repellent'],
    ['Tissue Paper (Box)', 'ٹشو پیپر', 'Rose Petal', 150, 180, 'tissue_paper'],
    ['Aluminum Foil Roll', 'فوائل پیپر', 'Bisco', 350, 400, 'aluminum_foil'],
    ['Matches (Pack of 10)', 'ماچس', 'Local', 100, 120, 'matches'],
  ],
  Cosmetics: [
    ['Bathing Soap', 'نہانے کا صابن', 'Lifebuoy / Lux', 60, 90, 'soap'],
    ['Shampoo 400ml', 'شیمپو', 'Head & Shoulders / Sunsilk', 550, 650, 'shampoo'],
    ['Toothpaste 150g', 'ٹوتھ پیسٹ', 'Colgate / Close Up', 200, 250, 'toothpaste'],
    ['Toothbrush', 'ٹوتھ برش', 'Colgate / Oral-B', 100, 150, 'toothbrush'],
    ['Face Wash 100g', 'فیس واش', 'Ponds / Garnier', 350, 450, 'face_cream'],
    ['Face Cream/Lotion', 'کریم/لوشن', 'Ponds / Nivea', 300, 400, 'face_cream'],
    ['Talcum Powder', 'ٹیلکم پاؤڈر', "Johnson's", 350, 400, 'talcum'],
    ['Deodorant/Perfume Spray', 'ڈیوڈرینٹ', 'Fogg / Nivea', 400, 600, 'deodorant'],
    ['Hair Oil 200ml', 'بالوں کا تیل', 'Dabur Amla', 250, 300, 'hair_oil'],
    ['Nail Polish', 'نیل پالش', 'Local / Imported', 150, 300, 'nail_polish'],
    ['Lipstick', 'لپ اسٹک', 'Medora / Luscious', 300, 500, 'lipstick'],
    ['Razor (Pack)', 'ریزر', 'Gillette / Treet', 100, 200, 'razor'],
    ['Sanitary Pads (Pack)', 'سینیٹری پیڈز', 'Always / Butterfly', 150, 200, 'sanitary_pads'],
    ['Baby Diapers (Pack)', 'بے بی ڈائپرز', 'Pampers / Molfix', 1000, 1500, 'baby_diapers'],
    ['Baby Wipes (Pack)', 'بے بی وائپس', "Pampers / Johnson's", 250, 300, 'baby_wipes'],
  ],
}

export const CATEGORIES = Object.keys(RAW)

// Fallback when a product has no image yet
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
  RAW[category].map(([name, urdu, brand, min, max, img]) => ({
    id: ++id,
    name,
    urdu,
    brand,
    category,
    min,
    max,
    sizes: sizes(min, max),
    image: img ? `/images/${category.toLowerCase()}/${img}.jpg` : placeholder(name),
  }))
)
