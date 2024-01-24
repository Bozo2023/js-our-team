const arObject=[
    {
    nome:"Wayne Barnett",
    poste:"Founder & CEO",
    pic:"wayne-barnett-founder-ceo.jpg"
    } , 
    {
     nome:"Angela Caroll",
     poste:"Chief Editor",
     pic:"angela-caroll-chief-editor.jpg"
     } , 
    {
     nome:"Walter Gordon",
     poste:"Social Media Manager",
     pic:"walter-gordon-office-manager.jpg"
   } , 
     {
    nome:"Angela Lopez",
    poste:"Scott Estrada",
    pic:"angela-lopez-social-media-manager.jpg"
     } , 
     {
     nome:"Wayne Barnett",
    poste:"Developer",
    pic:"scott-estrada-developer.jpg"
    } , 
     {
     nome:"Barbara Ramos",
    poste:"Graphic Designer",
    pic:"barbara-ramos-graphic-designer.jpg"
     } 
];

 console.log(arObject)
for (let i=0; i<arObject.length; i++ ){
    let element= arObject[i]
    console.log (element.nome, element.poste, element.pic)
   document.querySelector("main").innerHTML +=
   
   `
   <div class="card">
        <div class="image "> 
        <img src='.assest/img/${element.pic}'>
        </div>
        
    
    <h1>${element.nome}</h1>
    <span>${element.poste}</span>

</div>`

}

















	
		
		
		
		