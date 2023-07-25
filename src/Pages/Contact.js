import React from 'react'
import Navigate from './Navigate';
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Card,
  Row,
  Col,
} from "react-bootstrap";
import "./Conatctus.css";
import Animation from '../Components/Animation';
import * as Yup from "yup";
import Footer from '../Components/Footer';
function Contact() {
 const initialValues = {
      id:0,
      username: "",
      email: "",
      fname: "",
      lname: "",
      address: "",
      country: "",
      city: "",
      postalCode: "",
      about: ""
    };
    const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    fname: Yup.string().required("First Name is required"),
    lname: Yup.string().required("Last Name is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
    postalCode: Yup.number().required("Postal Code is required"),
    about: Yup.string(),
  });
   const handleSubmit = (values, { resetForm }) => {
   
    console.log(values);
localStorage.setItem("userInfo", JSON.stringify(values));
    // let newUser = values;
    // newUser.id = Date.now();
    // if (editingUser) {
    //   const updatedRecord = {
    //     id: editingUser.id, 
    //     username:values.username,
    //     email:values.email, 
    //      address:values.address,
    //      fname:values.fname, 
    //      lname:values.lname, 
    //      country:values.country, 
    //      city:values.city,  
    //      postalCode:values.postalCode,
    //      about:values.about
    //     }
    //   dispatch(updateUser(updatedRecord));
    // } else 
    // {
    //   dispatch(addUsers(newUser));
    // }
     resetForm();
     alert("Success");
    // history.push("/admin/table");
  };

  return (
    <div>
    <Navigate />
    <div className='container' style={{marginTop: '0.25rem', display:'flex', justifyContent: 'center'}}>
        <Card className='card-form' style={{backgroundColor: 'coral', width: '700px'}}>
          <Animation />
          <Card.Body>
         
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              enableReinitialize={true}
            >
              <Form >
                <Row>
                  <Col className="px-1" md="3">
                    <div className="form-group">
                      <label>Username</label>
                      <Field
                        className="form-control"
                        name="username"
                        type="text"
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="error-message ErrorMsgColor"
                      />
                    </div>
                  </Col>
                  <Col className="pl-1" md="4">
                    <div className="form-group">
                      <label>Email Address</label>
                      <Field
                        className="form-control"
                        name="email"
                        type="email"
                       
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error-message ErrorMsgColor "
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="6">
                    <div className="form-group">
                      <label>First Name</label>
                      <Field
                        className="form-control"
                        name="fname"
                        type="text"
                        
                      />
                      <ErrorMessage
                        name="fname"
                        component="div"
                        className="error-message ErrorMsgColor"
                      />
                    </div>
                  </Col>
                  <Col className="pl-1" md="6">
                    <div className="form-group">
                      <label>Last Name</label>
                      <Field
                        className="form-control"
                        name="lname"
                        type="text"
                       
                      />
                      <ErrorMessage
                        name="lname"
                        component="div"
                        className="error-message ErrorMsgColor"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <div className="form-group">
                      <label>Address</label>
                      <Field
                        className="form-control"
                        name="address"
                        type="text"
                        
                      />
                      <ErrorMessage
                        name="address"
                        component="div"
                        className="error-message ErrorMsgColor"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="4">
                    <div className="form-group">
                      <label>City</label>
                      <Field
                        className="form-control"
                        name="city"
                        type="text"
                       
                      />
                      <ErrorMessage
                        name="city"
                        component="div"
                        className="error-message ErrorMsgColor"
                      />
                    </div>
                  </Col>
                  <Col className="px-1" md="4">
                    <div className="form-group">
                      <label>Country</label>
                      <Field
                        className="form-control"
                        name="country"
                        type="text"
                        
                      />
                      <ErrorMessage
                        name="country"
                        component="div"
                        className="error-message ErrorMsgColor"
                      />
                    </div>
                  </Col>
                  <Col className="pl-1" md="4">
                    <div className="form-group">
                      <label>Postal Code</label>
                      <Field
                        className="form-control"
                        name="postalCode"
                        type="number"
                      
                      />
                      <ErrorMessage
                        name="postalCode"
                        component="div"
                        className="error-message ErrorMsgColor-red"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <div className="form-group">
                      <label>About Me</label>
                      <Field
                        className="form-control"
                        name="about"
                        as="textarea"
                        rows={4}
                       
                      />
                      <ErrorMessage
                        name="about"
                        component="div"
                        className="error-message ErrorMsgColor"
                      />
                    </div>
                  </Col>
                </Row>
                <button type="submit" className="btn btn-success btn-fill " style={{marginLeft: '18rem'}}>
                  Submit
                </button>
              </Form>
            </Formik>
          </Card.Body>
        </Card>
  </div>
  );
  <Footer />
    </div>
  )
}

export default Contact