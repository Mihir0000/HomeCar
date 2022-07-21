import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';

const New = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const nameChange = (e) => {
        setName(e.target.value);
    };
    const emailChange = (e) => {
        setEmail(e.target.value);
    };
    const submitHandler = () => {
        //   e.preventDefault();
      //   console.log(name, email);
        setEmail('');
        setName('');
    };
    return (
        <Container>
            <Card className="d-flex" style={{ width: '35%', margin: '0 auto' }}>
                <h3 className="d-flex justify-content-center">Contact</h3>

                <form
                    action=""
                    data-testid="valid-form"
                    className="d-flex justify-content-center p-5 w-100 flex-column "
                >
                    <input
                        data-testid="input-name"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={nameChange}
                        required={true}
                    />
                    <input
                        data-testid="input-email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={emailChange}
                        required={true}
                    />
                    <input type="text" placeholder="Message" />
                    <input
                        type="checkbox"
                        data-testid="input-checkbox-checked"
                    />
                    <button
                        data-testid="submit-btn"
                        type="submit"
                        className="btn"
                        onClick={submitHandler}
                    >
                        Click me
                    </button>
                </form>
            </Card>
        </Container>
    );
};

export default New;
