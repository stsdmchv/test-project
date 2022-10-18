import React from 'react';

export const UserCard = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        console.log(formData)
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    name="username"
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                />
            </div>
            <div>
                <label htmlFor="firstName">First name</label>
                <input
                    id="firstName"
                    name="firstName"
                />
            </div>
            <div>
                <label htmlFor="lastName">Last name</label>
                <input
                    id="lastName"
                    name="lastName"
                />
            </div>
            <button>Save</button>
            <button>Delete card</button>
        </form>
    );
}

export default UserCard;