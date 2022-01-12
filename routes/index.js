const {Router} =require('express')

const router=Router();

const products =  [
  {
    name:"ASUS VivoBook S S15 S532EQ-BQ502TS",
    catogory:"laptop",
    description:"Processor: 11th Gen Intel® Core™ i5-1135G7 Processor, 2.4 GHz Base Speed, Up to 4.2 GHz Max Turbo Speed, 4 cores, 8 Threads, 8MB Cache",
    image:"https://d39d98bvxoocym.cloudfront.net/media/catalog/product/cache/79e8a5339ef258d84999e239b6907f7f/5/1/51b3df546_179493_b_nqqayczmaic82cgo.jpg"
  },
  {
    name:"Inspiron 15 Laptop",
    catogory:"laptop",
    description:"1th Generation Intel® Core™ i5-11320H Processor (8MB Cache, up to 4.5GHz)",
    image:"https://i.dell.com/is/image/DellContent//content/dam/global-asset-library/Products/Notebooks/Inspiron/15_5510_non-touch/in5510nt_cnb_00055lf110_gy.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=631&qlt=100,0&resMode=sharp2&size=631,402"
  },
  {
    name:"G15 Gaming Laptop",
    catogory:"laptop",
    description:"AMD Ryzen™ 7 5800H 8-core/16-thread Mobile Processor",
    image:"https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/g_series/15_5515/media_gallery/laptops_g-series_g15-5515-phantom-grey-coral-kb_gallery_1.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=402&qlt=100,0&resMode=sharp2&size=402,402"
  },
  {
    name:"HP Envy x360 13-ay0045au",
    catogory:"laptop",
    description:"(8GB RAM, 512GB SSD, AMD Radeon Graphics, MS Office, 33.78cm, Nightfall Black Aluminum)",
    image:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1606106831/Croma%20Assets/Computers%20Peripherals/Laptop/Images/9006443036702.png/mxw_2048,f_auto"
  },
  {
    name:"ASUS VivoBook S S15 S532EQ-BQ502TS",
    catogory:"laptop",
    description:"Processor: 11th Gen Intel® Core™ i5-1135G7 Processor, 2.4 GHz Base Speed, Up to 4.2 GHz Max Turbo Speed, 4 cores, 8 Threads, 8MB Cache",
    image:"https://d39d98bvxoocym.cloudfront.net/media/catalog/product/cache/79e8a5339ef258d84999e239b6907f7f/5/1/51b3df546_179493_b_nqqayczmaic82cgo.jpg"
  },
  {
    name:"Inspiron 15 Laptop",
    catogory:"laptop",
    description:"1th Generation Intel® Core™ i5-11320H Processor (8MB Cache, up to 4.5GHz)",
    image:"https://i.dell.com/is/image/DellContent//content/dam/global-asset-library/Products/Notebooks/Inspiron/15_5510_non-touch/in5510nt_cnb_00055lf110_gy.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=631&qlt=100,0&resMode=sharp2&size=631,402"
  },
  {
    name:"G15 Gaming Laptop",
    catogory:"laptop",
    description:"AMD Ryzen™ 7 5800H 8-core/16-thread Mobile Processor",
    image:"https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/g_series/15_5515/media_gallery/laptops_g-series_g15-5515-phantom-grey-coral-kb_gallery_1.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=402&qlt=100,0&resMode=sharp2&size=402,402"
  },
  {
    name:"HP Envy x360 13-ay0045au",
    catogory:"laptop",
    description:"(8GB RAM, 512GB SSD, AMD Radeon Graphics, MS Office, 33.78cm, Nightfall Black Aluminum)",
    image:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1606106831/Croma%20Assets/Computers%20Peripherals/Laptop/Images/9006443036702.png/mxw_2048,f_auto"
  }
]

router.get('/',(req,res)=>{
  if(req.session.loggedIn){
    

    res.set('Cache-Control', 'no-store')
    res.render('homepage', { products});
  }else{
    res.set('Cache-Control', 'no-store')
    res.render('login');
  }
});

const addproducts=  [
  {
    no:"1",
    name:"ASUS VivoBook S S15 S532EQ-BQ502TS",
    catogory:"laptop",
    description:"Processor: 11th Gen Intel® Core™ i5-1135G7 Processor, 2.4 GHz Base Speed, Up to 4.2 GHz Max Turbo Speed, 4 cores, 8 Threads, 8MB Cache",
    image:"https://d39d98bvxoocym.cloudfront.net/media/catalog/product/cache/79e8a5339ef258d84999e239b6907f7f/5/1/51b3df546_179493_b_nqqayczmaic82cgo.jpg"
  },
  {
    no:"2",
    name:"Inspiron 15 Laptop",
    catogory:"laptop",
    description:"1th Generation Intel® Core™ i5-11320H Processor (8MB Cache, up to 4.5GHz)",
    image:"https://i.dell.com/is/image/DellContent//content/dam/global-asset-library/Products/Notebooks/Inspiron/15_5510_non-touch/in5510nt_cnb_00055lf110_gy.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=631&qlt=100,0&resMode=sharp2&size=631,402"
  },
  {
    no:"3",
    name:"G15 Gaming Laptop",
    catogory:"laptop",
    description:"AMD Ryzen™ 7 5800H 8-core/16-thread Mobile Processor",
    image:"https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/g_series/15_5515/media_gallery/laptops_g-series_g15-5515-phantom-grey-coral-kb_gallery_1.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=402&qlt=100,0&resMode=sharp2&size=402,402"
  },
  {
    no:"4",
    name:"HP Envy x360 13-ay0045au",
    catogory:"laptop",
    description:"(8GB RAM, 512GB SSD, AMD Radeon Graphics, MS Office, 33.78cm, Nightfall Black Aluminum)",
    image:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1606106831/Croma%20Assets/Computers%20Peripherals/Laptop/Images/9006443036702.png/mxw_2048,f_auto"
  },
  {
    no:"1",
    name:"ASUS VivoBook S S15 S532EQ-BQ502TS",
    catogory:"laptop",
    description:"Processor: 11th Gen Intel® Core™ i5-1135G7 Processor, 2.4 GHz Base Speed, Up to 4.2 GHz Max Turbo Speed, 4 cores, 8 Threads, 8MB Cache",
    image:"https://d39d98bvxoocym.cloudfront.net/media/catalog/product/cache/79e8a5339ef258d84999e239b6907f7f/5/1/51b3df546_179493_b_nqqayczmaic82cgo.jpg"
  },
  {
    no:"2",
    name:"Inspiron 15 Laptop",
    catogory:"laptop",
    description:"1th Generation Intel® Core™ i5-11320H Processor (8MB Cache, up to 4.5GHz)",
    image:"https://i.dell.com/is/image/DellContent//content/dam/global-asset-library/Products/Notebooks/Inspiron/15_5510_non-touch/in5510nt_cnb_00055lf110_gy.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=631&qlt=100,0&resMode=sharp2&size=631,402"
  },
  {
    no:"3",
    name:"G15 Gaming Laptop",
    catogory:"laptop",
    description:"AMD Ryzen™ 7 5800H 8-core/16-thread Mobile Processor",
    image:"https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/g_series/15_5515/media_gallery/laptops_g-series_g15-5515-phantom-grey-coral-kb_gallery_1.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=402&qlt=100,0&resMode=sharp2&size=402,402"
  },
  {
    no:"4",
    name:"HP Envy x360 13-ay0045au",
    catogory:"laptop",
    description:"(8GB RAM, 512GB SSD, AMD Radeon Graphics, MS Office, 33.78cm, Nightfall Black Aluminum)",
    image:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1606106831/Croma%20Assets/Computers%20Peripherals/Laptop/Images/9006443036702.png/mxw_2048,f_auto"
  }
]


router.get('/add-product', (req,res) => {
  res.set('Cache-Control', 'no-store')
  res.render('add-product',{ addproducts });
})


router.post('/user',(req,res)=> {

  if(req.body.username=='amal' && req.body.password == '7312'){
    req.session.loggedIn = true;

    res.set('Cache-Control', 'no-store')

    res.render('homepage', { products });
  }else{  
    delete req.session.loggedIn;
    res.set('Cache-Control', 'no-store')
    err_msg='Invalid username and password'; 
    
    res.render('login',{err_msg});    
  }
});


router.get('/logout',(req,res)=>{
    
    req.session.destroy();
   
    res.redirect('/');
})

router.get('/login',(req,res)=>{    
  res.render('login');
})





module.exports=router

