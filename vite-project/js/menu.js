const menu = [
  {
    itemName: "Raspberry Pie",
    inStock: "Yes",
    price: "4.99",
    customerStars: "4.9",
    specialStock: "No",
    temperature: "Cold",
    img: "https://thebusybaker.ca/wp-content/uploads/2020/08/classic-raspberry-pie-fb-ig-3-scaled.jpg",
  },
  {
    itemName: "Blueberry Pie",
    inStock: "No",
    price: "3.99",
    customerStars: "4.5",
    specialStock: "No",
    temperature: "Cold",
    img: "https://dinnerthendessert.com/wp-content/uploads/2019/01/Blueberry-Pie-2.jpg",
  },
  {
    itemName: "Strawberry Pie",
    inStock: "Yes",
    price: "4.49",
    customerStars: "4.8",
    specialStock: "No",
    temperature: "Cold",
    img: "https://dinnerthendessert.com/wp-content/uploads/2020/01/Baked-Strawberry-Pie-1x1-1.jpg",
  },
  {
    itemName: "Almond Pie",
    inStock: "Yes",
    price: "5.99",
    customerStars: "4.3",
    specialStock: "No",
    temperature: "Cold",
    img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/11/17/0/FN_PlumAlmondPie_009_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382995089163.jpeg",
  },
  {
    itemName: "Pumpkin Pie",
    inStock: "Yes",
    price: "5.49",
    customerStars: "4.1",
    specialStock: "No",
    temperature: "Hot",
    img: "https://www.bhg.com/thmb/S3yEK5LgfmlpHgPlxV9vXwCABZo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/traditional-pumpkin-pie-10283-245baf47a39f4598882fc1608f192177.jpg",
  },
  {
    itemName: "Lemon Meringue Pie",
    inStock: "Yes",
    price: "5.99",
    customerStars: "4.9",
    specialStock: "No",
    temperature: "Cold",
    img: "https://www.tasteandtellblog.com/wp-content/uploads/2020/11/Lemon-Meringue-Pie-1.jpg",
  },
  {
    itemName: "Pecan Pie",
    inStock: "Yes",
    price: "3.99",
    customerStars: "3.9",
    specialStock: "No",
    temperature: "Cold",
    img: "https://tastesbetterfromscratch.com/wp-content/uploads/2022/11/Pecan-Pie-Web-8.jpg",
  },
  {
    itemName: "Apple Pie",
    inStock: "No",
    price: "3.49",
    customerStars: "4.5",
    specialStock: "No",
    temperature: "Hot",
    img: "https://cdn.loveandlemons.com/wp-content/uploads/2022/11/apple-pie.jpg",
  },
  {
    itemName: "Oreo Ice Cream Pie",
    inStock: "Yes",
    price: "7.99",
    customerStars: "4.8",
    specialStock: "No",
    temperature: "Cold",
    img: "https://www.thespruceeats.com/thmb/iSlSfdUvhHQN-TIn6QaeRTs68Lc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/oreo-ice-cream-pie-recipe-305149-hero-01-1bd176c06af4489492fabcdfbe14e353.jpg",
  },
  {
    itemName: "Pizza Pie",
    inStock: "Yes",
    price: "8.99",
    customerStars: "3.4",
    specialStock: "Yes",
    temperature: "Hot",
    img: "https://dishnthekitchen.com/wp-content/uploads/2016/09/skyhighpizzapie-1460x973.jpg",
  },
  {
    itemName: "Sushi Pie",
    inStock: "Yes",
    price: "9.99",
    customerStars: "3.1",
    specialStock: "Yes",
    temperature: "Cold",
    img: "https://annetravelfoodie.com/wp-content/uploads/2016/02/sushi-pie.jpg",
  },
  {
    itemName: "Watermelon Pie",
    inStock: "No",
    price: "8.99",
    customerStars: "4.2",
    specialStock: "Yes",
    temperature: "Cold",
    img: "https://assets.myfoodandfamily.com/adaptivemedia/rendition/100700085_3000x2000.jpg?id=9a3d7a7d1c0b3dbec993b02b9f1b3a4b5aadd717&ht=650&wd=1004&clid=pim",
  },
  {
    itemName: "Chicken Pot Pie",
    inStock: "Yes",
    price: "8.49",
    customerStars: "4.8",
    specialStock: "Yes",
    temperature: "Hot",
    img: "https://temeculablogs.com/wp-content/uploads/2015/10/easy-chicken-pot-pie.jpg",
  },
  {
    itemName: "Burger Pie",
    inStock: "No",
    price: "11.99",
    customerStars: "2.1",
    specialStock: "Yes",
    temperature: "Hot",
    img: "https://images-gmi-pmc.edge-generalmills.com/c1667b81-d497-4aa0-8c8c-6caaacad1361.jpg",
  },
  {
    itemName: "Marshmallow Pie",
    inStock: "No",
    price: "7.49",
    customerStars: "3.7",
    specialStock: "Yes",
    temperature: "Cold",
    img: "https://thetoastykitchen.com/wp-content/uploads/2021/06/marshmallow-pie-slice-on-plate.jpg",
  },
  {
    itemName: "Candy Cane Pie",
    inStock: "Yes",
    price: "15.99",
    customerStars: "5",
    specialStock: "Yes",
    temperature: "Cold",
    img: "https://dessertsonadime.com/wp-content/uploads/2020/09/candy-cane-pie-square.jpg",
  },
  {
    itemName: "Cucumber-Tomato Salad Pie",
    inStock: "Yes",
    price: "12.99",
    customerStars: "4.7",
    specialStock: "Yes",
    temperature: "Hot",
    img: "https://publish.purewow.net/wp-content/uploads/sites/2/2018/01/falafel-pie-recipe-600.jpg",
  },
  {
    itemName: "Raspberry Pi",
    inStock: "Yes",
    price: "99.99",
    customerStars: "5.0",
    specialStock: "Yes",
    temperature: "Cold",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Raspberry_Pi_4_Model_B_-_Side.jpg/1200px-Raspberry_Pi_4_Model_B_-_Side.jpg",
  },
];

export { menu };
