import '../src/contact.css'
export default function Contact() {
     return (
     <>

     <div className= "bgcolor">
     <p>Contact</p>
     <form id="ffp">

  
				<label htmlFor="myFName"> *First Name: </label>
				<input type="text" id="myFNa  me" name="myFName" required="required" autoFocus /> <br /> <br />
				
				<label htmlFor="myLName"> *Last Name: </label>
				<input type="text" id="myLName" name="myLName" required="required" /> <br /> <br />
				
				
				<label htmlFor="myEmail"> *Email: </label>
				<input type="email" id="myEmail" name="myEmail" required="required" /> <br /> <br />
				
				<input type="submit"  className="submit" value="Submit" /> <br />
  
                    
					
		
		</form> <br></br>
          <p><i>Call me on: <strong>647 720 5055</strong></i></p>
 <p>facebook:www.xyz.facebook.com</p>
 <p>email:xyz@yahoo.com</p>
 </div>
     </>
     );
     }


    