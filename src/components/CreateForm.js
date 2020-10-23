import React from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap'

const CreateForm = ({handleChange, onSubmit}) => (
  <Form onSubmit={onSubmit}>
    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for="firstName">First Name *</Label>
          <Input type="text" name="first_name" id="firstName" onChange={handleChange}/>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="lastName">Last Name *</Label>
          <Input type="text" name="last_name" id="lastName" onChange={handleChange}/>
        </FormGroup>
      </Col>
    </Row>
    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for="Email">Email *</Label>
          <Input type="email" name="email" id="Email" onChange={handleChange}/>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="phone">Phone *</Label>
          <Input type="number" name="phone" id="phone" onChange={handleChange}/>
        </FormGroup>
      </Col>
    </Row>
    <Row form>
      <Col md={2}>
        <FormGroup>
          <Label for="birth">Date of Birth *</Label>
        </FormGroup>
      </Col>
      <Col md={3}>
        <FormGroup>
          <Input type="date" name="birth" id="birth" onChange={handleChange}/>
        </FormGroup>
      </Col>
    </Row>
    <Row form>
      <Col md={1}>
        <Label>Gender *</Label>
      </Col>
      <FormGroup check inline>
        <Label check>
          <Input type="radio" name='gender' value='Male' onChange={handleChange}/> Male
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Label check>
          <Input type="radio" name='gender' value='Female' onChange={handleChange}/> Female
        </Label>
      </FormGroup>
    </Row>
    <FormGroup>
      <Label for="Address">Address</Label>
      <Input type="text" name="address" id="Address" placeholder="Street Address" onChange={handleChange}/>
    </FormGroup>
    <FormGroup>
      <Label for="Address2">Address 2</Label>
      <Input type="text" name="address2" id="Address2" placeholder="Street Address 2" onChange={handleChange}/>
    </FormGroup>
    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for="City">City</Label>
          <Input type="text" name="city" id="City" onChange={handleChange}/>
        </FormGroup>
      </Col>
      <Col md={4}>
        <FormGroup>
          <Label for="State">State</Label>
          <Input type="text" name="state" id="State" onChange={handleChange}/>
        </FormGroup>
      </Col>
      <Col md={2}>
        <FormGroup>
          <Label for="Zip">Zip</Label>
          <Input type="text" name="zip" id="Zip" onChange={handleChange}/>
        </FormGroup>  
      </Col>
    </Row>
    <Row form>
      <Col md={2}>
        <FormGroup>
          <Label for="intendedMajor">Intended Major *</Label>
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Input type="text" name="intended_major" id="intendedMajor" onChange={handleChange}/>
        </FormGroup>
      </Col>
    </Row>
    <Row form>
      <Col md={4}>
        <FormGroup>
          <Label for="enrollment">Semester of Anticipated Enrollment *</Label>
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Input type="text" name="semester_enrollment" id="enrollment" onChange={handleChange}/>
        </FormGroup>
      </Col>
    </Row>
    <Button>Submit</Button>
  </Form>
)

export default CreateForm