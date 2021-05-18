
//preloader
window.addEventListener('load',()=>document.querySelector('.preloader').classList.add('hidepreloader'));

const createcars = (()=>{

    //car data
    const cars=[];
    //car class
    class Car{
        constructor(make,country,img,special,model,price,type,trans,gas){
            this.make=make;
            this.country=country;
            this.img=img;
            this.special=special;
            this.model=model;
            this.price=price;
            this.type=type;
            this.trans=trans;
            this.gas=gas;
        }
    }
    //function  ->that calls the class car
    function makecar(make,country,img= "image/featured-1.jpg",special=true,model='new model',price=10000,type='sedan',trans='automatic',gas='50'){
        const car=new Car(make,country,img,special,model,price,type,trans,gas)  //new instance means a object of a Car
        cars.push(car)
    }
    //produce cars
    function producecars(){
        
        makecar('mahindra','india','image/mahindra-1.jpg',false,'old model',20000,'mahindra');
        makecar('mahindra','indian','image/mahindra-2.jpg',false);
        makecar('mahindra','indian','image/mahindra-3.jpg',false,'other model',25000);
        makecar('mahindra','indian','image/mahindra-4.jpg',false,'other model',20000);

        makecar('maruti','indian','image/maruti-1.jpg',false);
        makecar('maruti','indian','image/maruti-2.jpg',false);
        makecar('maruti','indian','image/maruti-3.jpg',false);
        makecar('maruti','indian','image/maruti-4.jpg',false);



        makecar('tata','indian','image/tata-1.jpg',false,'default',20000);
        makecar('tata','indian','image/tata-2.jpg',false,'other model',30000);
        makecar('tata','indian','image/tata-3.jpg',false);
        makecar('tata','indian','image/tata-4.jpg',false,'new model',10000);

     
        makecar('audi','german','image/featured-1.jpg',true);
        makecar('bmw','german','image/featured-2.jpg',true,'some model',20000);
        makecar(' mercedes','german','image/featured-3.jpg',true,'old model',30000);
        makecar(' toyota','german','image/featured-4.jpg',true,'different model');
        makecar('old bmw','italy','image/featured-5.jpg',true,'other model',40000);
      

      
        

    }
    producecars();
    //console.log(cars);
    //special cars

    const special=cars.filter(car=>car.special===true);
    //console.log(special);
    return{
        cars,special
    }
    
    

    
    

})();    //invoking parenthisis

const displayspecialcars=((createcars)=>{
const specialcars=createcars.special;

const info=document.querySelector('.featured-info');
// document loaded event
document.addEventListener('DOMContentLoaded',()=>{
    info.innerHTML='';

    let data = '';
    specialcars.forEach(item => {
        data +=`<!--single item-->
        <div class="featured-item my-3 d-flex p-2 text-capitalize 
        align-items-baseline flex-wrap">
        <span data-img="${item.img}" class="featured-icon mr-2">
          <i class="fas fa-car"></i>
        </span>
        <h5 class="font-weight-bold mx-1">${item.make}</h5>
        <h5 class=" mx-1">${item.model}</h5>
      
      </div>


        <!--end of single item--> `

        
    });
    info.innerHTML=data;
})
//change image
info.addEventListener('click',(event)=>{
    if(event.target.parentElement.classList.contains('featured-icon')){
        const img=event.target.parentElement.dataset.img;
        document.querySelector('.featured-photo').src=img;
    }
})
})(createcars);



//display all cars

const displaycars= ((createcars)=>{
    //all cars
    const cars=createcars.cars;
    //car conainer
    const inventory=document.querySelector('.inventory-container');

    //content loaded
    document.addEventListener('DOMContentLoaded',()=>{
        inventory.innerHTML='';
        let output='';
        cars.forEach((car)=>{
            output+=` <!--single car-->
            <div class="col-10 mx-auto my-3 col-md-6 col-lg-4 single-car ${car.make}">
              <div class="card car-card">
                <img src="${car.img}" class="card-img-top car-img" alt="">
                <!--card body-->
                <div class="card-body">
                  <div class="car-info d-flex justify-content-between">
                    <!--first flex child-->
                    <div class="car-text text-uppercase">
                      <h6 class="font-weight-bold">${car.model}</h6>
                      <h6 >model</h6>
                    </div>
                    <!--second flex child-->
                    <h5 class="car-value align-self-center py-2 px-3">$<span class="car-price">${car.price}</span>  
                    </h5>
                  </div>
                </div>
                <!--end of cart-->
                <div class="card-footer text-capitalize d-flex justify-content-between">
                  <p><span><i class="fas fa-car"></i></span>${car.type}</p>
                  <p><span><i class="fas fa-cogs"></i></span>${car.trans}</p>
                  <p><span><i class="fas fa-gas-pump"></i></span>${car.gas}</p>
                </div>
              </div>
            </div>
            <!--end of single car-->`
        })
        inventory.innerHTML=output;
    })



})(createcars);




//filter cars

const filtercars= (()=>{
    const filter= document.querySelectorAll('.filter-btn');
    filter.forEach((btn)=>{
        btn.addEventListener('click',(event)=>{
            const value=event.target.dataset.filter;
            console.log(value);
            
            
            
            const singlecar=document.querySelectorAll('.single-car');
           // console.log(singlecar);
            

            singlecar.forEach((car)=>{
                if(value==='all'){
                    car.style.display='block'
                }
                else{
                    (!car.classList.contains(value))?car.style.display='none':car.style.display='block';

                }

            })
            
        })
    })
    
})
();























