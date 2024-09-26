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
              Go to Google.com
            </button>
            </a>
            
          );
        }

        function HomePageButton() {
          return (
          
           <a href="https://google.com" >
            <button className="homePageButton">
            Go to Google.com
            </button>
            </a>
             

          );
        }

        function AboutPage() {
          return (
         
           <a href="https://google.com" >
            <button className="aboutPageButton">
            Go to Google.com
            </button>
            </a>
            

          );
        }


     
       
    
    