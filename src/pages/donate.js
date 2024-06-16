import './donate.css';
import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

function Login() {
    const [data, setData] = React.useState({
        money: "",
        name: "",
    });

    function handleChange(event) {
        const { name, type, value, checked } = event.target;
        setData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    function alertThankYou() {
        alert(`Thank you for donating, ${data.name}`);
    }

    return (
        <div className="container">
            <div className="login">
                <form onSubmit={alertThankYou}>
                    <div className="donate">
                        <img src="https://wl-brightside.cf.tsp.li/resize/728x/webp/eed/915/fce72c5a6c88e2ab4e70cd8f01.jpg.webp" alt="Pet" className="petimg" />
                        <img src="https://wl-brightside.cf.tsp.li/resize/728x/webp/334/7b2/63c23d56338d5504f235987f21.jpg.webp" alt="Pet" className="petimg" />
                        <img src="https://wl-brightside.cf.tsp.li/resize/728x/webp/64e/86a/89e05153bbb38fe0a977169f55.jpg.webp" alt="Pet" className="petimg" />
                        <img src="https://wl-brightside.cf.tsp.li/resize/728x/webp/a7b/94d/9eb73e5ebab85ef16d9d54e83a.jpg.webp" alt="Pet" className="petimg" />
                    </div>

                    <div className="header-text">
                        <h1 className="title">Help Homeless Animals Find a Home</h1>
                    </div>

                    <div className="form-group">
                        <label className='label'>Name:</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            value={data.name}
                            onChange={handleChange}
                            className="input"
                        />
                    </div>

                    <div className="form-group">
                        <label className="label">Money:</label>
                        <input
                            name="money"
                            type="number"
                            placeholder="Enter Money"
                            value={data.money}
                            onChange={handleChange}
                            className="input"
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="submit">Donate</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
