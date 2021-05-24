import React,{useState, preVal
} from 'react';

const Contact = () => {
  const [data, setData] = useState({
       fullname: "",
       phone: "",
       email: "",
       msg: "",
  });
  const InputEvent = (event) => {
    const {name, value} = event.target;
    
    setData((preVal) =>{
      return {
        ...preVal,
        [name]: value,
      };
    });
  } ;
    
const formsubmit = (e) => {
     e.preventDefault();
     alert(
           `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, here is what i watn to say ${data.password}`
     );
};
  return (
    <>
    <div style={{backgroundImage: `url("https://wallpaperaccess.com/full/1393189.jpg")`, height: "730px", marginTop: "0px"}}>
      <div className="my-">
        <h1 className="text-center">Register Now</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-12 mx-auto">
            <form onSubmit={formsubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">First Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={ data.firstname } onChange={InputEvent} placeholder="Enter First name" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={ data.lastname } onChange={InputEvent} placeholder="Enter Last name" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Screen Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={ data.fullname } onChange={InputEvent} placeholder="Enter Display name" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={ data.phone } onChange={InputEvent} placeholder="Enter your Mo No" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={ data.email } onChange={InputEvent} placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Paasword</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={ data.password } onChange={InputEvent} placeholder="Enter your password" />
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Contact;
