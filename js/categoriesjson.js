const listings =[
{
    photo:"img/feature/1.jpg",
    sale:"FOR SALE",
    buildingName: "1963 S Crescent Heights Blvd",
    buildingAddress :"Los Angeles, CA 90034",
    area:"800 square foot",
    bedroom:"10 Bedrooms",
    garage:"2 Garages",
    bathroom:"6 Bathroom",
    name:"Tony Holland",
    day:"1 Days ago",
    price:"$1,200,000"
},
{
    photo:"img/feature/1.jpg",
    sale:"FOR SALE",
    buildingName: "1963 S Crescent Heights Blvd",
    buildingAddress :"Los Angeles, CA 90034",
    area:"800 square foot",
    bedroom:"10 Bedrooms",
    garage:"2 Garages",
    bathroom:"6 Bathroom",
    name:"Tony Holland",
    day:"1 Days ago",
    price:"$1,200,000"
},
{
    photo:"img/feature/1.jpg",
    sale:"FOR SALE",
    buildingName: "1963 S Crescent Heights Blvd",
    buildingAddress :"Los Angeles, CA 90034",
    area:"800 square foot",
    bedroom:"10 Bedrooms",
    garage:"2 Garages",
    bathroom:"6 Bathroom",
    name:"Tony Holland",
    day:"1 Days ago",
    price:"$1,200,000"
},
{
    photo:"img/feature/1.jpg",
    sale:"FOR SALE",
    buildingName: "1963 S Crescent Heights Blvd",
    buildingAddress :"Los Angeles, CA 90034",
    area:"800 square foot",
    bedroom:"10 Bedrooms",
    garage:"2 Garages",
    bathroom:"6 Bathroom",
    name:"Tony Holland",
    day:"1 Days ago",
    price:"$1,200,000"
},
{
    photo:"img/feature/1.jpg",
    sale:"FOR SALE",
    buildingName: "1963 S Crescent Heights Blvd",
    buildingAddress :"Los Angeles, CA 90034",
    area:"800 square foot",
    bedroom:"10 Bedrooms",
    garage:"2 Garages",
    bathroom:"6 Bathroom",
    name:"Tony Holland",
    day:"1 Days ago",
    price:"$1,200,000"
},
{
    photo:"img/feature/1.jpg",
    sale:"FOR SALE",
    buildingName: "1963 S Crescent Heights Blvd",
    buildingAddress :"Los Angeles, CA 90034",
    area:"800 square foot",
    bedroom:"10 Bedrooms",
    garage:"2 Garages",
    bathroom:"6 Bathroom",
    name:"Tony Holland",
    day:"1 Days ago",
    price:"$1,200,000"
},
{
    photo:"img/feature/1.jpg",
    sale:"FOR SALE",
    buildingName: "1963 S Crescent Heights Blvd",
    buildingAddress :"Los Angeles, CA 90034",
    area:"800 square foot",
    bedroom:"10 Bedrooms",
    garage:"2 Garages",
    bathroom:"6 Bathroom",
    name:"Tony Holland",
    day:"1 Days ago",
    price:"$1,200,000"
},
{
    photo:"img/feature/1.jpg",
    sale:"FOR SALE",
    buildingName: "1963 S Crescent Heights Blvd",
    buildingAddress :"Los Angeles, CA 90034",
    area:"800 square foot",
    bedroom:"10 Bedrooms",
    garage:"2 Garages",
    bathroom:"6 Bathroom",
    name:"Tony Holland",
    day:"1 Days ago",
    price:"$1,200,000"
},
{
    photo:"img/feature/1.jpg",
    sale:"FOR SALE",
    buildingName: "1963 S Crescent Heights Blvd",
    buildingAddress :"Los Angeles, CA 90034",
    area:"800 square foot",
    bedroom:"10 Bedrooms",
    garage:"2 Garages",
    bathroom:"6 Bathroom",
    name:"Tony Holland",
    day:"1 Days ago",
    price:"$1,200,000"
},
{
    photo:"img/feature/1.jpg",
    sale:"FOR SALE",
    buildingName: "1963 S Crescent Heights Blvd",
    buildingAddress :"Los Angeles, CA 90034",
    area:"800 square foot",
    bedroom:"10 Bedrooms",
    garage:"2 Garages",
    bathroom:"6 Bathroom",
    name:"Tony Holland",
    day:"1 Days ago",
    price:"$1,200,000"
},
{
    photo:"img/feature/1.jpg",
    sale:"FOR SALE",
    buildingName: "1963 S Crescent Heights Blvd",
    buildingAddress :"Los Angeles, CA 90034",
    area:"800 square foot",
    bedroom:"10 Bedrooms",
    garage:"2 Garages",
    bathroom:"6 Bathroom",
    name:"Tony Holland",
    day:"1 Days ago",
    price:"$1,200,000"
},
{
    photo:"img/feature/1.jpg",
    sale:"FOR SALE",
    buildingName: "1963 S Crescent Heights Blvd",
    buildingAddress :"Los Angeles, CA 90034",
    area:"800 square foot",
    bedroom:"10 Bedrooms",
    garage:"2 Garages",
    bathroom:"6 Bathroom",
    name:"Tony Holland",
    day:"1 Days ago",
    price:"$1,200,000"
},
{
    photo:"img/feature/1.jpg",
    sale:"FOR SALE",
    buildingName: "1963 S Crescent Heights Blvd",
    buildingAddress :"Los Angeles, CA 90034",
    area:"800 square foot",
    bedroom:"10 Bedrooms",
    garage:"2 Garages",
    bathroom:"6 Bathroom",
    name:"Tony Holland",
    day:"1 Days ago",
    price:"$1,200,000"
},
{
    photo:"img/feature/1.jpg",
    sale:"FOR SALE",
    buildingName: "1963 S Crescent Heights Blvd",
    buildingAddress :"Los Angeles, CA 90034",
    area:"800 square foot",
    bedroom:"10 Bedrooms",
    garage:"2 Garages",
    bathroom:"6 Bathroom",
    name:"Tony Holland",
    day:"1 Days ago",
    price:"$1,200,000"
}
];

function boxTemplate(box){
   return `
<div class="col-lg-4 col-md-6">
   <div class="feature-item">
       <div class="feature-pic set-bg" data-setbg="${box.photo}">
           <div class="sale-notic">${box.sale}</div>
       </div>
       <div class="feature-text">
           <div class="text-center feature-title">
               <h5>${box.buildingName}</h5>
               <p><i class="fa fa-map-marker"></i>${box.buildingAddress}</p>
           </div>
           <div class="room-info-warp">
               <div class="room-info">
                   <div class="rf-left">
                       <p><i class="fa fa-th-large"></i>${box.area}</p>
                       <p><i class="fa fa-bed"></i>${box.bedroom}</p>
                   </div>
                   <div class="rf-right">
                       <p><i class="fa fa-car"></i>${box.garage}</p>
                       <p><i class="fa fa-bath"></i>${box.bathroom}</p>
                   </div>	
               </div>
               <div class="room-info">
                   <div class="rf-left">
                       <p><i class="fa fa-user"></i>${box.name}</p>
                   </div>
                   <div class="rf-right">
                       <p><i class="fa fa-clock-o"></i>${box.day}</p>
                   </div>	
               </div>
           </div>
           <a href="#" class="room-price">${box.price}</a>
       </div>
   </div>
</div>
`
}

document.getElementById("mainArea").innerHTML=`
${listings.map(boxTemplate).join('')}
`;