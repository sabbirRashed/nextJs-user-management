"use client";
import {FloppyDisk} from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";

const NewUserPage = () => {

    const onSubmit = async(e)=>{
        e.preventDefault();

        const formData = new FormData(e.target);
        const newUsers = Object.fromEntries(formData.entries());

        // console.log('new users data', newUsers);

        const req = await fetch('http://localhost:8000/users', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(newUsers)
        })
        const res= await req.json();
        console.log(res);

        if(res.success){
            alert('new user created successfully');
            redirect('/users')
        }

    }
    return (
      <div className="w-11/12 mx-auto mt-10">
        <h2 className="text-3xl font-semibold">Create a new post</h2>
          <Form className="w-full max-w-3xl" onSubmit={onSubmit}>
            <Fieldset>
                <Fieldset.Legend>Profile Settings</Fieldset.Legend>
                <Description>Update your profile information.</Description>
                <FieldGroup>
                    <TextField
                        isRequired
                        name="name"
                        validate={(value) => {
                            if (value.length < 3) {
                                return "Name must be at least 3 characters";
                            }
                            return null;
                        }}
                    >
                        <Label>Name</Label>
                        <Input placeholder="John Doe" />
                        <FieldError />
                    </TextField>
                    <TextField isRequired name="email" type="email">
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                   
                </FieldGroup>
                <Fieldset.Actions>
                    <Button type="submit">
                        <FloppyDisk />
                        Create new user
                    </Button>
                    <Button type="reset" variant="secondary">
                        Cancel
                    </Button>
                </Fieldset.Actions>
            </Fieldset>
        </Form>
      </div>
    );
};

export default NewUserPage;