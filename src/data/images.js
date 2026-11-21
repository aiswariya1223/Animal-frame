const images = [
    { 
        id: 1, 
        name: "Cat", 
        img: "https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg="
    },
    { 
        id: 2, 
        name: "Dog", 
        img: "https://i.pinimg.com/736x/dd/92/15/dd92154640b6807270bc0d4f051be36a.jpg" 
    },
    {
        id: 3, 
        name: "rabbit", 
        img: "data:image/webp;base64,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.jpg"
    },
    {
        id: 4,
        name: "Cow", 
        img: "https://agritech.tnau.ac.in/animal_husbandry/images/Good%20cow.jpg"
    },
    { 
        id: 5, 
        name: "Parrot", 
      //  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCQHiGurHUVzL-21wSQoTpQjR1kSkm1PotEA&s" 
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxwgKzhL-XKplVnDkhP7XGc1fnZgWVlR1AQA&s"
    },
      { 
        id: 6,
         name: "Deer", 
         img: "https://www.nyc.gov/assets/wildlifenyc/images/content/pages/Deer.jpg"

       },
       {
        id:7,
        name:"lion",
        img:"https://cdn.britannica.com/30/150930-050-51878468/lion-panthea-leo-Namibia.jpg"

       },

       {
        id:8,
        name:"elephant",
        img:"https://i.natgeofe.com/k/e7ba8001-23ac-457f-aedb-abd5f2fdda62/moms5.png?wp=1&w=1084.125&h=745.5"
       },
       {  
        id:9,
        name:"giraffe",
       img:"https://images.squarespace-cdn.com/content/v1/58f4c8cad1758ec58b2bcc52/c9134f99-b095-42b7-93bd-f9643616392a/810A6255WT_byChantelleMelzer.jpg"
       },
]; 

export default images;
