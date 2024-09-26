import '../src/education.css'

export default function Education() {
     return (
     <>
    <div className="backgroundname">

     <EducationPageButton  />
     <HomePageButton />
     <AboutPage />

    <p>Education.Qualification</p>

    <>Degree: Computer science. Programming is major. </>
    </div>
     </>
     
     );
     }






     function EducationPageButton() {
          return (
           
           <a href="https://google.com" >
            <button className="eduButton">
              Go back to main page
            </button>
            </a>
            
          );
        }

        function HomePageButton() {
          return (
          
           <a href="https://google.com" >
            <button className="homePageButton">
              Go back to home
            </button>
            </a>
             

          );
        }

        function AboutPage() {
          return (
         
           <a href="https://google.com" >
            <button className="aboutPageButton">
              Go back to home
            </button>
            </a>
            

          );
        }


     
       
    
    