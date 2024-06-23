const catalog_shoes = [
  {
    id: 1,
    name: 'Nike Air Max 270',
    price: 150,
    image: 'https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0065936_nike-air-max-270-ah8050-005.jpeg',
    category: 'sport'
  },
  {
    id: 2,
    name: 'Adidas Ultraboost',
    price: 180,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_quLKS0bPMzNqAq4V1Vnvf2vHZIq45OaOHw&s',
    category: 'sport'
  },
  {
    id: 3,
    name: 'Puma Suede Classic',
    price: 70,
    image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,e_sharpen/global/374915/07/sv01/fnd/TUR/w/560/h/560/fmt/png',
    category: 'casual'
  },
  {
    id: 4,
    name: 'Reebok Club C 85',
    price: 85,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHTnQ9mOF4Q7gJR9P4wgxjgZ586SaHdkWtrg&s',
    category: 'casual'
  },
  {
    id: 5,
    name: 'Vans Old Skool',
    price: 60,
    image: 'https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0145921_vans-old-skool-split-vn0009qhkou1-001.jpeg',
    category: 'casual'
  },
  {
    id: 6,
    name: 'Converse Chuck Taylor All Star',
    price: 55,
    image: 'https://akn-ss.a-cdn.akinoncloud.com/products/2021/01/26/143326/fff4112f-12a8-47b3-8e1b-721467ab46f2_size1400x1400_quality100.jpg',
    category: 'casual'
  },
  {
    id: 7,
    name: 'New Balance 574',
    price: 80,
    image: 'https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0163894_new-balance-574-lifestyle-womens-shoes-wl574qa2-73.jpeg',
    category: 'casual'
  },
  {
    id: 8,
    name: 'Nike Air Force 1',
    price: 90,
    image: 'https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0131265_nike-air-force-1-07-fd9748-001.jpeg',
    category: 'casual'
  },
  {
    id: 9,
    name: 'Timberland Classic 6-Inch Boot',
    price: 198,
    image: 'https://via.placeholder.com/150',
    category: 'season'
  },
  {
    id: 10,
    name: 'Dr. Martens 1460',
    price: 140,
    image: 'https://via.placeholder.com/150',
    category: 'season'
  },
  {
    id: 11,
    name: 'UGG Classic Mini II',
    price: 150,
    image: 'https://via.placeholder.com/150',
    category: 'season'
  },
  {
    id: 12,
    name: 'Sorel Caribou',
    price: 160,
    image: 'https://via.placeholder.com/150',
    category: 'season'
  },
  {
    id: 13,
    name: 'Columbia Bugaboot Plus IV Omni-Heat',
    price: 130,
    image: 'https://via.placeholder.com/150',
    category: 'season'
  },
  {
    id: 14,
    name: 'Clarks Desert Boot',
    price: 100,
    image: 'https://via.placeholder.com/150',
    category: 'season'
  },
  {
    id: 15,
    name: 'ECCO Soft 7',
    price: 120,
    image: 'https://via.placeholder.com/150',
    category: 'business'
  },
  {
    id: 16,
    name: 'Cole Haan OriginalGrand',
    price: 150,
    image: 'https://via.placeholder.com/150',
    category: 'business'
  },
  {
    id: 17,
    name: 'Johnston & Murphy Conard Cap Toe',
    price: 175,
    image: 'https://via.placeholder.com/150',
    category: 'business'
  },
  {
    id: 18,
    name: 'Allen Edmonds Park Avenue',
    price: 395,
    image: 'https://via.placeholder.com/150',
    category: 'business'
  },
  {
    id: 19,
    name: 'Magnanni Santiago',
    price: 325,
    image: 'https://via.placeholder.com/150',
    category: 'business'
  },
  {
    id: 20,
    name: 'Nike Metcon 6',
    price: 130,
    image: 'https://via.placeholder.com/150',
    category: 'sport'
  },
  {
    id: 21,
    name: 'Adidas NMD R1',
    price: 140,
    image: 'https://via.placeholder.com/150',
    category: 'sport'
  },
  {
    id: 22,
    name: 'Under Armour HOVR Phantom',
    price: 150,
    image: 'https://via.placeholder.com/150',
    category: 'sport'
  },
  {
    id: 23,
    name: 'Saucony Endorphin Speed',
    price: 160,
    image: 'https://via.placeholder.com/150',
    category: 'sport'
  },
  {
    id: 24,
    name: 'Asics Gel-Kayano 27',
    price: 160,
    image: 'https://via.placeholder.com/150',
    category: 'sport'
  },
  {
    id: 25,
    name: 'Brooks Ghost 13',
    price: 130,
    image: 'https://via.placeholder.com/150',
    category: 'sport'
  },
  {
    id: 26,
    name: 'Merrell Moab 2 Vent',
    price: 100,
    image: 'https://via.placeholder.com/150',
    category: 'season'
  },
  {
    id: 27,
    name: 'Salomon X Ultra 3 GTX',
    price: 150,
    image: 'https://via.placeholder.com/150',
    category: 'season'
  },
  {
    id: 28,
    name: 'The North Face Hedgehog Fastpack GTX',
    price: 120,
    image: 'https://via.placeholder.com/150',
    category: 'season'
  },
  {
    id: 29,
    name: 'Lowa Renegade GTX Mid',
    price: 230,
    image: 'https://via.placeholder.com/150',
    category: 'season'
  },
  {
    id: 30,
    name: 'Scarpa Zodiac Plus GTX',
    price: 250,
    image: 'https://via.placeholder.com/150',
    category: 'season'
  }
];
